import { motion } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-32 bg-[#2a2621] relative overflow-hidden">
      {/* Paper texture pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '48px 48px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-[#f5f1e8] border-b-4 border-[#f5f1e8] pb-4 inline-block"
          >
            Let's Create Something Beautiful
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-[#d4cfc4] italic mt-8"
          >
            Ready to turn your memories into timeless art? Get in touch to discuss your custom portrait.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#f5f1e8] text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(245,241,232,0.3)] flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-[#f5f1e8] border-4 border-[#f5f1e8] flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Start a Chat
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-6 justify-center items-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 border-4 border-[#f5f1e8] flex items-center justify-center text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-black transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-12 h-12 border-4 border-[#f5f1e8] flex items-center justify-center text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-black transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 border-4 border-[#f5f1e8] flex items-center justify-center text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-black transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
