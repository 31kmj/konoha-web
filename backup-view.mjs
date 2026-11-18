import { createBackup, parseBackup } from './backup.mjs';

function summarizeProgress(snapshot) {
  const scenes = Object.entries(snapshot)
    .filter(([key, value]) => key.startsWith('answers:') && Array.isArray(value) && value.length > 0).length;
  const words = Object.keys(snapshot.review?.records ?? {}).length;
  return `시작한 회화 ${scenes}개, 학습한 단어 ${words}개`;
}

export function setupBackup({ readSnapshot, restoreSnapshot, refresh, storageKey }) {
  const byId = id => document.getElementById(id);
  const fileInput = byId('backup-file');
  const apply = byId('backup-apply');
  const status = byId('backup-status');
  const summary = byId('backup-summary');
  let imported = null;
  let selected = 0;

  byId('backup-export').addEventListener('click', () => {
    const backup = createBackup(readSnapshot());
    const file = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(file);
    const download = document.createElement('a');
    download.href = url;
    download.download = `konoha-travel-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = '브라우저의 다운로드 목록에서 백업 파일을 확인해 주세요.';
  });

  fileInput.addEventListener('change', async () => {
    const selection = ++selected;
    imported = null;
    apply.disabled = true;
    status.textContent = '';
    summary.hidden = true;
    const file = fileInput.files[0];
    if (!file) return;

    try {
      if (file.size > 1_000_000) throw new Error('Backup exceeds maximum size');
      const snapshot = parseBackup(await file.text());
      if (selected !== selection) return;
      imported = snapshot;
      apply.disabled = false;
      status.textContent = '복원하면 이 브라우저의 학습 기록이 선택한 파일의 기록으로 바뀌어요.';
      summary.textContent = `현재 ${summarizeProgress(readSnapshot())} · 선택한 파일 ${summarizeProgress(snapshot)}`;
      summary.hidden = false;
    } catch {
      if (selected !== selection) return;
      status.textContent = '코노하에서 내보낸 JSON 백업 파일을 선택해 주세요.';
    }
  });

  apply.addEventListener('click', async () => {
    if (!imported) return;
    apply.disabled = true;
    const snapshot = imported;
    const selection = selected;
    const restore = () => selected === selection && restoreSnapshot(snapshot);
    let restored = false;
    try {
      restored = navigator.locks ? await navigator.locks.request(storageKey, restore) : restore();
    } catch {
      restored = false;
    }
    if (selected !== selection) return;
    if (!restored) {
      status.textContent = '백업을 저장하지 못했어요. 브라우저 저장 공간을 확인해 주세요.';
      apply.disabled = false;
      return;
    }
    refresh();
    imported = null;
    fileInput.value = '';
    summary.hidden = true;
    apply.disabled = true;
    status.textContent = '학습 기록과 표시 설정을 복원했어요.';
  });
}
