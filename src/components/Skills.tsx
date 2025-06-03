
import { Badge } from '@/components/ui/badge';

// Simple skill categories with clean presentation
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Python", "PostgreSQL", "API Design"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Work", "Communication", "Learning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="pill inline-block mb-3">Skills</div>
          <h2 className="text-3xl md:text-4xl font-bold text-notion-text mb-4">
            What I Work With
          </h2>
          <p className="text-lg text-notion-text/70 max-w-xl mx-auto">
            Tools and technologies I use to build digital products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-notion-text mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline"
                    className="bg-notion-gray/30 hover:bg-notion-gray/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-notion-text/60 text-sm">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
