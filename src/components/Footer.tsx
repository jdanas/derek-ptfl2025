import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white border-t border-notion-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="inline-block text-notion-text font-semibold text-xl mb-2"
            >
              Derek A.
            </a>
            <p className="text-notion-text/60">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h4 className="font-medium text-notion-text mb-3">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-notion-text mb-3">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/jdanas"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/john-derek-anas-1855a886/"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://huggingface.co/Dereksans"
                    className="text-notion-text/70 hover:text-notion-text transition-colors"
                  >
                    HuggingFace
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-notion-text/60 text-sm">
          <p className="flex items-cnter justify-center gap-1">
            Designed and built with <Heart size={14} className="text-red-500" />{" "}
            by Derek A.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
