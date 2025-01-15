import React from 'react';
import { Code, Database, Smartphone, Palette, Cloud } from 'lucide-react';

export default function ExpertiseSection() {
  const expertiseCards = [
    {
      title: "Frontend Development",
      icon: <Code className="w-12 h-12" />,
      description: "Expert en React.js, Next.js et frameworks modernes. Création d'interfaces utilisateur réactives et performantes.",
      technologies: ["React", "Vue.js", "HTML5/CSS3", "JavaScript"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-12 h-12" />,
      description: "Développement de serveurs robustes et APIs RESTful. Gestion efficace des bases de données.",
      technologies: ["Node.js", "Python", "MongoDB", "SQL"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-12 h-12" />,
      description: "Création d'applications mobiles natives et cross-platform avec les dernières technologies.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-12 h-12" />,
      description: "Design d'interfaces modernes et intuitives. Focus sur l'expérience utilisateur et l'accessibilité.",
      technologies: ["Figma", "Adobe XD", "Tailwind", "Material UI"],
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-12 h-12" />,
      description: "Déploiement et maintenance d'applications dans le cloud. Configuration de CI/CD.",
      technologies: ["AWS", "Docker", "Git", "Jenkins"],
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1B202A] py-20" id='expertise'>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Expertises
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto"></div>
        </div>

        {/* Grille des cartes d'expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {/* Carte avec effet de survol */}
              <div className={`
                h-full p-8 rounded-2xl
                bg-gradient-to-br ${card.color}
                backdrop-blur-xl
                border border-gray-700/50
                transition-all duration-500 ease-out
                group-hover:scale-[1.02]
                group-hover:border-gray-600
              `}>
                {/* Icône avec cercle de fond */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 blur-sm" />
                  <div className="relative text-orange-400">
                    {card.icon}
                  </div>
                </div>

                {/* Contenu de la carte */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-6 h-24">
                  {card.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {card.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-800/80 text-orange-400 rounded-full
                               border border-gray-700 hover:border-orange-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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
      `}</style>
    </div>
  );
}