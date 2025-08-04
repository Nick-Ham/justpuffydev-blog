import { PostMetadata } from '@/lib/types';
import PostList from '@/components/PostList';

export default function Home() {
	return (
		<main className="p-4 max-w-3xl mx-auto">
			<h1 className="text-4xl font-bold mb-6">justpuffy.dev</h1>
			<PostList />
		</main>
	);
}
