import React from 'react';

export default function Home() {
  return (
    <div id='Home'>
      {/* Decorative Rotating Square */}
      <div className="absolute top-1/2 right-1/4 transform rotate-45 z-10">
        <div className="w-40 h-40 bg-[#D27548] opacity-80"></div>
      </div>
      
      {/* Decorative Gradient Circle */}
      <div className="absolute top-1/3 right-1/3 z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-400 blur-sm"></div>
      </div>

      {/* Featured Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className="text-gray-500 mb-4">AS FEATURED IN</p>
        <div className="flex gap-8 items-center justify-center opacity-50">
          <span className="text-gray-400">CareerFoundry</span>
          <span className="text-gray-400">Frontend Mentor</span>
          <span className="text-gray-400">WeAreDevelopers</span>
          <span className="text-gray-400">Colorlib</span>
          <span className="text-gray-400">Masai</span>
        </div>
      </div>
    </div>
  );
}
