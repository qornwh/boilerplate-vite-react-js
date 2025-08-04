// public/service-worker.js

const CACHE_NAME = 'my-pwa-cache-v1';
const ASSETS_TO_CACHE = ['/', '/index.html', '/manifest.webmanifest', '/pwa-icon-192.png', '/pwa-icon-512.png'];

// 설치 단계: 초기 캐싱
self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE)));
  self.skipWaiting(); // 설치 후 바로 activate
});

// 활성화 단계: 오래된 캐시 정리
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activate');
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))));
  self.clients.claim(); // 컨트롤 권한 획득
});

// 요청 가로채기: 캐시 우선 제공
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
