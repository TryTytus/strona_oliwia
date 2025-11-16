import { motion } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';
import { Sparkles, PawPrint, Home } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Hand-Crafted",
      description: "Each portrait is carefully hand-drawn with professional materials",
    },
    {
      icon: PawPrint,
      title: "Pet Portraits",
      description: "Capture your furry friend's personality in stunning detail",
    },
    {
      icon: Home,
      title: "House Drawings",
      description: "Preserve memories of your home with architectural precision",
    },
  ];

  return (
    <section className="py-32 bg-[#e8e4d9] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black" />
      
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-1 bg-black" />
          </motion.div>
          <h2 className="mb-6 text-black">
            Art That Tells Your Story
          </h2>
          <p className="max-w-3xl mx-auto text-black/70 italic border-l-4 border-black pl-6">
            With over a decade of experience in fine art and illustration, 
            I create custom portraits that celebrate the unique bond between you and your pets, 
            and the special places you call home.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-[#f5f1e8] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 border-4 border-black bg-white mb-6"
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="mb-3 text-black border-b-2 border-black/20 pb-2">{feature.title}</h3>
                <p className="text-black/70">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
