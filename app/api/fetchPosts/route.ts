import { NextRequest, NextResponse } from 'next/server';
import type { PostData, PostRenderData } from '@/src/types/types';
import { loadNextPostSet } from '@/src/loader/byteLoader';

export async function GET(request: NextRequest) {
	const url = request.nextUrl;
	const lastId = url.searchParams.get('lastId') ?? '';
	const nextPostSet: PostRenderData[] = loadNextPostSet(lastId);
	return NextResponse.json(nextPostSet);
}