import { PostData, PostMetadata, PostRenderData } from '@/src/types/types';
import { getPostMetadataCollection } from '@/src/posts/postMetadataLoader';
import { getActivePostBuiltdataPath } from '@/src/paths';
import { getPostData } from '@/src/posts/postDataBuilder';
import { postRenderDataBuilder } from '@/src/posts/postRenderDataBuilder';

import fs from 'fs';
import path from 'path';

async function run() {
	let allPostMetadata: PostMetadata[] = getPostMetadataCollection();

	const workingBuiltDataDir = getActivePostBuiltdataPath();
	fs.mkdirSync(workingBuiltDataDir, { recursive: true });

	for (const postMetadata of allPostMetadata) {
		const postData: PostData = getPostData(postMetadata.id);
		const compiled = await postRenderDataBuilder(postData.content);

		// write to ... what... a json? at workingBultDataDir   postId.json?
		const renderData: PostRenderData = {
			id: postData.id,
			title: postData.title,
			date: postData.date,
			compiledMDX: compiled
		};

		const outPath = path.join(workingBuiltDataDir, `${postData.id}.json`);
		fs.writeFileSync(outPath, JSON.stringify(renderData, null, 3), 'utf8');
	}
}

run().catch(err => {
	console.error(err);
	process.exit(1);
});