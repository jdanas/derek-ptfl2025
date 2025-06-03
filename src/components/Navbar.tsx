
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Desktop Navigation - Right aligned */}
      <div className="hidden md:flex">
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex items-center justify-end px-3 py-2 rounded-full hover:bg-notion-gray/20 transition-all duration-300"
              >
                <span className="text-notion-text/80 group-hover:text-notion-text font-medium text-right">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 p-2 bg-white/70 rounded-full shadow-sm backdrop-blur-sm text-notion-text z-50" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-md z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center space-y-8 h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-notion-text text-2xl font-medium hover:text-notion-blue hover:scale-110 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
