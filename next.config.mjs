/** @type {import('next').NextConfig} */
//? This config file lets you use photos from other websites. You have to add them like I did below for pixels.com

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pixels.com"
            }
        ]
    }
};

export default nextConfig;
