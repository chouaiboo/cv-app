import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import image from '../../../image/theme.jpg';
import portflio from '../../../image/portflio.jpg';

export default function About() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" }
  ];

  return (
    <div className="relative min-h-screen bg-[#1B202A]" id="about">
      {/* Image d'arrière-plan */}
      <img
        src={image}
        alt="Background theme"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay pour opacité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#1B202A]/90"></div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Image */}
          <div className="text-center lg:text-left">
            <div className="relative w-[300px] h-[300px] mx-auto rounded-full overflow-hidden border-4 border-orange-400">
              <img
                src={portflio}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Colonne droite - Contenu */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de <span className="text-orange-400">moi</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                Développeur passionné avec plus de 2 ans d'expérience dans le développement web .
                Spécialisé dans la création d'applications modernes et performantes.
              </p>
              <p>
                J'aime relever de nouveaux défis techniques et rester à la pointe des dernières technologies.
                Mon objectif est de créer des solutions innovantes qui font la différence.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#252A34]/80 p-3 rounded-full text-gray-400 hover:text-orange-400 
                               hover:transform hover:scale-110 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
