import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { PostData } from './types';

import { getActivePostsPath } from '@/lib/paths';
import * as postParserHelper from '@/lib/postParserHelper';

export function getPostData(inFileName: string): PostData {
	const id = inFileName.replace(/\.md$/, '');

	const fullPath: string = path.join(getActivePostsPath(), `${id}.md`);
	const fileData: string = fs.readFileSync(fullPath, 'utf8');

	const { data, content } = matter(fileData);

	const title: any = data.title;
	const date: string = postParserHelper.dateToString(postParserHelper.getPostDate(data.date));

	return {
		id,
		title,
		date,
		content
	};
}

export function getAllPosts(): PostData[] {
	const fileNames = fs.readdirSync(getActivePostsPath());

	const allPostsData: PostData[] = fileNames.map((fileName) => {
		return getPostData(fileName);
	});

	return allPostsData;
}

export function getSortedPostsData(): PostData[] {
	return getAllPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}
