import { PostRenderData } from '@/src/types/types';
import { getActivePostBuiltdataPath } from '@/src/paths';

import path from 'path';
import fs from 'fs';


export function getPostRenderDataFromFile(postId: string): PostRenderData | undefined {
	const fullPath: string = path.join(getActivePostBuiltdataPath(), `${postId}.json`);

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

	return JSON.parse(fileContents) as PostRenderData;
}