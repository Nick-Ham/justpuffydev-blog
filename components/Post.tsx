'use client';

import { PostData } from '@/lib/types';

export default function Post({ post }: { post: PostData }) {
	return (
		<li>
			<h3>{post.title}</h3>
			<p>{post.date}</p>
			<pre>{post.content}</pre>
		</li>
	);
}