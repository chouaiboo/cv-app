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
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,127,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      <nav className="container mx-auto px-4 py-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo innovant */}
          <a href="#home" className="text-3xl font-bold relative group">
            <span className="text-white font-mono">
              &lt;<span className="text-blue-300">dev</span>&gt;
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white font-mono">
              Chouaib_ElHaddad
            </span>
            <span className="text-white font-mono">
              &lt;/<span className="text-blue-300">dev</span>&gt;
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>

          {/* Menu pour Desktop centré */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative group"
              >
                <span className="text-blue-200 font-mono hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-white"
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
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 pt-4 pb-3 bg-blue-900/90 rounded-lg p-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-blue-200 hover:text-white transition-colors duration-300 font-mono"
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