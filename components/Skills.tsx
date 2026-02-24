'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Group Management',
      icon: '🏢',
      color: 'gold' as const,
      skills: [
        'Full P&L Responsibility',
        'Multi-Department Oversight',
        'Budget Management',
        'Strategic Planning',
        'Fleet & Major Contracts',
        'Operational Excellence',
        'Cross-Functional Leadership',
      ],
    },
    {
      title: 'Sales & Commercial',
      icon: '💼',
      color: 'teal' as const,
      skills: [
        'New & Used Vehicle Sales',
        'Customer Negotiation',
        'Sales Strategy',
        'Pipeline Management',
        'Target Achievement',
        'Social Media Marketing',
        'Retail & Trade Operations',
      ],
    },
    {
      title: 'Leadership & People',
      icon: '👥',
      color: 'gold' as const,
      skills: [
        'Team Management',
        'Performance Coaching',
        'Manufacturer Relations',
        'Customer Satisfaction',
        'Staff Development',
        'Departmental Strategy',
      ],
    },
    {
      title: 'Technical & Fabrication',
      icon: '🔧',
      color: 'teal' as const,
      skills: [
        'TIG / MIG / MMA Welding',
        'Steel Fabrication',
        'Site Supervision (SSSTS)',
        'Structural Steelwork',
        'Technical Drawing',
        'Health & Safety Compliance',
      ],
    },
    {
      title: 'Automotive Brands',
      icon: '🚗',
      color: 'gold' as const,
      skills: [
        'Isuzu',
        'ŠKODA',
        'Suzuki',
        'MG',
        'Subaru',
        'Mitsubishi',
      ],
    },
    {
      title: 'Personal Qualities',
      icon: '⭐',
      color: 'teal' as const,
      skills: [
        'Resilience & Adaptability',
        'Customer Focus',
        'Problem Solving',
        'Communication',
        'Work Under Pressure',
        'Continuous Improvement',
      ],
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Capabilities
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Skills & Expertise
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-2xl mx-auto font-light">
            A uniquely diverse skill set spanning group management, sales leadership, and technical fabrication
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`
                bg-navy rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border
                ${category.color === 'gold' ? 'border-gold/15 hover:border-gold/40' : 'border-teal/15 hover:border-teal/40'}
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-500 ease-out cursor-default
                group relative overflow-hidden
              `}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px ${
                category.color === 'gold'
                  ? 'bg-gradient-to-r from-transparent via-gold/30 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-teal/30 to-transparent'
              }`} />

              {/* Hover glow */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${category.color === 'gold'
                  ? 'bg-gradient-to-br from-gold/8 via-transparent to-transparent'
                  : 'bg-gradient-to-br from-teal/8 via-transparent to-transparent'}
              `} />

              <div className="relative z-10 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className={`
                relative z-10 font-playfair text-lg md:text-xl font-bold mb-5
                ${category.color === 'gold' ? 'gradient-text' : 'gradient-text-teal'}
              `}>
                {category.title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium leading-tight
                      ${category.color === 'gold'
                        ? 'bg-gold/8 text-gold/80 border border-gold/15'
                        : 'bg-teal/8 text-teal/80 border border-teal/15'}
                      transition-all duration-300
                      hover:scale-105
                      break-words
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
