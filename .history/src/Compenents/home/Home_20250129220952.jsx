import React, { useState, useEffect } from 'react';
import { Code, Smartphone } from 'lucide-react';
import image from '../../image/theme.jpg'; // Assurez-vous d'importer votre image

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', color: 'from-blue-400 to-cyan-400', description: 'Développement Frontend' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-400', description: 'Backend & API' },
    { name: 'Web', color: 'from-purple-400 to-pink-400', description: 'Applications Web' },
    { name: 'UI/UX', color: 'from-rose-400 to-red-400', description: 'Design Interfaces' },
    { name: '3D', color: 'from-amber-400 to-yellow-400', description: 'Modélisation 3D' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Image de fond */}
      <img src={image} alt="" className="absolute w-full h-full object-cover object-center opacity-30" />

      {/* Effet de particules interactif */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.03}px, ${(mousePosition.y - window.innerHeight / 2) * 0.03}px)`,
            transition: 'transform 0.3s ease-out',
            opacity: 0.4,
          }}
        />
      ))}

      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />

      {/* Contenu principal */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4"
        style={{
          transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`,
        }}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 animate-gradient">
          CHOUAIB ELHADDAD
        </h1>

        <div className="flex items-center justify-center gap-6 mt-8">
          <Code className="w-8 h-8 text-orange-400 animate-bounce" />
          <h2 className="text-2xl md:text-4xl font-medium text-white">
            FULL STACK DEVELOPER
          </h2>
          <Smartphone className="w-8 h-8 text-orange-400 animate-bounce" />
        </div>

        {/* Skills avec hover effects */}
        <div className="mt-12 flex gap-4 justify-center flex-wrap relative">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`px-6 py-3 rounded-full text-white font-medium
                          transition-all duration-300 transform hover:scale-110
                          ${hoveredSkill === index ? 'bg-gradient-to-r ' + skill.color : 'bg-slate-800/50'}
                          border border-orange-400/30 hover:border-orange-400
                          cursor-pointer shadow-lg hover:shadow-xl`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                }}
              >
                {skill.name}
              </div>

              {/* Tooltip description */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 
                           bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl
                           transition-all duration-300 text-sm whitespace-nowrap
                           ${hoveredSkill === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                           pointer-events-none z-50`}
              >
                {skill.description}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                              rotate-45 w-2 h-2 bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Effet de lumière au survol de la souris */}
      <div
        className="absolute w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

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
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Home;