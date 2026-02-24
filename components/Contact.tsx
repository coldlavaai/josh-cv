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
    <section className="py-16 px-6" style={{ backgroundColor: 'rgba(247, 243, 233, 0.9)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Let&apos;s Connect
          </h2>
          <p className="font-inter text-lg text-navy/70 max-w-3xl mx-auto">
            Open to discussing opportunities in sales management, automotive leadership, and senior commercial roles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block bg-navy rounded-2xl p-8 border-2 border-gold/50 hover:border-gold hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                    {info.icon}
                  </div>
                  <div className="text-gold font-semibold mb-2 relative z-10">{info.label}</div>
                  <div className="text-cream font-mono text-xs break-all relative z-10 group-hover:text-cream/100 transition-colors duration-300">{info.value}</div>
                </a>
              ) : (
                <div className="bg-navy rounded-2xl p-8 border-2 border-gold/50 text-center relative overflow-hidden">
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <div className="text-gold font-semibold mb-2">{info.label}</div>
                  <div className="text-cream font-mono text-xs break-all">{info.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Personal touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-navy rounded-2xl p-8 md:p-10 border-2 border-gold/20 text-center mb-12"
        >
          <div className="text-4xl mb-4">👨‍👩‍👦‍👦</div>
          <h3 className="font-playfair text-2xl font-bold text-cream mb-3">Beyond the CV</h3>
          <p className="text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Married with two children — a 4-year-old and a 10-month-old boy. Family drives everything I do. 
            When I&apos;m not at the dealership, you&apos;ll find me behind a camera on a BBC shoot, or making the most of life on the Sussex coast.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-navy/50 text-sm"
        >
          <p>© 2025 Joshua Hammett. Built with Next.js & Framer Motion.</p>
          <p className="mt-2">Interactive CV • Sales Manager & Automotive Professional</p>
        </motion.div>
      </div>
    </section>
  );
}
