import { PostData, PostMetadata } from '@/lib/types';
import { getPostMetadata } from '@/lib/postMetadataLoader';
import { getPostData } from '@/lib/postDataBuilder';

const BYTE_BUDGET: number = 2 * 1024; //128 * 1024;

export function loadNextPostSet(inLastId: string): PostData[] {
	let nextPostSet: PostData[] = [];
	let remainingBudget: number = BYTE_BUDGET;

	let foundLastId: boolean = false;
	const postMetadata: PostMetadata[] = getPostMetadata();
	for (let currentMeta of postMetadata) {
		if (inLastId !== '' && !foundLastId) {
			if (inLastId !== currentMeta.id) {
				continue;
			}

			foundLastId = true;
			continue;
		}

		const newPostData: PostData = getPostData(currentMeta.id);
		nextPostSet.push(newPostData);

		remainingBudget -= currentMeta.sizeBytes;

		if (remainingBudget <= 0) {
			break;
		}
	}

	return nextPostSet;
}
