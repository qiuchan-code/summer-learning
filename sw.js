/**
 * Service Worker — 离线缓存
 * 让小朋友在没有网络的情况下也能学习
 */

const CACHE_NAME = 'summer-learning-v1';

// 需要预缓存的核心文件
const PRE_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/storage.js',
  './js/schedule.js',
  './js/rewards.js',
  './js/generator.js',
  './js/quiz.js',
  './js/easter-eggs.js',
  './js/data/chinese.js',
  './js/data/math.js',
  './js/data/english.js',
  './js/data/exams.js',
  './manifest.json'
];

// 安装时预缓存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRE_CACHE))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('预缓存部分失败（正常，文件可能尚未生成）:', err))
  );
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 请求拦截：缓存优先，网络补充
self.addEventListener('fetch', (event) => {
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // 后台更新缓存
        fetch(event.request).then(res => {
          if (res.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, res);
            });
          }
        }).catch(() => {});
        return cached;
      }
      // 没缓存就走网络
      return fetch(event.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return res;
      });
    })
  );
});
