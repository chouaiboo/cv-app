import React from 'react';
import { Code, Database, Smartphone, Palette, Cloud } from 'lucide-react';
import image from '../../image/theme.jpg'

export default function ExpertiseSection() {
  const expertiseCards = [
    {
      title: "Frontend Development",
      icon: <Code className="w-10 h-10" />,
      description: "Expert en React.js, Next.js et frameworks modernes. Création d'interfaces utilisateur réactives et performantes.",
      technologies: ["React", "Vue.js", "HTML5/CSS3", "JavaScript"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-10 h-10" />,
      description: "Développement de serveurs robustes et APIs RESTful. Gestion efficace des bases de données.",
      technologies: ["Node.js", "Python", "MongoDB", "SQL"]
    },
    {
      title: "Data base",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Création d'applications mobiles natives et cross-platform avec les dernières technologies.",
      technologies: ["mysql", "mongoDb", "postsrgol"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-10 h-10" />,
      description: "Design d'interfaces modernes et intuitives. Focus sur l'expérience utilisateur et l'accessibilité.",
      technologies: ["Figma", "Adobe XD", "Tailwind", "Material UI"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-10 h-10" />,
      description: "Déploiement et maintenance d'applications dans le cloud. Configuration de CI/CD.",
      technologies: ["AWS", "Docker", "Git", "Jenkins"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1B202A]" id="expertise">
      <img
        src={image}
        alt="Background theme"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#1B202A]/90"></div>

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

      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Expertises
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#252A34]/80 backdrop-blur-sm rounded-lg p-6 
                         transition-all duration-500 ease-in-out
                         hover:bg-[#252A34] hover:shadow-xl hover:shadow-orange-500/20 
                         hover:scale-105 hover:-translate-y-2
                         border border-gray-700/30 hover:border-orange-500/50"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="text-orange-400 mb-6 transform transition-all duration-500 
                            group-hover:scale-110 group-hover:rotate-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300
                           group-hover:text-orange-400">
                {card.title}
              </h3>

              <p className="text-gray-400 mb-6 h-24 transition-colors duration-300
                          group-hover:text-gray-300">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#1B202A] text-gray-400 rounded-full
                             transition-all duration-300 hover:bg-orange-500/10
                             hover:text-orange-400 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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