'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Sales & Commercial',
      icon: '💼',
      color: 'gold' as const,
      skills: [
        'New & Used Vehicle Sales',
        'Customer Negotiation',
        'Budget Management',
        'Sales Strategy',
        'Pipeline Management',
        'Target Achievement',
        'Social Media Marketing',
      ],
    },
    {
      title: 'Leadership & Management',
      icon: '👥',
      color: 'teal' as const,
      skills: [
        'Team Management (4 Reports)',
        'Performance Coaching',
        'Manufacturer Relations',
        'Customer Satisfaction',
        'Departmental Strategy',
        'Staff Development',
      ],
    },
    {
      title: 'Technical & Fabrication',
      icon: '🔧',
      color: 'gold' as const,
      skills: [
        'TIG Welding',
        'MIG Welding',
        'MMA Welding',
        'Steel Fabrication',
        'Site Supervision (SSSTS)',
        'Structural Steelwork',
        'Technical Drawing Reading',
      ],
    },
    {
      title: 'Creative & Media',
      icon: '📸',
      color: 'teal' as const,
      skills: [
        'Photography (A* Grade)',
        'BBC Journalism',
        'Filming & Videography',
        'Editorial Writing',
        'Digital Content Creation',
        'Visual Storytelling',
      ],
    },
    {
      title: 'Automotive Brands',
      icon: '🚗',
      color: 'gold' as const,
      skills: [
        'ŠKODA',
        'Suzuki',
        'MG',
        'Subaru',
        'Mitsubishi',
        'Multi-Brand Knowledge',
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
        'Community Service',
        'Work Under Pressure',
        'Continuous Improvement',
      ],
    },
  ];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.9)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Skills & Expertise
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-3xl mx-auto">
            A uniquely diverse skill set spanning sales leadership, technical fabrication, and creative media
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                bg-navy rounded-2xl p-6 border-2
                ${category.color === 'gold' ? 'border-gold/30 hover:border-gold/60' : 'border-teal/30 hover:border-teal/60'}
                hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
                transition-all duration-500 ease-out cursor-default
                group relative overflow-hidden
              `}
            >
              {/* Hover glow */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${category.color === 'gold' ? 'bg-gradient-to-br from-gold/10 via-transparent to-transparent' : 'bg-gradient-to-br from-teal/10 via-transparent to-transparent'}
              `} />

              <div className="relative z-10 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className={`
                relative z-10 font-playfair text-xl font-bold mb-5
                ${category.color === 'gold' ? 'text-gold' : 'text-teal'}
              `}>
                {category.title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium leading-tight
                      ${category.color === 'gold'
                        ? 'bg-gold/10 text-gold border border-gold/30'
                        : 'bg-teal/10 text-teal border border-teal/30'}
                      transition-all duration-300
                      hover:scale-105 hover:shadow-lg
                      break-words max-w-full
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
