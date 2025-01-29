import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Code, Star, Moon, Sun } from 'lucide-react';
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { title: 'Accueil', icon: <Home size={18} />, href: '#home', section: 'home' },
    { title: 'À propos', icon: <User size={18} />, href: '#about', section: 'about' },
    { title: 'Expertises', icon: <Code size={18} />, href: '#expertise', section: 'expertise' },
    { title: 'Projets', icon: <Star size={18} />, href: '#work', section: 'work' },
    { title: 'Contact', icon: <Mail size={18} />, href: '#contact', section: 'contact' }
  ];

  // Gestion du mode sombre/clair
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Mise à jour de la section active
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

      // Barre de progression du défilement
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture du menu mobile en cas de redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Empêcher le défilement du corps lorsque le menu mobile est ouvert
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

  // Animation GSAP pour le menu mobile
  useEffect(() => {
    if (isMenuOpen) {
      gsap.from('.mobile-nav a', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300
                ${isScrolled 
                  ? 'py-3 sm:py-4 bg-[#1B202A]/90 backdrop-blur-md shadow-lg' 
                  : 'py-4 sm:py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent"
          >
            Chouaib<span className="text-orange-400">Elhaddad</span>
          </a>

          {/* Bouton du menu mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group relative flex items-center gap-2 text-sm xl:text-base
                         ${activeSection === item.section ? 'text-white' : 'text-gray-300'}
                         hover:text-white transition-colors duration-300 py-2`}
              >
                <span className="text-orange-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </span>
                {item.title}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 
                              transition-all duration-300
                              ${activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
              </a>
            ))}

            {/* Bouton mode sombre/clair */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-white hover:text-orange-400 transition-colors"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </nav>
        </div>

        {/* Navigation mobile */}
        <nav 
          className={`lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-[#1B202A]/95 
                     backdrop-blur-lg transition-all duration-300 
                     ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="container h-full mx-auto px-4 py-6 overflow-y-auto mobile-nav">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center gap-3 
                           ${activeSection === item.section ? 'text-white' : 'text-gray-300'}
                           hover:text-white transition-colors duration-300 
                           py-4 border-b border-gray-700/50 last:border-none`}
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

      {/* Barre de progression du défilement */}
      <div 
        className="fixed top-0 left-0 h-1 bg-orange-400 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Indicateur de section */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-orange-400 transition-all duration-500"
        style={{ 
          width: '20%',
          transform: `translateX(${menuItems.findIndex(item => item.section === activeSection) * 100}%)`
        }}
      />
    </header>
  );
};

export default Header;