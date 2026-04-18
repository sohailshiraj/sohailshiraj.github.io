import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Set basePath for GitHub project pages (repo name = sohailshiraj.github)
    // Remove this if using a custom domain
    basePath: process.env.GITHUB_ACTIONS ? '/sohailshiraj.github' : '',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    },
    experimental: {
        mdxRs: false,
    },
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig)
