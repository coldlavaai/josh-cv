'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function ByTheNumbers() {
  const stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    sublabel: string;
    color: string;
  }> = [
    {
      value: 18,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Professional career since 2006',
      color: 'gold',
    },
    {
      value: 8,
      suffix: '+',
      label: 'Years in Automotive',
      sublabel: 'From executive to group manager',
      color: 'teal',
    },
    {
      value: 6,
      suffix: '+',
      label: 'Years Managing',
      sublabel: 'Teams, budgets & full P&L',
      color: 'gold',
    },
    {
      value: 3,
      label: 'Awards Won',
      sublabel: 'Out of 300+ staff company',
      color: 'teal',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream to-cream/95" />
      <div className="absolute inset-0 mesh-gradient" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-navy/10 bg-navy/5 text-navy/60 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Track Record
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            By The Numbers
          </h2>
          <p className="font-inter text-base md:text-lg text-navy/60 max-w-2xl mx-auto">
            Quantifying a career built on consistent results and recognition
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`
                relative bg-navy rounded-2xl p-7 md:p-8 border
                ${stat.color === 'gold' ? 'border-gold/20 hover:border-gold/50' : 'border-teal/20 hover:border-teal/50'}
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-500 ease-out
                overflow-hidden group cursor-default
              `}
            >
              {/* Gradient overlay on hover */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${stat.color === 'gold'
                  ? 'bg-gradient-to-br from-gold/10 via-transparent to-transparent'
                  : 'bg-gradient-to-br from-teal/10 via-transparent to-transparent'}
              `} />

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px ${
                stat.color === 'gold'
                  ? 'bg-gradient-to-r from-transparent via-gold/40 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-teal/40 to-transparent'
              }`} />

              <div className="relative z-10">
                <div className={`
                  font-mono text-5xl md:text-6xl font-bold mb-4
                  ${stat.color === 'gold' ? 'gradient-text' : 'gradient-text-teal'}
                `}>
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-cream mb-2">
                  {stat.label}
                </h3>
                <p className="text-cream/50 text-sm font-light">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-navy rounded-2xl md:rounded-3xl p-8 md:p-12 border border-gold/15 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-teal/5" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="gradient-text font-mono text-2xl md:text-3xl font-bold mb-3">
                Multi-Brand
              </div>
              <p className="text-cream/50 text-sm font-light leading-relaxed">
                Experience across ŠKODA, Isuzu, Suzuki, MG, Subaru & Mitsubishi
              </p>
            </div>
            <div>
              <div className="gradient-text-teal font-mono text-2xl md:text-3xl font-bold mb-3">
                Full P&L
              </div>
              <p className="text-cream/50 text-sm font-light leading-relaxed">
                Complete budget management with group-level operational responsibility
              </p>
            </div>
            <div>
              <div className="gradient-text font-mono text-2xl md:text-3xl font-bold mb-3">
                100% Targets
              </div>
              <p className="text-cream/50 text-sm font-light leading-relaxed">
                Consistently hitting and exceeding all sales targets throughout career
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
