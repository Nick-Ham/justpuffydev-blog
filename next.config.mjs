import createMDX from '@next/mdx';

const withMDX = createMDX({
	// Support .mdx (and .md if you want—omit 'md' if you’re dropping it)
	extension: /\.mdx?$/,
	options: {
		// These only matter if you import .mdx directly as pages/components.
		// (Your next-mdx-remote build step has its own remark/rehype config.)
		remarkPlugins: [],
		rehypePlugins: []
	}
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
	// Only include 'md' if you still want markdown pages.
	pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js'],

	// You can still tweak webpack for OTHER things here.
	// Just DON'T add your own .mdx rule—@next/mdx already handles it.
	webpack(config, { isServer }) {
		// Example: extra aliases or loaders for non-mdx stuff
		// config.resolve.alias['~'] = path.resolve(__dirname, 'src')
		return config;
	},

	// Make server-only built JSON available to your API route in production:

	outputFileTracingIncludes: {
		'./app/api/fetchPosts/route.ts': ['./content/postBuiltdata']
	}

});

export default nextConfig;