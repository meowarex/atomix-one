/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    /* I moved Radiant Lyrics to its own site <3 */
    const destination = "https://radiant-lyrics.org";
    return [{ source: "/radiant-lyrics", destination, permanent: true }];
  },
};

export default nextConfig;
