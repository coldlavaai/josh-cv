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
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Professional career since 2006',
      color: 'gold',
    },
    {
      value: 7,
      suffix: '+',
      label: 'Years in Auto Sales',
      sublabel: 'From executive to manager',
      color: 'teal',
    },
    {
      value: 4,
      suffix: '+',
      label: 'Years Managing',
      sublabel: 'Team of 4 sales executives',
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
    <section className="py-16 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.9)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            By The Numbers
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-3xl mx-auto">
            Quantifying a career built on consistent results and recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative bg-navy rounded-2xl p-6 border-2
                ${stat.color === 'gold' ? 'border-gold hover:border-gold/80 hover:shadow-gold/30' : 'border-teal hover:border-teal/80 hover:shadow-teal/30'}
                hover:shadow-2xl hover:scale-110 hover:-translate-y-3
                transition-all duration-500 ease-out
                overflow-hidden group cursor-default
              `}
            >
              {/* Background gradient */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                ${stat.color === 'gold' ? 'bg-gradient-to-br from-gold via-gold to-transparent' : 'bg-gradient-to-br from-teal via-teal to-transparent'}
              `} />

              <div className="relative z-10">
                <div className={`
                  font-mono text-5xl md:text-6xl font-bold mb-4
                  ${stat.color === 'gold' ? 'text-gold' : 'text-teal'}
                `}>
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-cream mb-2">
                  {stat.label}
                </h3>
                <p className="text-cream/70 text-sm">
                  {stat.sublabel}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`
                absolute top-0 right-0 w-20 h-20 opacity-10
                ${stat.color === 'gold' ? 'bg-gold' : 'bg-teal'}
              `} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-navy-light rounded-2xl p-8 md:p-12 border border-gold/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">
                Multi-Brand
              </div>
              <p className="text-cream/70">
                Experience across ŠKODA, Suzuki, MG, Subaru & Mitsubishi dealerships
              </p>
            </div>
            <div>
              <div className="text-teal font-mono text-3xl font-bold mb-2">
                Full Spectrum
              </div>
              <p className="text-cream/70">
                From hands-on fabrication & welding to boardroom sales strategy & budgets
              </p>
            </div>
            <div>
              <div className="text-gold font-mono text-3xl font-bold mb-2">
                100% Targets
              </div>
              <p className="text-cream/70">
                Consistently hitting and exceeding all sales targets throughout career
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
