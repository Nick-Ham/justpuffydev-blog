import { PostMetadata, PostRenderData } from '@/src/types/types';
import { getPostRenderDataFromFile } from '@/src/posts/postRenderDataLoader';
import { getPostMetadataCollection } from '@/src/posts/postMetadataLoader';

// RuntimeContentFetcher: general api to import to keep the file loading easy for runtime access
// created to make it easier to grab what is needed as the CMS-lite grows

export function getAllMetadata(): PostMetadata[] {
	return getPostMetadataCollection();
}

export function getPostRenderData(postId: string): PostRenderData | undefined {
	return getPostRenderDataFromFile(postId);
}