'use client';

import { motion } from 'framer-motion';

export default function Journey() {
  const milestones = [
    {
      year: '2006–2007',
      title: 'West Wittering Estate',
      role: 'Maintenance Team',
      description: 'First professional role on the maintenance team for a prestigious coastal estate. Built a strong foundation of hands-on work ethic, reliability, and attention to detail.',
      icon: '🌊',
      color: 'teal' as const,
    },
    {
      year: '2007–2011',
      title: 'Weldtech Southern LTD',
      role: 'Steel Fabricator & Welder',
      description: 'Mastered TIG, MIG, and MMA welding techniques. Worked on fabrication projects nationwide, developing technical precision and the ability to deliver under pressure across diverse sites.',
      icon: '🔧',
      color: 'gold' as const,
    },
    {
      year: '2010–2012',
      title: 'HM Coastguard Rescue',
      role: 'Voluntary Rescue Officer',
      description: 'Served with the Selsey coastguard team on a voluntary basis. Participated in mud rescues, missing person searches, and emergency response operations — demonstrating commitment to community service.',
      icon: '⚓',
      color: 'teal' as const,
    },
    {
      year: '2011–2014',
      title: 'Phoenix Fabrications LTD',
      role: 'Site Supervisor',
      description: 'Stepped up to site supervisor at his father\'s company. Managed teams on structural steel projects, earned SSSTS qualification, and developed leadership skills in high-stakes construction environments.',
      icon: '🏗️',
      color: 'gold' as const,
    },
    {
      year: '2014–2016',
      title: 'Trident Structural LTD',
      role: 'Steel Fabricator',
      description: 'Continued advancing in structural steel fabrication and on-site installation. Honed expertise in complex builds while maintaining rigorous safety and quality standards.',
      icon: '⚙️',
      color: 'teal' as const,
    },
    {
      year: '2016–2017',
      title: 'Seward Group Havant',
      role: 'Sales Executive',
      description: 'Made the bold career pivot into automotive sales. Sold new and used vehicles across Suzuki, MG, Subaru, and Mitsubishi brands — discovering a natural talent for customer relationships and negotiation.',
      icon: '🚗',
      color: 'gold' as const,
    },
    {
      year: '2017–2019',
      title: 'AZUR ŠKODA — Sales Executive',
      role: 'Award-Winning Sales Executive',
      description: 'Hit every target consistently. Recognised as Runner-up Sales Executive of the Year, Social Media Champion, and winner of the Passion Award (out of 300+ staff). Proved himself as a top performer in a major dealer group.',
      icon: '🏆',
      color: 'teal' as const,
    },
    {
      year: '2019–Present',
      title: 'AZUR ŠKODA — Sales Manager',
      role: 'Sales Manager, Birchwood Group',
      description: 'Promoted to manage a team of 4 sales executives. Oversees budgets, customer satisfaction metrics, and manufacturer relationships. Drives departmental strategy and continues to exceed group targets.',
      icon: '📈',
      color: 'gold' as const,
    },
    {
      year: 'Ongoing',
      title: 'BBC Journalist',
      role: 'Freelance — Filming, Photography & Write-ups',
      description: 'Pursues a creative passion alongside his day role, working with a friend on BBC journalism projects. Handles filming, photography, and editorial write-ups — showcasing versatility and storytelling ability.',
      icon: '📸',
      color: 'teal' as const,
    },
  ];

  return (
    <section id="journey" className="py-16 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.8)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            The Journey
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-4xl mx-auto leading-relaxed">
            From hands-on fabrication and voluntary coastguard service to award-winning automotive sales leadership — a career built on grit, adaptability, and relentless ambition
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-teal to-gold" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  milestone.color === 'gold' ? 'border-gold bg-gold/30' : 'border-teal bg-teal/30'
                }`} />
              </div>

              {/* Spacer for mobile */}
              <div className="w-12 flex-shrink-0 md:hidden" />

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={`
                  bg-navy rounded-xl p-5 border-2 
                  ${milestone.color === 'gold' ? 'border-gold/40 hover:border-gold' : 'border-teal/40 hover:border-teal'}
                  transition-all duration-300 hover:shadow-2xl group
                `}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {milestone.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`
                        inline-block px-3 py-1 rounded-full text-xs font-bold mb-2
                        ${milestone.color === 'gold' ? 'bg-gold/20 text-gold' : 'bg-teal/20 text-teal'}
                      `}>
                        {milestone.year}
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-cream mb-1">
                        {milestone.title}
                      </h3>
                      <div className={`text-sm font-semibold mb-2 ${
                        milestone.color === 'gold' ? 'text-gold/80' : 'text-teal/80'
                      }`}>
                        {milestone.role}
                      </div>
                      <p className="text-cream/70 text-sm leading-relaxed">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-navy via-navy-light to-navy rounded-2xl p-6 md:p-8 border-2 border-gold/30"
        >
          <div className="grid md:grid-cols-3 gap-6 text-cream">
            <div>
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">Diverse Foundation</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                Built from real-world experience — welding, site supervision, coastguard rescue, and entrepreneurship. This diverse background brings unique resilience, problem-solving ability, and adaptability to every challenge.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-teal mb-3">Award-Winning Performance</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                Consistently exceeds targets and earns recognition at the highest levels. Three awards in a 300+ person organisation demonstrate exceptional drive, customer focus, and leadership ability.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">Natural Leader</h4>
              <p className="text-sm leading-relaxed text-cream/80">
                From supervising steel fabrication sites to managing a sales team of four, leadership is a constant thread. Combines hands-on experience with strategic thinking to drive team performance and customer satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
