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
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Qualifications
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Certifications & Education
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-2xl mx-auto font-light">
            Professional qualifications and academic achievements
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-14">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card rounded-xl p-3.5 sm:p-5 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-gold font-bold text-sm sm:text-base md:text-lg">{cert.name}</h3>
                  <p className="text-cream/30 text-[9px] sm:text-[10px] mb-1.5 tracking-wider uppercase leading-tight">{cert.full}</p>
                  <p className="text-cream/50 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 border-gold/15 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-teal/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

          <div className="relative z-10 text-center mb-6 sm:mb-8">
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-cream mb-2">🎓 {education.school}</h3>
            <p className="gradient-text-teal font-mono text-xs sm:text-sm">{education.years}</p>
          </div>

          <div className="relative z-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {education.grades.map((item, index) => (
              <motion.div
                key={item.subject}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`
                  text-center p-2.5 sm:p-4 rounded-lg sm:rounded-xl border backdrop-blur-sm
                  ${item.grade === 'A*'
                    ? 'border-gold/30 bg-gold/8'
                    : item.grade === 'B'
                    ? 'border-teal/20 bg-teal/5'
                    : 'border-cream/10 bg-cream/3'}
                  hover:scale-105 transition-all duration-300
                `}
              >
                <div className={`font-mono text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 ${
                  item.grade === 'A*' ? 'gradient-text' : item.grade === 'B' ? 'gradient-text-teal' : 'text-cream/50'
                }`}>
                  {item.grade}
                </div>
                <div className="text-cream/50 text-[9px] sm:text-[10px] md:text-xs font-light">{item.subject}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
