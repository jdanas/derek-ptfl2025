import { useState, useEffect } from 'react';
import { User, MapPin, Briefcase, Clock, Award, Star, Diamond, Shield, Crown, Code, Palette, Zap, Cpu, Database, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = document.getElementById('trading-card');
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    const distanceFromCenter = Math.sqrt(
      Math.pow((x - centerX) / centerX, 2) + 
      Math.pow((y - centerY) / centerY, 2)
    );
    
    setGlowIntensity(0.5 + distanceFromCenter);
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowIntensity(0.5);
  };

  const skills = [
    { name: "React", level: 92, icon: Code, color: "#61DAFB" },
    { name: "TypeScript", level: 88, icon: Cpu, color: "#3178C6" },
    { name: "UI/UX", level: 85, icon: Palette, color: "#FF6B6B" },
    { name: "Node.js", level: 79, icon: Database, color: "#339933" },
    { name: "Web3", level: 73, icon: Globe, color: "#F7931E" }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div 
        id="about-section"
        className={`max-w-6xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 lg:sticky lg:top-24 self-start">
            <div className="mb-8 max-w-md mx-auto lg:mx-0">
              <div 
                className="perspective-1000 mx-auto" 
                style={{ perspective: '1000px' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Card 
                  id="trading-card"
                  className="w-[400px] max-w-full mx-auto overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 ease-out"
                  style={{ 
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    background: 'linear-gradient(135deg, #F7F6F3 0%, #E4E2DD 100%)',
                    transformStyle: 'preserve-3d',
                    boxShadow: `0 0 ${20 + glowIntensity * 30}px ${glowIntensity * 15}px rgba(55, 53, 47, ${0.1 + glowIntensity * 0.1})`,
                    border: '8px solid #F7F6F3',
                    position: 'relative',
                  }}
                >
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-white border border-notion-gray text-notion-text px-3 py-1 text-xs font-bold shadow-sm">
                      RARE
                    </Badge>
                  </div>
                  
                  <div className="absolute inset-0 border-[10px] border-notion-gray/10 opacity-30 rounded-lg pointer-events-none"></div>
                  
                  <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                  
                  <CardContent className="p-8 relative mt-4">
                    <div className="absolute top-0 left-0 w-full h-12 bg-notion-gray/10 flex items-center justify-between px-4">
                      <div className="text-notion-text text-sm font-bold tracking-widest uppercase">Developer Series</div>
                      <div className="flex items-center gap-2">
                        <Diamond className="h-4 w-4 text-notion-text/60" />
                        <span className="text-xs font-mono text-notion-text/60">25/100</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-notion-text">Frontend Master</h3>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-notion-gray/20 border border-notion-gray/30 text-notion-text font-bold">5</div>
                    </div>
                    
                    <div className="flex items-center text-sm text-notion-text/60 mb-4 gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Developer - UI/UX Specialist</span>
                    </div>
                    
                    <div className="relative mb-3">
                      <div className="absolute -inset-0.5 bg-notion-gray/20 rounded-lg blur-sm"></div>
                      <div className="relative bg-gradient-to-b from-notion-gray/10 to-notion-gray/5 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                        <Avatar className="h-24 w-24 border-2 border-notion-gray/20 shadow-lg">
                          <AvatarImage src="/placeholder.svg" alt="Developer" />
                          <AvatarFallback className="bg-notion-gray/5">
                            <User className="h-12 w-12 text-notion-text/40" />
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="absolute -right-6 -top-6 w-20 h-20 bg-notion-gray/10 rounded-full"></div>
                        <div className="absolute -left-4 bottom-8 w-14 h-14 bg-notion-gray/10 rounded-full"></div>
                        <div className="absolute right-10 -bottom-2 w-12 h-12 bg-notion-gray/10 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-notion-gray/5 via-white/30 to-notion-gray/10 backdrop-blur-sm p-4 rounded-lg border border-notion-gray/20 mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>
                      
                      <div className="text-sm text-notion-text font-medium mb-3 flex items-center gap-2">
                        <div className="relative">
                          <Code className="h-4 w-4 text-notion-text/60" />
                          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-notion-blue rounded-full animate-pulse"></div>
                        </div>
                        <span>Core Skills</span>
                        <div className="ml-auto text-xs text-notion-text/40 font-mono">LVL {Math.floor(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}</div>
                      </div>
                      
                      <div className="space-y-3">
                        {skills.map((skill, index) => {
                          const IconComponent = skill.icon;
                          const isHovered = hoveredSkill === index;
                          
                          return (
                            <div 
                              key={skill.name}
                              className="group relative"
                              onMouseEnter={() => setHoveredSkill(index)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                  <div 
                                    className="relative p-1 rounded-md transition-all duration-300"
                                    style={{ 
                                      backgroundColor: isHovered ? `${skill.color}20` : 'transparent',
                                      transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                  >
                                    <IconComponent 
                                      className="h-3.5 w-3.5 transition-colors duration-300" 
                                      style={{ color: isHovered ? skill.color : '#37352F80' }}
                                    />
                                    {isHovered && (
                                      <div 
                                        className="absolute inset-0 rounded-md animate-pulse"
                                        style={{ backgroundColor: `${skill.color}10` }}
                                      ></div>
                                    )}
                                  </div>
                                  <span className={`text-xs font-semibold transition-all duration-300 ${isHovered ? 'text-notion-text' : 'text-notion-text/80'}`}>
                                    {skill.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="text-[10px] font-mono text-notion-text/50">
                                    {skill.level}%
                                  </div>
                                  <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                      <div
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                          i < Math.floor(skill.level / 20) 
                                            ? isHovered 
                                              ? 'bg-current' 
                                              : 'bg-notion-text/60'
                                            : 'bg-notion-gray/40'
                                        }`}
                                        style={{ 
                                          color: isHovered ? skill.color : undefined,
                                          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                                          transitionDelay: `${i * 50}ms`
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="relative h-1.5 bg-notion-gray/30 rounded-full overflow-hidden">
                                <div 
                                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-out"
                                  style={{ 
                                    width: `${skill.level}%`,
                                    background: isHovered 
                                      ? `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                                      : 'linear-gradient(90deg, #37352F40, #37352F60)',
                                    boxShadow: isHovered ? `0 0 8px ${skill.color}40` : 'none'
                                  }}
                                />
                                {isHovered && (
                                  <div 
                                    className="absolute top-0 left-0 h-full w-full rounded-full animate-pulse"
                                    style={{ 
                                      background: `linear-gradient(90deg, transparent, ${skill.color}20, transparent)`,
                                      animation: 'scan 2s ease-in-out infinite'
                                    }}
                                  />
                                )}
                              </div>
                              
                              {isHovered && (
                                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: skill.color }}></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-notion-gray/20 flex items-center justify-between">
                        <div className="text-[10px] text-notion-text/40 font-mono">SKILL TREE</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-[10px] text-notion-text/50 font-mono">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-notion-gray/20">
                      <div className="text-right">
                        <div className="text-[10px] text-notion-text/40 font-mono mb-1">CARD ID</div>
                        <div className="text-[10px] text-notion-text/60 font-mono">DEV-2025-{Math.floor(Math.random() * 1000)}</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-notion-text/40">ATK</span>
                          <span className="text-sm font-bold text-notion-text">7</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-notion-text/40">DEF</span>
                          <span className="text-sm font-bold text-notion-text">5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-2 left-2 w-6 h-6">
                      <div className="absolute inset-0 bg-notion-gray/10 rounded-full"></div>
                      <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                        <Diamond className="h-3 w-3 text-notion-text/40" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="pill inline-block mb-3 hover:scale-105 transition-transform">About Me</div>
            <h2 className="text-3xl md:text-4xl font-bold text-notion-text mb-6">
              Design-minded developer with an eye for detail
            </h2>
            
            <div className="space-y-4 text-lg text-notion-text/80">
              <p>
                Hello! I'm a frontend developer with a passion for creating minimal, elegant interfaces that balance aesthetics and functionality.
              </p>
              <p>
                I specialize in React, TypeScript, and modern CSS frameworks, bringing designs to life with clean code and thoughtful interactions. My approach combines technical expertise with design sensibility.
              </p>
              <p>
                Previously, I worked at {" "}
                <span className="bg-yellow-100 px-1 rounded">Company Name</span>
                {" "} where I led the redesign of their core product, improving user engagement by 32%.
              </p>
              <p>
                When I'm not coding, you'll find me sketching UI concepts, reading design books, or exploring new coffee shops around the city.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-2.5 bg-white border border-notion-gray/30 text-notion-text rounded-lg font-medium hover:bg-notion-gray/10 hover-lift transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
