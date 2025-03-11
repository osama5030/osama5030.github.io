import React from 'react';
import { motion } from 'framer-motion';
import { AboutHero } from '../components/AboutHero';
import { TeamMember } from '../components/TeamMember';

interface AboutProps {
  language: string;
}

const teamMembers = [
  {
    name: 'Osama Taher',
    nameAr: 'أسامه طاهر',
    role: 'Founder & CEO',
    roleAr: 'المؤسس والرئيس التنفيذي',
    imageUrl: 'https://i.postimg.cc/jdhkqHM8/340620687-112398945139986-7550693663103764636-n.jpg',

  },
  {
    name: 'Ahmed Hassan',
    nameAr: 'أحمد حسن',
    role: 'Travel Operations Director',
    roleAr: 'مدير عمليات السفر',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Maria Rodriguez',
    nameAr: 'ماريا رودريغيز',
    role: 'Customer Experience Manager',
    roleAr: 'مدير تجربة العملاء',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'David Chen',
    nameAr: 'ديفيد تشن',
    role: 'Technology Lead',
    roleAr: 'مدير التكنولوجيا',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero language={language} />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-lg mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'en' 
                ? "At TripTrail, we pride ourselves on being pioneers in the travel services industry for over 5 years. Our mission is to make travel simple, affordable, and stress-free. With our expertise, we have helped thousands of clients fulfill their travel dreams effortlessly."
                : "في TripTrail، نفخر بكوننا روادًا في صناعة خدمات السفر لأكثر من 5 سنوات. مهمتنا هي جعل السفر بسيطًا وبأسعار معقولة وخاليًا من التوتر. بفضل خبرتنا، ساعدنا آلاف العملاء في تحقيق أحلام سفرهم بسهولة."
              }
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                nameAr={member.nameAr}
                role={member.role}
                roleAr={member.roleAr}
                language={language}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            {language === 'en' ? 'Our Achievements' : 'إنجازاتنا'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Happy Travelers' : 'مسافر سعيد'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Destinations' : 'وجهة سياحية'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Success Rate' : 'معدل النجاح'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};