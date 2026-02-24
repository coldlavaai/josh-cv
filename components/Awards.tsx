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
    <section className="py-16 px-6" style={{ backgroundColor: 'rgba(26, 35, 50, 0.95)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Awards & Recognition
          </h2>
          <p className="font-inter text-lg text-cream/70 max-w-3xl mx-auto">
            Recognised at every level for going above and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`
                relative bg-navy-light rounded-2xl p-8 border-2
                ${award.color === 'gold' ? 'border-gold/40 hover:border-gold' : 'border-teal/40 hover:border-teal'}
                hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2
                transition-all duration-500 ease-out
                group overflow-hidden text-center
              `}
            >
              {/* Glow effect */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${award.color === 'gold' ? 'bg-gradient-to-br from-gold/10 via-transparent to-transparent' : 'bg-gradient-to-br from-teal/10 via-transparent to-transparent'}
              `} />

              {/* Trophy icon */}
              <div className="relative z-10 text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {award.icon}
              </div>

              <h3 className={`
                relative z-10 font-playfair text-xl font-bold mb-2
                ${award.color === 'gold' ? 'text-gold' : 'text-teal'}
              `}>
                {award.title}
              </h3>

              <div className="relative z-10 text-cream/50 text-sm font-mono mb-4">
                {award.org}
              </div>

              <p className="relative z-10 text-cream/70 text-sm leading-relaxed">
                {award.description}
              </p>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 opacity-20 ${award.color === 'gold' ? 'bg-gold' : 'bg-teal'}`} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
