import fs from 'fs';

import { getAllMetadata } from '@/lib/postMetadataBuilder';
import { PostMetadata } from '@/lib/types';
import { postMetadataJson } from '@/lib/publicDataLibraryPaths';
import { sortMetadataByRecent } from '@/lib/typeSorters';

function generatePublicMetadataJSON(): void {
	const allMetadata: PostMetadata[] = getAllMetadata();
	sortMetadataByRecent(allMetadata);
	
	const outputPath: string = postMetadataJson;

	fs.writeFileSync(outputPath, JSON.stringify(allMetadata, null, 3));
}

function run() {
	generatePublicMetadataJSON();
}

run();
