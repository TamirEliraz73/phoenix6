import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'win98icons.alexmeub.com',
      pathname: '/icons/**',
    }, {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
      pathname: '/wikipedia/**',
    }, {
      protocol: 'https',
      hostname: 'cdn-icons-png.flaticon.com',
      pathname: '/512/**',
    }, {
      protocol: 'https',
      hostname: 'flagcdn.com',
      pathname: '/w40/**',
    }, {
      protocol: 'https',
      hostname: 'www.fcbarcelona.com',
      pathname: '/resources/**',
    }, {
      protocol: 'https',
      hostname: 'www.flagcolorcodes.com',
      pathname: '/data/**',
    }, {
      protocol: 'https',
      hostname: 'w7.pngwing.com',
      pathname: '/pngs/**'
    }, {
      protocol: 'https',
      hostname: 'logos-world.net',
      pathname: '/wp-content/uploads/**',
    }, {
      protocol: 'https',
      hostname: '1000logos.net',
      pathname: '/wp-content/uploads/**'
    }, {
      protocol: 'https',
      hostname: 'assets.stickpng.com',
      pathname: '/images/**'//https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png
    }, {
      protocol: 'https',
      hostname: 'hpaudiobooks.app',
      pathname: '/wp-content/uploads/2017/12/**'
    },
      //     {
      //     protocol:'https',
      //     hostname:'banner2.cleanpng.com',
      //     pathname:'/20180716/upj/**'
      // }
    ]
  },
  async redirects() {
    return [
      {
        source: '/ai/intro', // הנתיב הישן
        destination: '/ai/intro/introduction', // הנתיב החדש
        permanent: true, // 301 Redirect (קבוע)
      },
    ]
  }
};

export default nextConfig;
