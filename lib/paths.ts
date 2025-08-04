import path from 'path';

const postsBase = path.join(process.cwd(), 'posts');
const postMetadataBase = path.join(process.cwd(), 'postMetadata');

const devSubfolder = 'dev';
const prodSubfolder = 'prod';
const jsonSubfolder = 'json';

const publicDir = path.join(process.cwd(), 'public');

const devPostsPath = path.join(postsBase, devSubfolder);
const prodPostsPath = path.join(postsBase, prodSubfolder);

const devPostMetadataPath = path.join(postMetadataBase, devSubfolder);
const prodPostMetadataPath = path.join(postMetadataBase, prodPostsPath);

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

export function getPublicJsonPath(): string {
	return path.join(publicDir, jsonSubfolder);
}

export function getPublicPath(): string {
	return publicDir;
}
