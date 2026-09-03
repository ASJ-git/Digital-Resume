import experience from '../data/experience.js';
import TimelineEntry from './TimelineEntry.jsx';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 border-t border-linelight dark:border-line">
      <h2 className="font-head text-2xl sm:text-3xl font-semibold mb-8">Experience</h2>
      <div className="space-y-10">
        {experience.map((entry) => (
          <TimelineEntry key={entry.title} {...entry} />
        ))}
      </div>
    </section>
  );
}
