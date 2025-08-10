import fs from 'fs';

import { PostMetadata } from '@/src/types/types';
import { postMetadataJson } from '@/src/publicDataLibraryPaths';

export function getPostMetadataCollection(): PostMetadata[] {
	let posts: PostMetadata[] = [];

	if (fs.existsSync(postMetadataJson)) {
		try {
			const fileContent = fs.readFileSync(postMetadataJson, 'utf-8');
			const parsed = JSON.parse(fileContent);

			posts = parsed as PostMetadata[];

		} catch (err) {
			console.error(`Failed to read or parse ${postMetadataJson}:`, err);
		}
	} else {
		console.warn(`File not found: ${postMetadataJson}`);
	}

	return posts;
}