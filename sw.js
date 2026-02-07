const CACHE_NAME = 'syzygy-v1';
const ASSETS = [
  './',
  './index.html',
  './css/contato.css',
  './validation.js',
  './manifest.json',
  './assets/icone-glx.png'
];

// Instalação: Salva os arquivos no cache do navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache espacial desbloqueado!');
      return cache.addAll(ASSETS);
    })
  );
});

// Estratégyy: Tenta buscar na rede, se falhar, usa o cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});