import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Upload, Check } from 'lucide-react';
import type { BookingFormData, Service } from '../types';

interface ServicesProps {
  language: string;
  services: Service[];
}

export const Services: React.FC<ServicesProps> = ({ language, services }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    jobTitle: '',
    jobDescription: '',
    passportNumber: '',
    destination: '',
    stayLength: {
      startDate: '',
      endDate: '',
    },
    selectedServices: [],
    comments: '',
    passportFiles: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const calculateTotal = () => {
    return formData.selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            {language === 'en' ? 'Book Your Travel Services' : 'احجز خدمات السفر'}
          </h1>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'en' ? 'Booking Submitted Successfully!' : 'تم تقديم الحجز بنجاح!'}
              </h2>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'We will contact you shortly with payment instructions and next steps.'
                  : 'سنتواصل معك قريباً مع تعليمات الدفع والخطوات التالية.'
                }
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {language === 'en' ? 'Personal Information' : 'المعلومات الشخصية'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Full Name' : 'الاسم الكامل'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Job Title' : 'المسمى الوظيفي'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={e => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Job Description' : 'الوصف الوظيفي'}
                  </label>
                  <textarea
                    required
                    value={formData.jobDescription}
                    onChange={e => setFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Passport Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {language === 'en' ? 'Passport Information' : 'معلومات جواز السفر'}
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Passport Number' : 'رقم جواز السفر'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.passportNumber}
                    onChange={e => setFormData(prev => ({ ...prev, passportNumber: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Upload Passport Pages' : 'تحميل صفحات جواز السفر'}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>{language === 'en' ? 'Upload files' : 'تحميل الملفات'}</span>
                          <input
                            type="file"
                            required
                            multiple
                            accept="image/*,.pdf"
                            className="sr-only"
                            onChange={e => setFormData(prev => ({ ...prev, passportFiles: e.target.files }))}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        {language === 'en' ? 'PNG, JPG, PDF up to 10MB' : 'PNG, JPG, PDF حتى 10 ميجابايت'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {language === 'en' ? 'Travel Details' : 'تفاصيل السفر'}
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Destination' : 'الوجهة'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={e => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Start Date' : 'تاريخ البداية'}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.stayLength.startDate}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          stayLength: { ...prev.stayLength, startDate: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'End Date' : 'تاريخ النهاية'}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.stayLength.endDate}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          stayLength: { ...prev.stayLength, endDate: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Selection */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {language === 'en' ? 'Select Services' : 'اختر الخدمات'}
                </h2>
                <div className="space-y-2">
                  {services.map(service => (
                    <label
                      key={service.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3">{language === 'en' ? service.title : service.titleAr}</span>
                      </div>
                      <span className="font-semibold">${service.price}</span>
                    </label>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {language === 'en' ? 'Total: ' : 'المجموع: '}
                    <span className="text-blue-600">${calculateTotal()}</span>
                  </p>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Additional Comments' : 'تعليقات إضافية'}
                </label>
                <textarea
                  value={formData.comments}
                  onChange={e => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {language === 'en' ? 'Submit Booking' : 'تأكيد الحجز'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};