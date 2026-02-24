'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'joandjosh@icloud.com',
      href: 'mailto:joandjosh@icloud.com?subject=Inquiry from Interactive CV',
    },
    {
      icon: '📱',
      label: 'Mobile',
      value: '07584 375 084',
      href: 'tel:+4407584375084',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Chat Now',
      href: 'https://wa.me/447584375084',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Bracklesham Bay, Chichester',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold/70 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Get in Touch
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Let&apos;s Connect
          </h2>
          <p className="font-inter text-base md:text-lg text-cream/50 max-w-2xl mx-auto font-light">
            Open to discussing opportunities in automotive group management, dealership leadership, and senior commercial roles
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block glass-card rounded-2xl p-7 md:p-8 hover:border-gold/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out group text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/8 via-transparent to-transparent" />
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {info.icon}
                  </div>
                  <div className="gradient-text font-semibold mb-2 relative z-10 text-sm">{info.label}</div>
                  <div className="text-cream/50 font-mono text-xs break-all relative z-10 font-light">{info.value}</div>
                </a>
              ) : (
                <div className="glass-card rounded-2xl p-7 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  <div className="text-4xl md:text-5xl mb-4">{info.icon}</div>
                  <div className="gradient-text font-semibold mb-2 text-sm">{info.label}</div>
                  <div className="text-cream/50 font-mono text-xs break-all font-light">{info.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="section-divider max-w-lg mx-auto mb-8" />
          <p className="text-cream/25 text-xs font-light tracking-wide">
            © 2025 Joshua Hammett. Built with Next.js & Framer Motion.
          </p>
          <p className="mt-2 text-cream/20 text-xs font-light">
            Isuzu Group Manager • Automotive Leader
          </p>
        </motion.div>
      </div>
    </section>
  );
}
