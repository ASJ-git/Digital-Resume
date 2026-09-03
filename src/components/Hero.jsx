import social from '../data/social.js';

export default function Hero() {
  return (
    <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
      <h1 className="font-head font-semibold text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-3xl">
        Abrusu Sampson Junior
      </h1>
      <p className="mt-5 max-w-xl text-base sm:text-lg text-[#4a4a46] dark:text-[#a3a3a8]">
        Self-driven frontend developer shipping real, deployed products: 16+
        live web apps built with React, JavaScript, Tailwind CSS and Vite.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
        {social.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener' : undefined}
            className={`social-chip ${index === 0 ? 'social-chip--solid' : 'social-chip--outline'}`}
          >
            <i className={link.icon}></i> {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
