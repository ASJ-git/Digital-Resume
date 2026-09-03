import skillGroups from '../data/skills.js';
import SkillGroup from './SkillGroup.jsx';

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t border-linelight dark:border-line">
      <h2 className="font-head text-2xl sm:text-3xl font-semibold mb-8">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <SkillGroup key={group.category} {...group} />
        ))}
      </div>
    </section>
  );
}
