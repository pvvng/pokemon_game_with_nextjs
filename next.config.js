
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // 여기에 기존의 Next.js 설정을 추가할 수 있습니다.
});


