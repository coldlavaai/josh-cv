'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Abstract automotive-inspired line patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        {/* Speedometer-inspired arcs */}
        <path d="M 10% 80% Q 30% 20%, 50% 80%" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M 50% 80% Q 70% 20%, 90% 80%" stroke="#2C7A7B" strokeWidth="2" fill="none" />
        <path d="M 20% 90% Q 50% 30%, 80% 90%" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        {/* Horizontal speed lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 5}%`}
            y1={`${20 + i * 8}%`}
            x2={`${30 + i * 8}%`}
            y2={`${20 + i * 8}%`}
            stroke="#D4AF37"
            strokeWidth="1"
            opacity={0.3 + (i % 3) * 0.2}
          />
        ))}
      </svg>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gold/20 rounded-full blur-3xl"
        style={{ top: '5%', left: '5%', willChange: 'transform' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-teal/20 rounded-full blur-3xl"
        style={{ bottom: '5%', right: '5%', willChange: 'transform' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  );
}
