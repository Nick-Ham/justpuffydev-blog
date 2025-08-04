import type { NextApiRequest, NextApiResponse } from 'next';
import { PostData } from '@/lib/types';
import { loadNextPostSet } from '@/lib/byteLoader';


export default function handler(req: NextApiRequest, res: NextApiResponse<PostData[]>) {
	const lastId = (req.query.lastId as string) || '';

	let nextPostSet: PostData[] = loadNextPostSet(lastId);

	res.status(200).send(nextPostSet);
}
