const ASSET_NAMES = ["index.html","styles.css","app.mjs","home.mjs","site-nav.mjs","pwa.mjs","content.mjs","more-scenarios.mjs","intermediate-scenarios.mjs","advanced-scenarios.mjs","dialogue-data.mjs","essential-scenarios.mjs","life-and-work-scenarios.mjs","n3-library-meeting.mjs","more-vocabulary.mjs","advanced-vocabulary.mjs","vocabulary-rows.mjs","vocabulary-n5.mjs","vocabulary-n4.mjs","vocabulary-n3.mjs","vocabulary-n2.mjs","vocabulary-n1.mjs","expanded-vocabulary.mjs","practice.mjs","review.mjs","review-levels.mjs","study-skill.mjs","review-view.mjs","backup.mjs","backup-view.mjs","grammar.mjs","grammar-bank.mjs","grammar-expansion.mjs","reading.mjs","reading-bank.mjs","everyday-n3.mjs","listening.mjs","listening-bank.mjs","passage-question.mjs","quiz-catalog.mjs","text-quiz.mjs","text-quiz-view.mjs","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","images/kyoto-lane.jpg"];
const REVISION = "dedacfaa7f3d1f66";
/* The static build inserts ASSET_NAMES and REVISION before this file. */
const scope = self.registration.scope;
// The original app removes caches whose names begin with 'konoha-'.
const cachePrefix = 'konoha:travel-preview:' + scope + ':';
const previousPrefix = 'konoha-travel-preview:' + scope + ':';
const cacheName = cachePrefix + REVISION;
const assets = new Set(ASSET_NAMES.map(name => new URL(name, scope).href));
const entry = new URL('index.html', scope).href;

self.addEventListener('install', event => {
  const requests = [...assets].map(url => new Request(url, { cache: 'reload' }));
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(requests)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== cacheName && (key.startsWith(cachePrefix) || key.startsWith(previousPrefix)))
        .map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE' && event.source?.url.startsWith(scope)) {
    event.waitUntil(self.skipWaiting());
  }
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  url.search = '';
  url.hash = '';
  const page = request.mode === 'navigate' && (url.href === scope || url.href === entry);
  const cacheKey = page ? entry : request.url;
  if (!assets.has(cacheKey)) return;
  event.respondWith(caches.open(cacheName).then(cache =>
    cache.match(cacheKey).then(cached => cached || fetch(request))
  ));
});
