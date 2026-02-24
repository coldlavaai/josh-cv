'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      name: 'SSSTS',
      full: 'Site Supervisors\' Safety Training Scheme',
      description: 'Construction industry safety management qualification for supervising site operations.',
      icon: '🏗️',
    },
    {
      name: 'CSCS Card',
      full: 'Construction Skills Certification Scheme',
      description: 'Industry-standard proof of competence for working on construction sites across the UK.',
      icon: '🪪',
    },
    {
      name: 'PASMA',
      full: 'Prefabricated Access Suppliers\' & Manufacturers\' Association',
      description: 'Certified for the safe assembly and use of mobile access towers.',
      icon: '🔩',
    },
    {
      name: 'IPAF',
      full: 'International Powered Access Federation',
      description: 'Licensed operator of powered access platforms including scissor lifts and boom lifts.',
      icon: '🏗️',
    },
    {
      name: 'First Aid',
      full: 'First Aid at Work Certificate',
      description: 'Qualified first aider with emergency response training.',
      icon: '🩺',
    },
    {
      name: 'Full UK Driving Licence',
      full: 'Clean Driving Licence',
      description: 'Full, clean UK driving licence.',
      icon: '🚗',
    },
  ];

  const education = {
    school: 'Slindon College',
    years: '2002–2005',
    grades: [
      { subject: 'Photography', grade: 'A*' },
      { subject: 'English', grade: 'B' },
      { subject: 'Maths', grade: 'B' },
      { subject: 'Drama', grade: 'B' },
      { subject: 'Food Technology', grade: 'B' },
      { subject: 'Science', grade: 'C' },
    ],
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: 'rgba(26, 35, 50, 0.95)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Certifications & Education
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-3xl mx-auto">
            Professional qualifications and academic achievements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-navy-light rounded-xl p-5 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-mono text-gold font-bold text-lg">{cert.name}</h3>
                  <p className="text-cream/50 text-xs mb-2">{cert.full}</p>
                  <p className="text-cream/70 text-sm">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-navy-light via-navy to-navy-light rounded-2xl p-8 border-2 border-teal/30"
        >
          <div className="text-center mb-6">
            <h3 className="font-playfair text-2xl font-bold text-cream mb-1">🎓 {education.school}</h3>
            <p className="text-teal font-mono">{education.years}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {education.grades.map((item, index) => (
              <motion.div
                key={item.subject}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`
                  text-center p-4 rounded-xl border
                  ${item.grade === 'A*' ? 'border-gold bg-gold/10' : item.grade === 'B' ? 'border-teal/50 bg-teal/10' : 'border-cream/20 bg-cream/5'}
                  hover:scale-105 transition-transform duration-300
                `}
              >
                <div className={`font-mono text-3xl font-bold mb-1 ${item.grade === 'A*' ? 'text-gold' : item.grade === 'B' ? 'text-teal' : 'text-cream/70'}`}>
                  {item.grade}
                </div>
                <div className="text-cream/70 text-xs">{item.subject}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
