export default function TimelineEntry({ period, title, company, bullets }) {
  return (
    <div className="relative pl-6 border-l-2 border-linelight dark:border-line">
      <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-accent"></div>
      <p className="text-xs uppercase tracking-widest text-accent font-head mb-1">{period}</p>
      <h3 className="font-head text-xl font-semibold">{title}</h3>
      <p className="text-sm text-[#4a4a46] dark:text-[#a3a3a8] mb-4">{company}</p>
      <ul className="space-y-2.5 text-base text-[#3a3a36] dark:text-[#c7c7cc] max-w-2xl">
        {bullets.map((bullet) => (
          <li key={bullet} className="check-item">
            <i className="fa-solid fa-check"></i>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
