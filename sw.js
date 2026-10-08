// 最基礎的 Service Worker，只負責讓瀏覽器判定符合 PWA 資格
self.addEventListener('install', (event) => {
    console.log('Service Worker 安裝成功');
});

self.addEventListener('fetch', (event) => {
    // 放行所有網路請求（因為我們的資料庫在 Firebase 雲端）
});