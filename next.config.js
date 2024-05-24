/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 Next.js 설정
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);


