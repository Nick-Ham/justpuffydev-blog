import fs from 'fs';

import {getAllMetadata} from '@/src/posts/postMetadataBuilder';
import {PostMetadata} from '@/src/types/types';
import {postMetadataJson} from '@/src/publicDataLibraryPaths';
import {getPublicJsonPath} from "@/src/paths";
import {sortMetadataByRecent} from '@/src/posts/postSortHelper';

function generatePublicMetadataJSON(): void {
    const allMetadata: PostMetadata[] = getAllMetadata();
    sortMetadataByRecent(allMetadata);

    const outputPath: string = postMetadataJson;

    fs.mkdirSync(getPublicJsonPath(), {recursive: true});

    fs.writeFileSync(outputPath, JSON.stringify(allMetadata, null, 3));
}

function run() {
    generatePublicMetadataJSON();
}

run();
