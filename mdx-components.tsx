import type { MDXComponents } from 'mdx/types';
import Callout from '@/src/components/mdxDecorators/Callout';
import ImageCenter from '@/src/components/mdxDecorators/ImageCenter';

const components: MDXComponents = {
	Callout,
	ImageCenter
};

export function useMDXComponents(): MDXComponents {
	return components;
}