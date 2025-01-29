import React, { useState, useEffect } from 'react';
import { Code, Smartphone } from 'lucide-react';
import backgroundImage from '../../image/theme.jpg';

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
    <>
      {/* Background container */}
      <div className="fixed top-0 left-0 w-full h-screen z-0" id="home">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <div id="Home" className="relative min-h-screen overflow-hidden">
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
            }}
          />
        ))}

        {/* Main title */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center"
          style={{
            transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.3}px))`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 animate-gradient">
            CHOUAIB ELHADDAD
          </h1>
          <div className="flex items-center justify-center gap-6 mt-8">
            <Code className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              FULL STACK DEVELOPER
            </h2>
            <Smartphone className="w-8 h-8 text-orange-400" />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </>
  );
}
