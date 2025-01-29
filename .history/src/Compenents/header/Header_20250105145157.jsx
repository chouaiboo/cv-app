import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour les animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: '//Accueil', href: '#home' },
    { title: '//À propos', href: '#about' },
    { title: '//Projets', href: '#projects' },
    { title: '//Compétences', href: '#skills' },
    { title: '//Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90' : 'bg-gradient-to-r from-black via-blue-950 to-black'
    }`}>
      {/* Effet de grille animée */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_50%,transparent_75%)] bg-[length:10px_10px] animate-grain"></div>
      
      {/* Effet de bordure lumineuse */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo avec animation */}
          <a href="#home" className="text-2xl md:text-3xl font-bold relative group">
            <span className="text-white font-mono hover:text-blue-300 transition-colors duration-300">
              &lt;<span className="text-blue-400">dev</span>&gt;
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white font-mono">
              Chouaib_ElHaddad
            </span>
            <span className="text-white font-mono hover:text-blue-300 transition-colors duration-300">
              &lt;/<span className="text-blue-400">dev</span>&gt;
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </a>

          {/* Menu Desktop avec animations */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative group py-2"
              >
                <span className="text-blue-300 font-mono hover:text-white transition-all duration-300 ease-out">
                  {item.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Bouton Menu Mobile animé */}
          <button
            className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
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

        {/* Menu Mobile avec animation de fade */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="mt-4 bg-black/95 backdrop-blur-sm rounded-lg border border-blue-900/50">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-blue-300 hover:text-white transition-colors duration-300 font-mono relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.title}</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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