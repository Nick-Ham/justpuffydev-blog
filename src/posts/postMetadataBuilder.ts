import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

import {getActivePostMetadataPath, getActivePostsPath} from '@/src/paths';
import {getAllPosts} from '@/src/posts/postDataBuilder';
import {PostMetadata, PostData} from '../types/types';

export function bakeMetadata(): void {
    const allPosts: PostData[] = getAllPosts();

    let regenerateMetaQueue: PostData[] = [];
    for (let currentPost of allPosts as PostData[]) {
        const currentPostId: string = currentPost.id;

        const metadataFileName: string = getCorrespondingMetaFile(currentPostId);

        const foundMeta: PostMetadata | undefined = getMetadata(metadataFileName);
        if (!foundMeta) {
            regenerateMetaQueue.push(currentPost);
            console.log(`Generated *NEW* metadata for "${currentPostId}"`);
            continue;
        }

        const isValid: boolean = isValidMetadata(foundMeta, currentPost);
        if (!isValid) {
            deleteMetadata(metadataFileName);
            regenerateMetaQueue.push(currentPost);

            console.log(`Regenerated metadata for "${currentPostId}", has it been edited?`);
        }
    }

    for (let currentPostData of regenerateMetaQueue) {
        generateMetadata(currentPostData);
    }
}

export function getAllMetadata(): PostMetadata[] {
    const metadataFileNames: string[] = fs.readdirSync(getActivePostMetadataPath());

    const allMetadata: PostMetadata[] = metadataFileNames
        .map((metadataFileName) => {
            return getMetadata(metadataFileName);
        })
        .filter((meta): meta is PostMetadata => meta !== undefined);

    return allMetadata;
}

function getMetadata(inFileName: string): PostMetadata | undefined {
    const fullPath: string = path.join(getActivePostMetadataPath(), inFileName);

    let fileContents: string = '';

    try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch (error) {
        const err: NodeJS.ErrnoException = error as NodeJS.ErrnoException;
        if (err.code === 'ENOENT') {
            return undefined;
        }

        throw err;
    }

    return JSON.parse(fileContents) as PostMetadata;
}


function deleteMetadata(inFileName: string): void {
    const fullPath: string = path.join(getActivePostMetadataPath(), inFileName);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Attempted to delete non-existent file at: ${fullPath}`);
    }

    fs.rmSync(fullPath);
}

function generateMetadata(inPostData: PostData): void {
    const id: string = inPostData.id;

    const contentHash: string = computeContentHash(inPostData.content);
    const size: number = estimateContentSize(inPostData.content);
    const date: string = inPostData.date;

    const meta: PostMetadata = {
        id,
        date,
        sizeBytes: size,
        contentHash
    };

    const outPath: string = path.join(getActivePostMetadataPath(), inPostData.id + '.json');

    fs.mkdirSync(getActivePostMetadataPath(), {recursive: true});
    fs.writeFileSync(outPath, JSON.stringify(meta, null, 3), 'utf8');
}

function isValidMetadata(inMeta: PostMetadata, inPostData: PostData): boolean {
    if (inMeta.id !== inPostData.id) {
        return false;
    }

    if (inMeta.date !== inPostData.date) {
        return false;
    }

    if (isNaN(inMeta.sizeBytes)) {
        return false;
    }

    if (inMeta.contentHash !== computeContentHash(inPostData.content)) {
        return false;
    }

    return true;
}

function getCorrespondingMetaFile(inPostId: string): string {
    return inPostId + '.json';
}

function estimateContentSize(content: string): number {
    const bytes: number = Buffer.byteLength(content, 'utf8');
    return bytes;
}

function computeContentHash(content: string): string {
    return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}
