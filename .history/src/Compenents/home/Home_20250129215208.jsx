import React, { useState, useEffect } from 'react';
import { Code, Smartphone } from 'lucide-react';
import image from '../../image/theme.jpg';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div id='home' className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <img src={image} alt="" className="absolute w-full h-full object-cover object-center" />

      {/* Particles Background */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 md:px-0"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 animate-gradient leading-tight">
          CHOUAIB ELHADDAD
        </h1>

        <div className="flex items-center justify-center gap-3 md:gap-6 mt-4 md:mt-8">
          <Code className="w-5 h-5 md:w-8 md:h-8 text-orange-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            FULL STACK DEVELOPER
          </h2>
          <Smartphone className="w-5 h-5 md:w-8 md:h-8 text-orange-400" />
        </div>

        {/* Skills Section with Enhanced Hover Effects */}
        <div className="mt-8 md:mt-12 flex gap-2 md:gap-4 justify-center flex-wrap px-2 md:px-0">
          {['React', 'Node.js', 'Web', 'UI/UX', '3D'].map((skill, index) => (
            <div
              key={skill}
              className="px-4 py-2 bg-slate-800/50 rounded-full text-white text-sm md:text-base border border-orange-400/30 transition-all duration-300 relative overflow-hidden cursor-pointer 
                         hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/40 hover:scale-105 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              {/* Hover effect layer */}
              <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              {/* Skill text */}
              <span className="relative z-10">{skill}</span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-orange-400/20 blur-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mouse Light Effect */}
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
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}