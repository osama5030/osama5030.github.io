import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  language: string;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {language === 'en' ? (
            "Everything you need for your trip, all in one place! 🌍🇪🇺"
          ) : (
            "كل اللي محتاجه لرحلتك في مكان واحد! 🌍🇪🇺"
          )}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mb-8"
        >
          {language === 'en' ? (
            "Welcome to TripTrail, a leading company in the tourism field with over 5 years of experience, delivering tailored travel solutions to make your journey seamless and unforgettable."
          ) : (
            "مرحباً بكم في TripTrail، شركة رائدة في مجال السياحة مع أكثر من 5 سنوات من الخبرة، نقدم حلول سفر مخصصة لجعل رحلتك سلسة ولا تُنسى."
          )}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-colors"
        >
          {language === 'en' ? "Get Started" : "ابدأ الآن"}
        </motion.button>
      </div>
    </div>
  );
};