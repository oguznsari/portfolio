/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.upstash.com',
            }
        ]
     }    
}

// I used local file no need for this config but added anyways

module.exports = nextConfig
