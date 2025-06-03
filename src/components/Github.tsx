import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Github = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "GITHUUUBBB";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && displayText.length < fullText.length) {
      // Typing each character
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (displayText.length === fullText.length && isTyping) {
      // Finished typing, wait 3 seconds then restart
      setIsTyping(false);
      timeout = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  return (
    <section id="github" className="py-24">
      <div className="w-full">
        <div className="text-center mb-16 px-6">
          <div className="pill inline-block mb-3">Code Repository</div>
          <h2 className="text-3xl md:text-4xl font-bold text-notion-text mb-4">
            Check Out My Work
          </h2>
          <p className="text-lg text-notion-text/70 max-w-xl mx-auto">
            Explore my projects, contributions, and code samples
          </p>
        </div>

        <div className="glass-card mx-6 p-12 text-center">
          <a
            href="https://github.com/jdanas"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block transition-all duration-300 hover:scale-105"
          >
            <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-notion-text mb-6 tracking-wider hover:text-notion-text/80 transition-colors duration-300 break-all">
              {displayText}
              <span
                className={`${
                  isTyping ? "animate-pulse" : "animate-ping"
                } text-notion-text/60`}
              >
                _
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 text-notion-text/60 group-hover:text-notion-text/80 transition-colors">
              <span className="text-lg font-medium">
                Visit My GitHub Profile
              </span>
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="mt-12 text-center px-6">
          <p className="text-notion-text/60 text-sm">
            Open source contributions and personal projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Github;
