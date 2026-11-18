export function setupNavigation(onPageChanged) {
  const pages = new Map([...document.querySelectorAll('[data-page]')].map(page => [page.id, page]));
  const links = [...document.querySelectorAll('[data-nav]')];
  const rail = document.querySelector('.site-rail');
  const menu = document.getElementById('site-menu');
  const primaryLinks = [...rail.querySelectorAll('.mobile-nav [data-nav]')];
  const menuButton = document.getElementById('menu-button');
  const main = document.getElementById('main');
  let current;

  function setMenu(open) {
    rail.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  }

  function showPage(moveFocus = false) {
    const requested = location.hash.slice(1);
    current = pages.has(requested) ? requested : 'home';
    for (const [id, page] of pages) page.hidden = id !== current;
    for (const link of links) {
      if (link.dataset.nav === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
    const heading = pages.get(current).querySelector('h1');
    const name = menu.querySelector('[data-nav="' + current + '"]')?.lastChild.textContent.trim() ?? heading.textContent;
    document.getElementById('page-location').textContent = name;
    document.title = name + ' · 코노하';
    menuButton.classList.toggle('is-current', !primaryLinks.some(link => link.dataset.nav === current));
    setMenu(false);
    onPageChanged(current);
    if (moveFocus) {
      window.scrollTo(0, 0);
      heading.focus({ preventScroll: true });
    }
  }

  menuButton.addEventListener('click', () => {
    const open = !rail.classList.contains('menu-open');
    setMenu(open);
    if (open) {
      const item = menu.querySelector('a[aria-current="page"]:not([data-primary])')
        ?? menu.querySelector('a:not([data-primary])');
      item?.focus();
    }
  });
  document.addEventListener('pointerdown', event => {
    if (rail.classList.contains('menu-open') && !event.target.closest('#site-menu, #menu-button')) {
      setMenu(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !rail.classList.contains('menu-open')) return;
    setMenu(false);
    menuButton.focus();
  });
  rail.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link?.hash === location.hash && link.hash === '#' + current) {
      event.preventDefault();
      showPage(true);
    }
  });
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    setMenu(false);
    main.focus();
  });
  window.addEventListener('hashchange', () => showPage(true));
  showPage();
}
