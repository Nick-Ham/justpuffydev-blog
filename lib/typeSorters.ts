import { PostMetadata } from '@/lib/types';

export function sortMetadataByRecent(metadata: PostMetadata[]) {
	metadata.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		return dateB.getTime() - dateA.getTime(); // descending (newest first)
	});

	return metadata;
}