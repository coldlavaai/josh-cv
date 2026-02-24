'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep premium base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-95" />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Subtle premium grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Abstract automotive-inspired SVG patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        {/* Elegant flowing curves */}
        <path d="M 0% 60% Q 25% 30%, 50% 60% T 100% 60%" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <path d="M 0% 70% Q 35% 40%, 70% 70% T 100% 50%" stroke="#2C7A7B" strokeWidth="1" fill="none" />
        <path d="M 0% 80% Q 45% 50%, 80% 80% T 100% 70%" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
        {/* Subtle diagonal lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={i}
            x1={`${i * 20}%`}
            y1="0%"
            x2={`${i * 20 + 15}%`}
            y2="100%"
            stroke="#D4AF37"
            strokeWidth="0.5"
            opacity={0.15 + (i % 3) * 0.1}
          />
        ))}
      </svg>

      {/* Primary glowing orb — gold */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          top: '10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glowing orb — teal */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          bottom: '10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(44, 122, 123, 0.1) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Tertiary accent orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
