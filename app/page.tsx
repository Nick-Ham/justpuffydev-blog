import PostList from '@/src/components/PostList';
import PostTitle from "@/src/components/PageTitle";


export default function Home() {
    return (
        <main className="p-4 max-w-3xl mx-auto">
            <PostTitle/>
            <PostList/>
        </main>
    );
}
