import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Code, Star } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { title: 'Accueil', icon: <Home size={18} />, href: '#home', section: 'home' },
    { title: 'À propos', icon: <User size={18} />, href: '#about', section: 'about' },
    { title: 'Expertises', icon: <Code size={18} />, href: '#expertise', section: 'expertise' },
    { title: 'Projets', icon: <Star size={18} />, href: '#work', section: 'work' },
    { title: 'Contact', icon: <Mail size={18} />, href: '#contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = menuItems.map(item => item.section);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500
                ${isScrolled 
                  ? 'py-3 sm:py-4 bg-[#1B202A]/90 backdrop-blur-md shadow-lg' 
                  : 'py-4 sm:py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <a 
            href="#" 
            className="relative group text-xl sm:text-2xl font-bold text-white whitespace-nowrap overflow-hidden"
          >
            <span className="inline-block transition-transform duration-300 group-hover:transform group-hover:-translate-y-full">
              Chouaib<span className="text-orange-400">Elhaddad</span>
            </span>
            <span className="absolute top-full left-0 transition-transform duration-300 group-hover:transform group-hover:-translate-y-full">
              Chouaib<span className="text-orange-400">Elhaddad</span>
            </span>
          </a>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 text-white hover:text-orange-400 transition-all duration-300
                     transform hover:rotate-180 hover:scale-110"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="transition-all duration-300 transform">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group relative flex items-center gap-2 text-sm xl:text-base
                         ${activeSection === item.section ? 'text-white' : 'text-gray-300'}
                         hover:text-white transition-colors duration-300 py-2`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-orange-400/10 rounded-lg scale-0 transition-transform duration-300
                              ${hoveredItem === index ? 'scale-100' : ''}`}></div>
                
                {/* Icon with enhanced animation */}
                <span className="relative text-orange-400 transition-all duration-300
                             group-hover:rotate-12 group-hover:scale-125 group-hover:animate-pulse">
                  {item.icon}
                </span>
                
                {/* Text with slide effect */}
                <span className="relative">
                  {item.title}
                  
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400
                                transition-all duration-300 ${activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                  </span>
                </span>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-orange-400/5 rounded-lg blur-md transition-opacity duration-300
                              ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Mobile Navigation */}
          <nav 
            className={`lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-gradient-to-b from-[#1B202A]/95 to-[#1B202A]
                     backdrop-blur-lg transition-all duration-500 
                     ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            <div className="container h-full mx-auto px-4 py-6 overflow-y-auto">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative flex items-center gap-3 
                           ${activeSection === item.section ? 'text-white' : 'text-gray-300'}
                           hover:text-white transition-all duration-300 
                           py-4 border-b border-gray-700/50 last:border-none
                           transform hover:translate-x-2`}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-orange-400/10 rounded-lg opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon animation */}
                  <span className="relative text-orange-400 transition-all duration-300
                               group-hover:rotate-12 group-hover:scale-125">
                    {item.icon}
                  </span>
                  
                  {/* Text animation */}
                  <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Enhanced Section Indicator */}
      <div className="relative">
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-500"
          style={{ 
            width: '20%',
            transform: `translateX(${menuItems.findIndex(item => item.section === activeSection) * 100}%)`,
            boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
          }}
        />
      </div>
    </header>
  );
};

export default Header;