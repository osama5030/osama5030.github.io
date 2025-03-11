import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { LanguageToggle } from './components/LanguageToggle';
import { ServiceCard } from './components/ServiceCard';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import type { Service } from './types';

const services: Service[] = [
  {
    id: 'travel-plans',
    title: 'Travel Plans',
    titleAr: 'خطط السفر',
    price: 20,
    description: 'Customized travel itineraries tailored to your preferences',
    descriptionAr: 'خطط سفر مخصصة حسب تفضيلاتك'
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    titleAr: 'خطابات التغطية',
    price: 30,
    description: 'Professional cover letters for visa applications',
    descriptionAr: 'خطابات تغطية احترافية لطلبات التأشيرة'
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    titleAr: 'حجز الطيران',
    price: 30,
    description: 'Confirmed flight bookings at the best prices',
    descriptionAr: 'حجوزات طيران مؤكدة بأفضل الأسعار'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    titleAr: 'حجز الفنادق',
    price: 30,
    description: 'Guaranteed hotel reservations worldwide',
    descriptionAr: 'حجوزات فندقية مضمونة في جميع أنحاء العالم'
  },
   {
    id: 'TripPrime-100',
    title: 'TripPrime 100',
    titleAr: 'تريب برايم 100',
    price: 100,
    description: 'Filling out the embassy application + travel insurance + travel plan + Cover letters + flight reservations + hotel reservations',
    descriptionAr: 'تعبئة ابلكيشن السفاره + تأمين السفر + خطة السفر + خطابات التوصيه + حجوزات الطيران + حجوزات الفنادق'
  },
];

function HomePage({ language }: { language: string }) {
  return (
    <>
      <Hero language={language} />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'en' ? 'Our Services' : 'خدماتنا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} language={language} />
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const [language, setLanguage] = useState<string>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <Router>
      <div dir={language === 'en' ? 'ltr' : 'rtl'} className="min-h-screen bg-gray-50">
        <LanguageToggle currentLang={language} onToggle={toggleLanguage} />
        <Navigation language={language} />
        
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/services" element={<Services language={language} services={services} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App