/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Decap CMS fetches config.yml with a relative URL, which only
      // resolves correctly against "/admin/" (trailing slash). Force the
      // trailing slash so it works no matter how the URL is typed/shared.
      { source: "/admin", destination: "/admin/", permanent: false },
    ];
  },
  async rewrites() {
    return [{ source: "/admin/", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
