import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: '//Accueil', href: '#home' },
    { title: '//À propos', href: '#about' },
    { title: '//Projets', href: '#projects' },
    { title: '//Compétences', href: '#skills' },
    { title: '//Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo ou Nom */}
          <a href="#home" className="text-2xl font-bold text-blue-800">
            Chouaib ElHaddad . _
          </a>

       {/* Menu pour Desktop */}
<div className="hidden md:flex space-x-8 justify-center">
  {menuItems.map((item) => (
    <a
      key={item.title}
      href={item.href}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold relative"
    >
      <span className="absolute inset-0 bg-clip-text text-transparent border border-gray-600">{item.title}</span>
      {item.title}
    </a>
  ))}

          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;