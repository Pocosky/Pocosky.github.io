(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');

  const savedTheme = localStorage.getItem('timur-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#0a1519' : '#f6faf9');
  }

  applyTheme(initialTheme);
  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('timur-theme', nextTheme);
  });

  year.textContent = new Date().getFullYear();
})();
