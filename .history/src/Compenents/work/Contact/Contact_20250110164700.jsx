import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import image from '../../image/theme.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Vous pouvez ajouter ici la logique d'envoi réel
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "+33 6 12 34 56 78",
      link: "tel:+33612345678"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      content: "Paris, France",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1B202A]" id="contact">
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
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#252A34]/80 backdrop-blur-sm p-6 rounded-lg
                           border border-gray-700/30 hover:border-orange-500/50
                           transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-orange-400 transition-transform duration-300 
                                  group-hover:scale-110 group-hover:rotate-6">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-orange-400 
                                  transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#252A34]/80 backdrop-blur-sm p-8 rounded-lg 
                                                   border border-gray-700/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1B202A]/50 border border-gray-700 rounded-lg px-4 py-2
                             text-white focus:outline-none focus:border-orange-400
                             transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1B202A]/50 border border-gray-700 rounded-lg px-4 py-2
                             text-white focus:outline-none focus:border-orange-400
                             transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1B202A]/50 border border-gray-700 rounded-lg px-4 py-2
                           text-white focus:outline-none focus:border-orange-400
                           transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#1B202A]/50 border border-gray-700 rounded-lg px-4 py-2
                           text-white focus:outline-none focus:border-orange-400
                           transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium
                         py-3 px-6 rounded-lg transition-colors duration-300
                         flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          </div>
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