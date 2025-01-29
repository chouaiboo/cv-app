import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Menu, X, Code, Star } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { title: 'Accueil', icon: <Home size={18} />, to: '/', section: 'home' },
    { title: 'À propos', icon: <User size={18} />, to: '/about', section: 'about' },
    { title: 'Expertises', icon: <Code size={18} />, to: '/expertise', section: 'expertise' },
    { title: 'Projets', icon: <Star size={18} />, to: '/work', section: 'work' },
    { title: 'Contact', icon: <Mail size={18} />, to: '/contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className={`fixed w-full z-50 transition-all duration-300
                ${isScrolled 
                  ? 'py-3 sm:py-4 bg-[#1B202A]/90 backdrop-blur-md shadow-lg' 
                  : 'py-4 sm:py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
          >
            Chouaib<span className="text-orange-400">Elhaddad</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`group relative flex items-center gap-2 text-sm xl:text-base
                         ${activeSection === item.section ? 'text-white' : 'text-gray-300'}
                         hover:text-white transition-colors duration-300 py-2`}
              >
                <span className="text-orange-400 group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </span>
                {item.title}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 
                              transition-all duration-300
                              ${activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav 
            className={`lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-[#1B202A]/95 
                     backdrop-blur-lg transition-all duration-300 
                     ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            <div className="container h-full mx-auto px-4 py-6 overflow-y-auto">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
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
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Section Indicator */}
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