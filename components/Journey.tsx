'use client';

import { motion } from 'framer-motion';

export default function Journey() {
  const milestones = [
    {
      year: 'Sept 2025–Present',
      title: 'Isuzu Group Manager',
      role: 'Group Manager — Full Operations',
      description: 'Overseeing all Isuzu operations including buying, selling, servicing and parts. Managing retail, fleet and major contracts on a daily basis. Full budget management and P&L responsibility. Leading cross-functional teams across sales, service and parts departments. Driving growth through strategic planning and operational excellence.',
      icon: '🏆',
      color: 'gold' as const,
      featured: true,
    },
    {
      year: '2019–2025',
      title: 'AZUR ŠKODA — Sales Manager',
      role: 'Sales Manager, Birchwood Group',
      description: 'Managed a team of 4 sales executives. Oversaw budgets, customer satisfaction metrics, and manufacturer relationships. Drove departmental strategy and consistently exceeded group targets across both new and used vehicle sales.',
      icon: '📈',
      color: 'teal' as const,
      featured: false,
    },
    {
      year: '2017–2019',
      title: 'AZUR ŠKODA — Sales Executive',
      role: 'Award-Winning Sales Executive',
      description: 'Hit every target consistently. Recognised as Runner-up Sales Executive of the Year, Social Media Champion, and winner of the Passion Award (out of 300+ staff). Proved himself as a top performer in a major dealer group.',
      icon: '🥇',
      color: 'gold' as const,
      featured: false,
    },
    {
      year: '2016–2017',
      title: 'Seward Group Havant',
      role: 'Sales Executive',
      description: 'Made the bold career pivot into automotive sales. Sold new and used vehicles across Suzuki, MG, Subaru, and Mitsubishi brands — discovering a natural talent for customer relationships and negotiation.',
      icon: '🚗',
      color: 'teal' as const,
      featured: false,
    },
    {
      year: '2014–2016',
      title: 'Trident Structural LTD',
      role: 'Steel Fabricator',
      description: 'Continued advancing in structural steel fabrication and on-site installation. Honed expertise in complex builds while maintaining rigorous safety and quality standards.',
      icon: '⚙️',
      color: 'gold' as const,
      featured: false,
    },
    {
      year: '2011–2014',
      title: 'Phoenix Fabrications LTD',
      role: 'Site Supervisor',
      description: 'Stepped up to site supervisor. Managed teams on structural steel projects, earned SSSTS qualification, and developed leadership skills in high-stakes construction environments.',
      icon: '🏗️',
      color: 'teal' as const,
      featured: false,
    },
    {
      year: '2007–2011',
      title: 'Weldtech Southern LTD',
      role: 'Steel Fabricator & Welder',
      description: 'Mastered TIG, MIG, and MMA welding techniques. Worked on fabrication projects nationwide, developing technical precision and the ability to deliver under pressure across diverse sites.',
      icon: '🔧',
      color: 'gold' as const,
      featured: false,
    },
    {
      year: '2010–2012',
      title: 'HM Coastguard Rescue',
      role: 'Voluntary Rescue Officer',
      description: 'Served with the Selsey coastguard team on a voluntary basis. Participated in mud rescues, missing person searches, and emergency response operations.',
      icon: '⚓',
      color: 'teal' as const,
      featured: false,
    },
    {
      year: '2010–2011',
      title: 'Self Employed Gardening',
      role: 'Sole Trader',
      description: 'Ran own gardening and landscaping business, demonstrating entrepreneurial spirit, customer management, and self-motivation.',
      icon: '🌿',
      color: 'gold' as const,
      featured: false,
    },
    {
      year: '2006–2007',
      title: 'West Wittering Estate',
      role: 'Maintenance Team',
      description: 'First professional role on the maintenance team for a prestigious coastal estate. Built a strong foundation of hands-on work ethic, reliability, and attention to detail.',
      icon: '🌊',
      color: 'teal' as const,
      featured: false,
    },
  ];

  return (
    <section id="journey" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6"
          >
            Career Timeline
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            The Journey
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-3xl mx-auto leading-relaxed">
            From hands-on fabrication and voluntary coastguard service to leading a full automotive dealership — a career built on grit, adaptability, and relentless ambition
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Featured current role */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <div className="relative bg-navy rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 border border-gold/30 glow-gold overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer rounded-xl sm:rounded-2xl md:rounded-3xl" />
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl">{milestones[0].icon}</span>
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-mono font-bold tracking-wider uppercase">
                  Current Role
                </span>
                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold/80 text-xs font-mono">
                  {milestones[0].year}
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {milestones[0].title}
              </h3>
              <p className="text-gold/70 font-medium mb-4 text-sm md:text-base">{milestones[0].role}</p>
              <p className="text-cream/70 leading-relaxed text-sm md:text-base max-w-3xl">
                {milestones[0].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-teal/30 to-gold/40" />

          {milestones.slice(1).map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative flex items-start mb-5 md:mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full border-2 ${
                  milestone.color === 'gold'
                    ? 'border-gold bg-gold/40'
                    : 'border-teal bg-teal/40'
                }`} />
              </div>

              {/* Spacer for mobile */}
              <div className="w-12 flex-shrink-0 md:hidden" />

              {/* Content card */}
              <div className={`flex-1 min-w-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className={`
                  glass-card rounded-xl p-4 sm:p-5 md:p-6
                  hover:border-gold/30
                  transition-all duration-500 ease-out
                  hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1
                  group
                `}>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {milestone.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`
                        inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold mb-2 tracking-wider
                        ${milestone.color === 'gold' ? 'bg-gold/10 text-gold' : 'bg-teal/10 text-teal-light'}
                      `}>
                        {milestone.year}
                      </div>
                      <h3 className="font-playfair text-base md:text-lg font-bold text-cream mb-0.5">
                        {milestone.title}
                      </h3>
                      <div className={`text-xs font-medium mb-2 ${
                        milestone.color === 'gold' ? 'text-gold/70' : 'text-teal-light/70'
                      }`}>
                        {milestone.role}
                      </div>
                      <p className="text-cream/50 text-xs md:text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 bg-navy rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-gold/20 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-teal/5" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-cream">
            <div>
              <h4 className="font-playfair text-xl font-bold gradient-text mb-3">Diverse Foundation</h4>
              <p className="text-sm leading-relaxed text-cream/60">
                Built from real-world experience — welding, site supervision, coastguard rescue, and entrepreneurship. This diverse background brings unique resilience and problem-solving ability.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold gradient-text-teal mb-3">Award-Winning Performance</h4>
              <p className="text-sm leading-relaxed text-cream/60">
                Consistently exceeds targets and earns recognition at the highest levels. Three awards in a 300+ person organisation demonstrate exceptional drive and leadership.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold gradient-text mb-3">Group-Level Leadership</h4>
              <p className="text-sm leading-relaxed text-cream/60">
                From supervising steel fabrication sites to managing full dealership operations with P&L responsibility — leadership is a constant thread through every career chapter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
