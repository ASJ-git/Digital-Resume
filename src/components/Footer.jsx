import social from '../data/social.js';

export default function Footer() {
  return (
    <footer className="border-t border-linelight dark:border-line mt-10">
      <div className="mx-auto max-w-5xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-[#6f6f6a] dark:text-[#77777c]">
          &copy; 2025 Abrusu Sampson Junior. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          {social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
