export default function ProjectCard({ title, description, tags, liveUrl }) {
  return (
    <article className="card">
      <h3 className="font-head text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[#4a4a46] dark:text-[#a3a3a8] mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-2 text-sm">
        <a href={liveUrl} target="_blank" rel="noopener" className="btn-primary">
          Live Demo
        </a>
      </div>
    </article>
  );
}
