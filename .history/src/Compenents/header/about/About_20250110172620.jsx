import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import image from '../../image/theme.jpg';

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

      {/* Étoiles animées */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Grid pour le contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Image avec cercles rotatifs */}
          <div className="relative">
            <div className="relative w-[300px] h-[300px] mx-auto">
              {/* Cercles rotatifs */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-400/40 animate-spin-slow-reverse"></div>
              {/* Image profile */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-orange-400">
                <img
                  src="/api/placeholder/400/400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne droite - Contenu */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de <span className="text-orange-400">moi</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                Développeur passionné avec plus de 5 ans d'expérience dans le développement web et mobile. 
                Spécialisé dans la création d'applications modernes et performantes.
              </p>
              <p>
                J'aime relever de nouveaux défis techniques et rester à la pointe des dernières technologies. 
                Mon objectif est de créer des solutions innovantes qui font la différence.
              </p>
            </div>

            {/* Informations personnelles */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-400">Nom:</p>
                <p className="text-white">John Doe</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-white">john@example.com</p>
              </div>
              <div>
                <p className="text-gray-400">Localisation:</p>
                <p className="text-white">Paris, France</p>
              </div>
              <div>
                <p className="text-gray-400">Disponibilité:</p>
                <p className="text-white">Freelance</p>
              </div>
            </div>

            {/* Réseaux sociaux et CV */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-4">
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

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 
                         text-white px-6 py-3 rounded-full transition-colors duration-300"
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin 15s linear infinite reverse;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}