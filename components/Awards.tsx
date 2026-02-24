'use client';

import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    {
      title: 'Runner-Up Sales Executive of the Year',
      org: 'Birchwood Group',
      description: 'Recognised as one of the top-performing sales executives across the entire Birchwood Group dealer network, consistently exceeding targets and delivering exceptional customer experiences.',
      icon: '🥈',
      color: 'gold' as const,
    },
    {
      title: 'Social Media Champion',
      org: 'Birchwood Group',
      description: 'Awarded for innovative use of social media in the automotive sales process. Pioneered digital engagement strategies that drove leads, increased brand visibility, and connected with a new generation of buyers.',
      icon: '📱',
      color: 'teal' as const,
    },
    {
      title: 'Passion Award',
      org: 'Birchwood Group — Out of 300+ Staff',
      description: 'The most prestigious individual recognition, awarded to the one person across the entire 300+ staff organisation who embodies exceptional passion, dedication, and commitment to excellence.',
      icon: '🔥',
      color: 'gold' as const,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy/95" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Recognition
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Awards & Recognition
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-2xl mx-auto font-light">
            Recognised at every level for going above and beyond
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`
                relative glass-card rounded-2xl p-8 md:p-9
                ${award.color === 'gold' ? 'hover:border-gold/40' : 'hover:border-teal/40'}
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-500 ease-out
                group overflow-hidden text-center
              `}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px ${
                award.color === 'gold'
                  ? 'bg-gradient-to-r from-transparent via-gold/30 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-teal/30 to-transparent'
              }`} />

              {/* Glow on hover */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                ${award.color === 'gold'
                  ? 'bg-gradient-to-br from-gold/8 via-transparent to-transparent'
                  : 'bg-gradient-to-br from-teal/8 via-transparent to-transparent'}
              `} />

              {/* Trophy icon */}
              <div className="relative z-10 text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {award.icon}
              </div>

              <h3 className={`
                relative z-10 font-playfair text-lg md:text-xl font-bold mb-2
                ${award.color === 'gold' ? 'gradient-text' : 'gradient-text-teal'}
              `}>
                {award.title}
              </h3>

              <div className="relative z-10 text-cream/30 text-xs font-mono mb-5 tracking-wider uppercase">
                {award.org}
              </div>

              <p className="relative z-10 text-cream/60 text-sm leading-relaxed font-light">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
