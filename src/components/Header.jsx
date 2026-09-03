import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
];

export default function Header() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('asj-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-linelight dark:border-line bg-paper/80 dark:bg-ink/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-head font-semibold tracking-tight text-lg">
          ASJ
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark((prev) => !prev)}
            className="grid place-items-center size-11 rounded-full border border-linelight dark:border-line hover:border-accent transition-colors"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun text-accent' : 'fa-moon'}`}></i>
          </button>
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden grid place-items-center size-11 rounded-full border border-linelight dark:border-line"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden border-t border-linelight dark:border-line px-5 py-3 flex-col gap-1 text-sm font-medium bg-paper dark:bg-ink ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
