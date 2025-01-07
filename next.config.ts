import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"http",
                hostname:"localhost",
            },
            {
                protocol:"https",
                hostname:"imagedelivery.net"
            },
            {
                protocol:"https",
                hostname:"placehold.co"
            }
        ]
    }
};

export default withNextIntl(nextConfig);