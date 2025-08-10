import { PostMetadata, PostRenderData } from '@/src/types/types';
import { getPostMetadataCollection } from '@/src/posts/postMetadataLoader';
import { getPostRenderData } from '@/src/loader/runtimeContentFetcher';

const BYTE_BUDGET: number = 2 * 1024; //128 * 1024;

export function loadNextPostSet(inLastId: string): PostRenderData[] {
	let nextPostSet: PostRenderData[] = [];
	let remainingBudget: number = BYTE_BUDGET;

	let foundLastId: boolean = false;
	const postMetadata: PostMetadata[] = getPostMetadataCollection();
	for (let currentMeta of postMetadata) {
		if (inLastId !== '' && !foundLastId) {
			if (inLastId !== currentMeta.id) {
				continue;
			}

			foundLastId = true;
			continue;
		}

		const newRenderData: PostRenderData | undefined = getPostRenderData(currentMeta.id);
		if (!newRenderData) {
			console.log(`Metadata pointing to missing built data for ${currentMeta.id}`);
			continue;
		}

		nextPostSet.push(newRenderData);

		remainingBudget -= currentMeta.sizeBytes;

		if (remainingBudget <= 0) {
			break;
		}
	}

	return nextPostSet;
}
