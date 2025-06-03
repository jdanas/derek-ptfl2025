
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "Productivity Dashboard",
    description: "A comprehensive dashboard for tracking productivity metrics with customizable widgets and real-time data visualization.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A feature-rich e-commerce solution with integrated payment processing, inventory management, and analytics.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered tool that generates high-quality content based on user prompts and preferences.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  // Use Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = parseInt(entry.target.id.split('-')[1]);
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe all project elements
    projects.forEach(project => {
      const element = document.getElementById(`project-${project.id}`);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-notion-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="pill inline-block mb-3">My Work</div>
          <h2 className="text-3xl md:text-4xl font-bold text-notion-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-notion-text/70 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              id={`project-${project.id}`}
              key={project.id}
              className={`glass-card overflow-hidden transition-all duration-700 transform ${
                visibleProjects.includes(project.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Project image */}
              <div className="aspect-video w-full bg-notion-gray/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-notion-text mb-2">
                  {project.title}
                </h3>
                <p className="text-notion-text/70 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-sm font-medium text-notion-blue hover:text-notion-blue/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-sm font-medium text-notion-text/70 hover:text-notion-text transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-notion-text/20 rounded-lg text-notion-text font-medium hover:border-notion-text/50 hover-lift transition-all"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
