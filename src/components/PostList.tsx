'use client';

import Post from '@/src/components/Post';
import type { PostData, PostRenderData } from '@/src/types/types';
import { useEffect, useRef, useState } from 'react';

const fetchPostsGetURL: string = '/api/fetchPosts?';
const lastIdParam: string = 'lastId';

function getLastID(inPosts: PostRenderData[]): string | null {
	if (inPosts.length <= 0) {
		return null;
	}

	return inPosts[inPosts.length - 1].id;
}

export default function PostList() {
	const [posts, setPosts] = useState<PostRenderData[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const loaderRef = useRef<HTMLDivElement | null>(null);

	const loadMorePosts: () => Promise<void> = async (): Promise<void> => {
		setLoading(true);

		try {
			const params = new URLSearchParams();
			const lastId = getLastID(posts);
			if (lastId) params.append(lastIdParam, lastId);

			const fullURL = fetchPostsGetURL + params.toString();
			const res = await fetch(fullURL, { method: 'GET' });
			if (!res.ok) {
				console.log(fullURL);
				throw new Error('No Response from fetch');
			}

			const newPosts: PostRenderData[] = await res.json();

			setPosts((prevPosts: PostRenderData[]): PostRenderData[] => {
				const existingIDs = new Set(prevPosts.map((postData: PostRenderData) => postData.id));
				const uniqueNewPosts: PostRenderData[] = newPosts.filter(postData => !existingIDs.has(postData.id));
				return [...prevPosts, ...uniqueNewPosts];
			});

		} catch (err) {
			console.error(err);
			setError('Failed to fetch additional posts.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!loaderRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					loadMorePosts();
				}
			},
			{
				rootMargin: '200px'
			}
		);

		observer.observe(loaderRef.current);

		return () => observer.disconnect();
	}, [posts.length]);

	return (
		<div>
			<ul>
				{posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</ul>

			{error && (
				<p style={{ color: 'red', marginTop: '1rem' }}>
					{error}
				</p>
			)}

			{loading && <p>Loading more posts...</p>}

			<div ref={loaderRef} style={{ height: '1px' }}></div>
		</div>
	);

}