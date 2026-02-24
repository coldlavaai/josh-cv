'use client';

import { motion } from 'framer-motion';

export default function BeyondWork() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-dark to-navy" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            The Full Picture
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Beyond Work
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-2xl mx-auto font-light">
            The interests and values that shape who I am outside the dealership
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Family */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-navy rounded-2xl p-7 md:p-8 border border-gold/15 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">👨‍👩‍👦‍👦</div>
              <h3 className="font-playfair text-xl font-bold gradient-text mb-3">Family Man</h3>
              <p className="text-cream/55 text-sm leading-relaxed font-light">
                Married with two boys aged 10 and 6. Family drives everything I do and is the motivation behind my ambition and work ethic.
              </p>
            </div>
          </motion.div>

          {/* Photography & Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-navy rounded-2xl p-7 md:p-8 border border-teal/15 hover:border-teal/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-playfair text-xl font-bold gradient-text-teal mb-3">Photography & Media</h3>
              <p className="text-cream/55 text-sm leading-relaxed font-light">
                Keen photographer (A* at GCSE) with a passion for visual storytelling. Occasionally works with a friend on freelance BBC journalism projects — filming, photography, and editorial write-ups.
              </p>
            </div>
          </motion.div>

          {/* Community Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-navy rounded-2xl p-7 md:p-8 border border-gold/15 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">⚓</div>
              <h3 className="font-playfair text-xl font-bold gradient-text mb-3">Community Service</h3>
              <p className="text-cream/55 text-sm leading-relaxed font-light">
                Former voluntary HM Coastguard Rescue Officer. Proud of the time spent serving the Selsey community through emergency response and search operations.
              </p>
            </div>
          </motion.div>

          {/* Sussex Coast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-navy rounded-2xl p-7 md:p-8 border border-teal/15 hover:border-teal/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="font-playfair text-xl font-bold gradient-text-teal mb-3">Sussex Coast Living</h3>
              <p className="text-cream/55 text-sm leading-relaxed font-light">
                Based in Bracklesham Bay, Chichester. Making the most of coastal life with the family — the perfect balance to a driven professional life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
