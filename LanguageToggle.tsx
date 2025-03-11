import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
    >
      <Languages className="w-5 h-5" />
      <span className="font-medium">{currentLang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};