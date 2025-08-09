'use client';

import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

import {PostData} from '@/src/types/types';

export function normalizeMarkdownLineBreaks(content: string): string {
    // Normalize line endings
    let normalized = content.replace(/\r\n/g, '\n');

    // Split into paragraphs by double newlines
    const paragraphs = normalized.split(/\n{2,}/);

    // Rejoin lines within paragraphs carefully
    const cleanedParagraphs = paragraphs.map(paragraph => {
        const lines = paragraph.split('\n');

        // If this is a blockquote or list, keep its structure
        if (lines.some(line => line.startsWith('>') || line.match(/^[-*+] /) || line.match(/^\d+\. /))) {
            return lines.join('\n');
        }

        // Otherwise, merge lines into flowing paragraph
        return lines.join(' ').replace(/\s+/g, ' ').trim();
    });

    // Rejoin paragraphs with double line breaks
    return cleanedParagraphs.join('\n\n');
}

export default function Post({post}: { post: PostData }) {
    return (
        <li className="p-[2px] rounded-xl bg-gradient-to-br from-amber-500 via-orange-700 to-gray-800 mb-4">
            <div className="bg-zinc-900 rounded-[calc(1rem-2px)] p-6">
                <h3 className="font-geist-mono text-2xl font-semibold">{post.title}</h3>
                <p className="font-medium text-1xl text-gray-700">{post.date}</p>
                <div className="prose prose-invert max-w-none p-1">
                    <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                            p: ({node, ...props}) => (
                                <p className="break-words" {...props} />
                            )
                        }}>
                        {normalizeMarkdownLineBreaks(post.content)}
                    </ReactMarkdown>

                    <p className="font-geist-mono font-bold opacity-50 text-amber-500">- puffy</p>
                </div>
            </div>
        </li>
    );
}