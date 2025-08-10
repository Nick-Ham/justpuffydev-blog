import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostMetadata = {
	id: string;
	date: string;
	sizeBytes: number;
	contentHash: string;
};

export type PostData = {
	id: string;
	title: string;
	date: string;
	isPublished: boolean;
	content: string;
};

export type PostRenderData = {
	id: string;
	title: string;
	date: string;
	compiledMDX: MDXRemoteSerializeResult;
};