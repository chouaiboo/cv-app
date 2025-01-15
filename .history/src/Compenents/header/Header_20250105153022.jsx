import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: '// home', href: '#home' },
    { title: '// expertise', href: '#expertise' },
    { title: '// work', href: '#work' },
    { title: '// experience', href: '#experience' },
    { title: '// contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1A1E23]/90' : 'bg-[#1A1E23]'
    }`}>
      {/* Effet de grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%)] bg-[length:10px_10px] animate-grain"></div>
      
      {/* Bordure subtile */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD1C5]/20 to-transparent"></div>

      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-mono group">
            <span className="text-[#4FD1C5] hover:text-blue transition-colors duration-300">
              ChouaibElhaddad._
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#4FD1C5] to-[#4FD1C5]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative group py-2"
              >
                <span className="text-gray-400 font-mono text-sm hover:text-white transition-all duration-300 ease-out">
                  {item.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4FD1C5]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="mt-4 bg-[#1A1E23]/95 backdrop-blur-sm rounded-lg border border-[#4FD1C5]/10">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-mono text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;