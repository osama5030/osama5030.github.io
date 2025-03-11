import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  language: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">
          {language === 'en' ? service.title : service.titleAr}
        </h3>
        <span className="text-2xl font-bold text-blue-600">${service.price}</span>
      </div>
      <p className="text-gray-600">
        {language === 'en' ? service.description : service.descriptionAr}
      </p>
    </motion.div>
  );
};