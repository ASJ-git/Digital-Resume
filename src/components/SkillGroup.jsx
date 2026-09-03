export default function SkillGroup({ category, items, span }) {
  return (
    <div className={span ? 'sm:col-span-2' : undefined}>
      <h3 className="font-head text-sm uppercase tracking-widest text-accent mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
