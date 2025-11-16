import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedSection } from './AnimatedSection';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

export function GallerySection({ 
  title, 
  subtitle, 
  items, 
}: GallerySectionProps) {

  return (
    <section className="py-24 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block border-b-4 border-black pb-4 mb-6">
            <h2 className="text-black">{title}</h2>
          </div>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-black/70 border-l-4 border-black pl-6 italic">
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="1.5rem">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotate: Math.random() > 0.5 ? 1 : -1,
                  transition: { duration: 0.3 }
                }}
                className="cursor-pointer"
              >
                <div className="relative group overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110 sepia-[0.15]"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-end p-6"
                  >
                    <p className="text-white border-b-2 border-white pb-2">{item.alt}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
