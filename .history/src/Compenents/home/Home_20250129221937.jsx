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
      <img 
        src={image}
        alt="background" 
        className="absolute w-full h-full object-cover object-center "
      />
      
      {/* Animated stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.02}px, ${(mousePosition.y - window.innerHeight/2) * 0.02}px)`
          }}
        />
      ))}

      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 right-1/4 transform rotate-45 z-10 transition-transform duration-500 hover:scale-110">
        <div className="w-40 h-40 bg-orange-500 opacity-80 animate-spin-slow"></div>
      </div>

      <div className="hidden md:block absolute top-1/3 right-1/3 z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 blur-sm animate-bounce"></div>
      </div>

      {/* Interactive sun */}
      <div
        className="absolute z-30 transition-all duration-300 ease-out"
        style={{
          top: '20%',
          left: '50%',
          transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.05}px, ${(mousePosition.y - window.innerHeight/2) * 0.05}px)`,
        }}
      >
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse shadow-lg shadow-yellow-500/50"></div>
      </div>

      {/* Main content */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4 md:px-0"
        style={{
          transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`,
        }}
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

        {/* Enhanced Skills Section */}
        <div className="mt-8 md:mt-12 flex gap-3 md:gap-4 justify-center flex-wrap px-2 md:px-0">
          {['React', 'Node.js', 'Web', 'php', 'python', 'UI/UX', '3D'].map((skill, index) => (
            <div
              key={skill}
              className="group relative px-4 md:px-6 py-2 md:py-3 text-sm md:text-base"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              {/* Background container with enhanced hover effects */}
              <div className="absolute inset-0 bg-slate-800/50 rounded-full border border-orange-400/30 
                            transform transition-all duration-300 ease-out
                            group-hover:scale-110 group-hover:border-orange-400 group-hover:bg-orange-400/20
                            group-hover:shadow-lg group-hover:shadow-orange-400/20">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 
                              group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Glowing dots effect */}
              <div className="absolute -inset-1 bg-orange-400/0 rounded-full group-hover:bg-orange-400/10 
                            transition-all duration-300 blur opacity-0 group-hover:opacity-100"></div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-0 
                            group-hover:opacity-100 transition-all duration-500"
                  style={{
                    left: `${50 + (i - 1) * 30}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: `float${i + 1} 2s ease-in-out infinite`,
                  }}
                ></div>
              ))}

              {/* Skill text */}
              <span className="relative z-10 text-white group-hover:text-orange-400 
                             transition-all duration-300 inline-block
                             group-hover:transform group-hover:scale-105">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -70%); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -80%); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -60%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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
}
