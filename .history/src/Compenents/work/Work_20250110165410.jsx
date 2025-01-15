import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import image from '../../image/theme.jpg';
import Argane from '../../image/argan.jpg'

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: Argane,
      category: "web",
      technologies: ["React", "APi", "mysql"],
      githubLink: "https://github.com/chouaiboo/ecomerce",
      featured: true
    },
    {
      title: "Application book",
      description: "Application de suivi de cherche de book",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["react", "tawlind","api","redux"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example"
    },

    {
      title: "Portfolio Design",
      description: "Design de portfolio pour photographe professionnel",
      image: "/api/placeholder/600/400",
      category: "design",
      technologies: ["Figma", "Photoshop"],
      demoLink: "https://demo.example.com"
    },
 
    {
      title: "Restaurant Mobile App",
      description: "Application de commande et de livraison pour restaurant",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["Flutter", "Firebase"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#1B202A]" id="work">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 
                  ${selectedCategory === category.id 
                    ? 'bg-orange-400 text-white' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#252A34]/80 backdrop-blur-sm rounded-xl overflow-hidden
                       transform transition-all duration-500 hover:scale-105
                       border border-gray-700/30 hover:border-orange-500/50"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  )}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400
                             transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-[#1B202A]/50 text-gray-400 rounded-full
                               hover:bg-orange-500/10 hover:text-orange-400
                               transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-orange-400 text-white text-xs px-2 py-1
                              rounded-full transform rotate-12">
                  Featured
                </div>
              )}
            </div>
          ))}
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
      `}</style>
    </div>
  );
}