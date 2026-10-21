import projects from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-20 border-t border-linelight dark:border-line"
    >
      <h2 className="font-head text-2xl sm:text-3xl font-semibold mb-8">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {/* TO DO:  GitHub repo links aren't wired up yet, add "View Code" buttons to each card. */}
    </section>
  );
}
