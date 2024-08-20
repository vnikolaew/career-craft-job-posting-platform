/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config, options) => {
      config.module.rules.push({
         test: /\.(graphql|gql)/,
         exclude: /node_modules/,
         loader: "graphql-tag/loader",
      });

      return config;
   },
   experimental: {
      fallbackNodePolyfills: false
   },
   images: {
      remotePatterns: [
         {
         hostname: `lh3.googleusercontent.com`,
         protocol: `https`,
      },
         {
            hostname: `avatars.githubusercontent.com`,
            protocol: `https`,
         },

         {
            hostname: `example.com`,
            protocol: `https`,
         }
      ]
   }
};

export default nextConfig;
