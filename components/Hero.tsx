'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stagger = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.15 * i, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/60" />

      {/* Floating particles — reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(isMobile ? 6 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 2 === 0 ? 'rgba(212, 175, 55, 0.4)' : 'rgba(44, 122, 123, 0.3)',
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
            }}
            animate={{
              y: [0, -60 - (i % 3) * 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + (i % 4) * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pb-20 md:pb-24">

        {/* Name */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm text-gold text-xs font-mono tracking-[0.2em] uppercase">
              Automotive Leadership
            </span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream mb-2 tracking-tight leading-[0.95]">
            Joshua
          </h1>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold gradient-text mb-6 md:mb-8 tracking-tight leading-[0.95]">
            Hammett
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-4"
        >
          <p className="font-inter text-xl md:text-2xl lg:text-3xl text-gold font-semibold tracking-wide">
            Isuzu Group Manager
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="font-inter text-sm md:text-base text-cream/50 font-light tracking-[0.15em] uppercase">
              Sales · Service · Parts · Fleet
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Professional Bio */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-10"
        >
          <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto text-left border-gold/10">
            <p className="font-inter text-sm md:text-base text-cream/70 leading-relaxed mb-4">
              A results-driven Group Manager with over 18 years of professional experience, currently overseeing all Isuzu operations across sales, service, parts and fleet. Proven track record of exceeding targets, managing budgets and leading high-performing teams in the automotive sector.
            </p>
            <p className="font-inter text-sm md:text-base text-cream/70 leading-relaxed mb-4">
              Award-winning sales leader recognised across a 300+ person organisation for passion, performance and innovation. Experienced in manufacturer relationships, customer satisfaction strategy, retail and fleet management, and P&L accountability at group level.
            </p>
            <p className="font-inter text-sm md:text-base text-cream/70 leading-relaxed">
              Background spanning structural steel fabrication, site supervision and self-employment brings a unique combination of resilience, technical understanding and hands-on leadership that sets me apart in the automotive industry.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              { value: '18+', label: 'Years Experience' },
              { value: '8+', label: 'Years in Automotive' },
              { value: '3', label: 'Industry Awards' },
              { value: 'Group', label: 'Level Management' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="glass-card rounded-xl p-3 sm:p-4 md:p-5 hover:border-gold/30 transition-all duration-500 group flex flex-col items-center justify-center min-h-[80px] sm:min-h-[90px] md:min-h-[100px]"
              >
                <div className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-gold group-hover:scale-110 transition-transform duration-300 leading-none">
                  {stat.value}
                </div>
                <div className="text-cream/50 text-[10px] md:text-xs mt-1.5 sm:mt-2 font-light tracking-wide uppercase text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-14"
        >
          <a
            href="#journey"
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 min-h-[44px]"
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-dark rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <span className="relative z-10 text-navy font-semibold tracking-wide">
              Explore My Journey
            </span>
            <motion.span
              className="relative z-10 text-navy"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-gold/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            className="w-1 h-2 bg-gold/60 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
    </section>
  );
}
