export function setupOffline() {
  if (!('serviceWorker' in navigator)) return;
  const workers = navigator.serviceWorker;
  const status = document.getElementById('offline-status');
  const update = document.getElementById('app-update');
  const workerUrl = new URL('./sw.js', document.baseURI).href;
  let registration;
  let reloadRequested = false;
  let pageWorker = workers.controller;
  let refreshAvailable = false;

  function offerUpdate() {
    update.hidden = !refreshAvailable && !registration?.waiting;
    if (!update.hidden) status.textContent = '새 버전을 사용할 수 있어요.';
  }

  workers.addEventListener('controllerchange', () => {
    const controller = workers.controller;
    if (controller?.scriptURL !== workerUrl) return;
    if (reloadRequested) {
      window.location.reload();
      return;
    }
    if (pageWorker && pageWorker !== controller) {
      refreshAvailable = true;
      offerUpdate();
    }
    pageWorker = controller;
  });

  update.addEventListener('click', () => {
    const waiting = registration?.waiting;
    if (waiting) {
      reloadRequested = true;
      update.disabled = true;
      waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
    } else if (refreshAvailable) {
      window.location.reload();
    }
  });

  function watchInstall(worker) {
    worker?.addEventListener('statechange', offerUpdate);
  }

  workers.register(workerUrl, { updateViaCache: 'none' }).then(async result => {
    registration = result;
    registration.addEventListener('updatefound', () => watchInstall(registration.installing));
    watchInstall(registration.installing);
    const ready = await workers.ready;
    if (ready.active?.scriptURL === workerUrl) status.textContent = '오프라인 사용 가능';
    offerUpdate();
  }).catch(() => {
    status.textContent = '오프라인 준비를 마치지 못했어요.';
  });
}
