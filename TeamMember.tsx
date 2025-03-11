import React from 'react';
import { motion } from 'framer-motion';
import { User2 } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  language: string;
  imageUrl?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  nameAr, 
  role, 
  roleAr, 
  language, 
  imageUrl 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center"
    >
      <div className="mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={language === 'en' ? name : nameAr}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
            <User2 className="w-12 h-12 text-blue-600" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {language === 'en' ? name : nameAr}
      </h3>
      <p className="text-gray-600">
        {language === 'en' ? role : roleAr}
      </p>
    </motion.div>
  );
};