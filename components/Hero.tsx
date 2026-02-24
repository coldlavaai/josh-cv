'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(26, 35, 50, 0.7)' }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : 500],
              opacity: [null, Math.random() * 0.5 + 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-playfair text-5xl md:text-8xl lg:text-9xl font-bold text-cream mb-6 tracking-tight leading-tight">
            Joshua Hammett
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3"
        >
          <p className="font-inter text-xl md:text-2xl lg:text-3xl text-gold font-medium">
            Sales Manager — AZUR ŠKODA, Birchwood Group
          </p>
          <p className="font-inter text-lg md:text-xl text-cream/80 mb-4">
            Freelance BBC Journalist • Photographer
          </p>
          <p className="font-inter text-base md:text-lg text-cream/60 max-w-3xl mx-auto italic">
            &ldquo;Award-winning sales leader with 15+ years of diverse professional experience. From steel fabrication to automotive excellence, I bring resilience, adaptability, and a proven track record of exceeding targets and developing high-performing teams.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6">
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <div className="font-mono text-2xl font-bold text-gold">15+</div>
              <div className="text-cream/70 text-xs mt-1">Years Experience</div>
            </div>
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <div className="font-mono text-2xl font-bold text-gold">7+</div>
              <div className="text-cream/70 text-xs mt-1">Years in Auto Sales</div>
            </div>
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <div className="font-mono text-2xl font-bold text-gold">3</div>
              <div className="text-cream/70 text-xs mt-1">Industry Awards</div>
            </div>
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <div className="font-mono text-2xl font-bold text-gold">4+</div>
              <div className="text-cream/70 text-xs mt-1">Years in Management</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a
            href="#journey"
            className="group relative inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
