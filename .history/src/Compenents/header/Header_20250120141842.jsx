import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Code, Star } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Accueil', icon: <Home size={18} />, href: '#home' },
    { title: 'À propos', icon: <User size={18} />, href: '#about' },
    { title: 'Expertises', icon: <Code size={18} />, href: '#expertise' },
    { title: 'Projets', icon: <Star size={18} />, href: '#work' },
    { title: 'Contact', icon: <Mail size={18} />, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300
                     ${isScrolled 
                       ? 'py-2 sm:py-3 md:py-4 bg-[#1B202A]/80 backdrop-blur-md shadow-lg' 
                       : 'py-3 sm:py-4 md:py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            Chouaib<span className="text-orange-400">Elhaddad</span>
          </a>

          {/* Menu Mobile Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 text-white hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative flex items-center gap-1 sm:gap-2 text-sm xl:text-base text-gray-300 hover:text-white
                         transition-colors duration-300 py-2"
              >
                <span className="text-orange-400 group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </span>
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 
                              transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Navigation Mobile */}
          <nav className={`lg:hidden fixed top-[48px] sm:top-[56px] md:top-[72px] left-0 w-full 
                        bg-[#1B202A]/95 backdrop-blur-lg transition-transform duration-300 shadow-xl
                        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-2 sm:py-3 md:py-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 hover:text-white
                           transition-colors duration-300 py-3 sm:py-4 border-b border-gray-700/50
                           last:border-none"
                >
                  <span className="text-orange-400 group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Indicator for current section (optional) */}
      <div className="absolute bottom-0 left-0 h-1 bg-orange-400 transition-all duration-300"
           style={{ width: '20%', transform: 'translateX(0%)' }}></div>
    </header>
  );
}