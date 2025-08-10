import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function postRenderDataBuilder(source: string): Promise<MDXRemoteSerializeResult> {
	const { serialize } = await import('next-mdx-remote/serialize');
	const remarkGfm = (await import('remark-gfm')).default;
	const remarkBreaks = (await import('remark-breaks')).default;
	const rehypeSlug = (await import('rehype-slug')).default;
	const rehypeAutolinkHeadings = (await import('rehype-autolink-headings')).default;

	return await serialize(source, {
		parseFrontmatter: false,
		mdxOptions: {
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
		}
	});
}