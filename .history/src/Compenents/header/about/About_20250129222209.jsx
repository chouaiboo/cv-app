import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import image from '../../../image/portflio.jpg'

export default function About() {
  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com",
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: "https://twitter.com",
      label: "Twitter"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1B202A]" id="about">
      {/* Background Image */}
      <img
        src={image}
        alt="Background theme"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1B202A]/85 to-[#1B202A]/95"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animated Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative group">
              {/* Rotating Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-1000 animate-spin-slow"></div>
              
              {/* Main Image Container */}
              <div className="relative w-[300px] h-[300px] mx-auto rounded-full overflow-hidden border-4 border-orange-400/50 group-hover:border-orange-400 transition-all duration-500 transform group-hover:scale-105">
                <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
              À propos de{' '}
              <span className="relative inline-block">
                <span className="text-orange-400 relative z-10">moi</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed transform hover:scale-[1.01] transition-transform duration-300">
                Développeur Full Stack passionné avec plus de 2 ans d'expertise dans la création
                d'expériences web innovantes et performantes. Maîtrisant les technologies modernes
                du développement web, je transforme des concepts complexes en solutions élégantes.
              </p>
              <p className="text-lg leading-relaxed transform hover:scale-[1.01] transition-transform duration-300">
                Mon approche combine créativité technique et vision stratégique pour développer
                des applications qui dépassent les attentes. Toujours à l'affût des dernières
                tendances technologiques, je m'efforce de créer des solutions qui font la différence.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                  
                  {/* Icon Container */}
                  <div className="relative bg-[#252A34]/80 p-4 rounded-full text-gray-400 group-hover:text-orange-400 
                              transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                              hover:shadow-lg hover:shadow-orange-400/20">
                    {link.icon}
                    
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                   text-sm text-orange-400 opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300 whitespace-nowrap">
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}