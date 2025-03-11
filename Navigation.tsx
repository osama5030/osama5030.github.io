import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone, Plane } from 'lucide-react';

interface NavigationProps {
  language: string;
}

export const Navigation: React.FC<NavigationProps> = ({ language }) => {
  const location = useLocation();
  
  const links = [
    { to: '/', icon: Home, labelEn: 'Home', labelAr: 'الرئيسية' },
    { to: '/about', icon: Info, labelEn: 'About', labelAr: 'عن الشركة' },
    { to: '/services', icon: Plane, labelEn: 'Services', labelAr: 'الخدمات' },
    { to: '/contact', icon: Phone, labelEn: 'Contact', labelAr: 'اتصل بنا' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:shadow-none md:bg-transparent md:top-0 md:bottom-auto z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around md:justify-end items-center py-3 md:py-6 gap-8">
          {links.map(({ to, icon: Icon, labelEn, labelAr }) => (
            <Link
              key={to}
              to={to}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 text-sm md:text-base
                ${location.pathname === to 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              <Icon className="w-6 h-6 md:w-5 md:h-5" />
              <span>{language === 'en' ? labelEn : labelAr}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};