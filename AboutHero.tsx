import React from 'react';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  language: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ language }) => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'About TripTrail' : 'عن TripTrail'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {language === 'en' 
              ? "Pioneering the future of travel services since 2019"
              : "نقود مستقبل خدمات السفر منذ عام 2019"
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
};