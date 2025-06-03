import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle neutral background elements in grayscale */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-notion-gray/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-notion-gray/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-notion-gray/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile picture with minimal styling */}
        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-notion-gray/50 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-1000"></div>
            <Avatar className="h-48 w-48 md:h-56 md:w-56 border-4 border-white shadow-md">
              <AvatarImage src="/placeholder.svg" alt="Your Name" />
              <AvatarFallback className="text-5xl font-light text-notion-gray">
                YN
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="text-center md:text-left">
          {/* Notion-like simple tag */}
          <div
            className="inline-block mb-4 px-4 py-1.5 bg-notion-gray/20 text-notion-text/70 rounded-lg transform -rotate-1 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-sm font-medium">Research Engineer II</p>
          </div>

          {/* Name heading with neutral color */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0 text-notion-text"
            style={{ animationDelay: "0.5s" }}
          >
            Hi, I'm{" "}
            <span className="underline decoration-notion-gray/30 decoration-4 underline-offset-4">
              Derek
            </span>
          </h1>

          {/* Personal tagline */}
          <p
            className="text-xl md:text-2xl text-notion-text/70 mb-6 animate-fade-in opacity-0"
            style={{ animationDelay: "0.7s" }}
          >
            I build <span className="font-medium">thoughtful</span> web
            experiences with <span className="font-medium">clean code</span>
          </p>

          {/* Short bio */}
          <p
            className="text-lg text-notion-text/70 mb-8 max-w-xl animate-fade-in opacity-0"
            style={{ animationDelay: "0.9s" }}
          >
            Based in Singapore, creating intuitive digital solutions with a
            passion for clean code and thoughtful design
          </p>

          {/* CTA buttons with Notion-like design */}
          <div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "1.1s" }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-notion-text text-white rounded-lg font-medium shadow-sm hover:bg-notion-text/90 transition-all duration-300 hover:-translate-y-1"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-notion-gray/50 bg-white/50 backdrop-blur-sm text-notion-text rounded-lg font-medium transform transition-all duration-300 hover:-translate-y-1 hover:bg-notion-gray/10"
            >
              Let's connect
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator with minimal design */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-notion-text/50 hover:text-notion-text transition-colors"
        >
          <span className="text-sm font-medium mb-2">Discover more</span>
          <div className="rounded-full p-2 border border-notion-gray/30 animate-bounce-gentle">
            <ArrowDown size={20} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
