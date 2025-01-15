import React from 'react';
import image from '../../image/theme.jpg'

export default function Home() {
  return (
    <div id='Home' className="relative">
      {/* Image de fond */}
      <img
        src={image} // Remplace par l'URL de ton image
        alt="Image sous le header"
        className="w-full h-auto object-cover"
      />

      {/* Carré tournant décoratif */}
      <div className="absolute top-1/2 right-1/4 transform rotate-45 z-10">
        <div className="w-40 h-40 bg-[#D27548] opacity-80"></div>
      </div>

      {/* Cercle décoratif avec dégradé */}
      <div className="absolute top-1/3 right-1/3 z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 blur-sm"></div>
      </div>

      {/* Soleil légèrement plus haut */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse"></div>
      </div>

      {/* Texte centré au milieu */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
        <h1 className="text-6xl md:text-10xl font-bold leading-tight">CHOUAIB ELHADDAD</h1>
        <h2 className="text-5xl md:text-5xl font-medium mt-4">FULL STACK DEVELOPER,& APP DEVELOPER</h2>
      </div>

     
    </div>
  );
}
