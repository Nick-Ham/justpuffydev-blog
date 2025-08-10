'use client';

import * as blogData from '@/src/blogData'

export default function PostTitle({}: {}) {
    return (
        <div className="flex items-baseline justify-baseline w-full">
            <h1 className="font-geist-mono text-5xl text-left  text-amber-500 font-bold">{blogData.blogTitle}</h1>
            <span
                className="font-geist-mono text-3xl  text-amber-900 font-bold m-3 tracking-wide opacity-50">{blogData.blogCredits}
            </span>
        </div>
    );
}