import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Upload, Check } from 'lucide-react';
import type { ContactFormData, SocialLink } from '../types';

interface ContactProps {
  language: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    nameAr: 'فيسبوك',
    url: 'https://facebook.com/triptrail',
    icon: Facebook
  },
  {
    name: 'Twitter',
    nameAr: 'تويتر',
    url: 'https://twitter.com/triptrail',
    icon: Twitter
  },
  {
    name: 'Instagram',
    nameAr: 'انستغرام',
    url: 'https://instagram.com/triptrail',
    icon: Instagram
  },
  {
    name: 'LinkedIn',
    nameAr: 'لينكد إن',
    url: 'https://linkedin.com/company/triptrail',
    icon: Linkedin
  }
];

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    attachments: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            {language === 'en'
              ? "We're here to help and answer any question you might have"
              : 'نحن هنا للمساعدة والإجابة على أي سؤال قد يكون لديك'
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold mb-6">
                {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </p>
                    <a href="mailto:contact@triptrail.com" className="text-blue-600 hover:text-blue-700">
                      contact@triptrail.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Phone' : 'الهاتف'}
                    </p>
                    <a href="tel:+201286804397" className="text-blue-600 hover:text-blue-700">
                      +201286804397                    </a>
                     <a href="tel:+201280791996" className="text-blue-600 hover:text-blue-700">
                      +201280791996                   </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Address' : 'العنوان'}
                    </p>
                    <p className="text-gray-800">
                      {language === 'en'
                        ? 'Taborowa Street 63, 02-699 Warsaw, Poland'
                        : 'شارع تابوروا 63، 02-699 وارسو، بولندا'
                      }
                    </p>
                  </div>
                </div>
              </div>

             
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                {language === 'en' ? 'Business Hours' : 'ساعات العمل'}
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === 'en' ? 'Monday - Friday' : 'الإثنين - الجمعة'}
                  </span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === 'en' ? 'Saturday' : 'السبت'}
                  </span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === 'en' ? 'Sunday' : 'الأحد'}
                  </span>
                  <span className="font-medium">
                    {language === 'en' ? 'Closed' : 'مغلق'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
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
                    {language === 'en' ? 'Message Sent Successfully!' : 'تم إرسال الرسالة بنجاح!'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? "We'll get back to you as soon as possible."
                      : 'سنرد عليك في أقرب وقت ممكن.'
                    }
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Name' : 'الاسم'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Message' : 'الرسالة'}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Attachments (Optional)' : 'المرفقات (اختياري)'}
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            <span>{language === 'en' ? 'Upload a file' : 'تحميل ملف'}</span>
                            <input
                              type="file"
                              multiple
                              className="sr-only"
                              onChange={e => setFormData(prev => ({ ...prev, attachments: e.target.files }))}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          {language === 'en' ? 'PDF, DOC up to 10MB' : 'PDF, DOC حتى 10 ميجابايت'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};