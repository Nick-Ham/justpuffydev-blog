import path from 'path';

const contentBase = path.join(process.cwd(), 'content');

const postsBase = path.join(contentBase, 'posts');
const postMetadataBase = path.join(contentBase, 'postMetadata');
const postBuiltdataBase = path.join(contentBase, 'postBuiltdata');

const devSubfolder = 'dev';
const prodSubfolder = 'prod';

const jsonSubfolder = 'json';

const publicDir = path.join(process.cwd(), 'public');

const devPostsPath = path.join(postsBase, devSubfolder);
const prodPostsPath = path.join(postsBase, prodSubfolder);

const devPostMetadataPath = path.join(postMetadataBase, devSubfolder);
const prodPostMetadataPath = path.join(postMetadataBase, prodSubfolder);

const devPostBuiltdataPath = path.join(postBuiltdataBase, devSubfolder);
const prodPostBuiltdataPath = path.join(postBuiltdataBase, prodSubfolder);

function getIsDev(): boolean {
	return process.env.NODE_ENV !== 'production';
}

export function getActivePostsPath(): string {
	const isDev = getIsDev();
	return isDev ? devPostsPath : prodPostsPath;
}

export function getActivePostMetadataPath(): string {
	const isDev = getIsDev();
	return isDev ? devPostMetadataPath : prodPostMetadataPath;
}

export function getActivePostBuiltdataPath(): string {
	const isDev = getIsDev();
	return isDev ? devPostBuiltdataPath : prodPostBuiltdataPath;
}

export function getPublicJsonPath(): string {
	const isDev = getIsDev();

	let fullPath = path.join(publicDir, jsonSubfolder);
	fullPath = path.join(fullPath, isDev ? devSubfolder : prodSubfolder);

	return fullPath;
}

export function getPublicPath(): string {
	return publicDir;
}
