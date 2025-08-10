import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { PostData } from '../types/types';

import { getActivePostsPath } from '@/src/paths';
import * as postParserHelper from '@/src/posts/postParserHelper';

export function getPostData(inFileName: string): PostData {
	const id = inFileName.replace(/\.mdx$/, '');

	const fullPath: string = path.join(getActivePostsPath(), `${id}.mdx`);
	const fileData: string = fs.readFileSync(fullPath, 'utf8');

	const { data, content } = matter(fileData);

	const title: any = data.title;
	const isPublished: any = data.isPublished;
	const date: string = postParserHelper.dateToString(postParserHelper.getPostDate(data.date));

	return {
		id,
		title,
		date,
		isPublished,
		content
	};
}

export function getAllPosts(): PostData[] {
	const fileNames = fs.readdirSync(getActivePostsPath());

	const allPostsData: PostData[] = fileNames.map((fileName) => {
		return getPostData(fileName);
	}).filter(postData => postData.isPublished);

	return allPostsData;
}

export function getSortedPostsData(): PostData[] {
	return getAllPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}
