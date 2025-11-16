import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  height: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/Rysunki/Rysunki/IMG_0177.jpg",
    alt: "Detailed pet portrait in pencil",
    height: 400
  },
  {
    id: 2,
    src: "/Rysunki/Rysunki/IMG_0491.jpg",
    alt: "Drawing of a house with fine details",
    height: 500
  },
  {
    id: 3,
    src: "/Rysunki/Rysunki/IMG_0525.jpg",
    alt: "Portrait of a smiling dog",
    height: 450
  },
  {
    id: 4,
    src: "/Rysunki/Rysunki/IMG_1413.jpg",
    alt: "Artistic rendering of a building",
    height: 480
  },
  {
    id: 5,
    src: "/Rysunki/Rysunki/IMG_1543.jpg",
    alt: "Sketch of a friendly-looking dog",
    height: 380
  },
  {
    id: 6,
    src: "/Rysunki/Rysunki/IMG_1548.jpg",
    alt: "Pencil drawing of a modern home",
    height: 520
  },
  {
    id: 7,
    src: "/Rysunki/Rysunki/IMG_1621.jpg",
    alt: "Close-up portrait of a cat",
    height: 420
  },
  {
    id: 8,
    src: "/Rysunki/Rysunki/IMG_1915.jpg",
    alt: "Drawing of a two-story house",
    height: 460
  },
  {
    id: 9,
    src: "/Rysunki/Rysunki/IMG_4147.jpg",
    alt: "A pair of dogs drawn together",
    height: 390
  },
  {
    id: 10,
    src: "/Rysunki/Rysunki/IMG_4457.jpg",
    alt: "A fluffy dog's portrait",
    height: 440
  },
  {
    id: 11,
    src: "/Rysunki/Rysunki/IMG_5923.jpg",
    alt: "A majestic dog posing for a portrait",
    height: 470
  },
  {
    id: 12,
    src: "/Rysunki/Rysunki/IMG_8827.jpg",
    alt: "A drawing of a family home",
    height: 410
  },
];

export function AutoScrollGalleryHero() {
  const [isPaused, setIsPaused] = useState(false);
  const basescrollY = useMotionValue(0);

  useAnimationFrame((_time, delta) => {
    if (!isPaused) {
      // The value '0.05' controls the scroll speed. Decrease for slower, increase for faster.
      basescrollY.set(basescrollY.get() + delta * 0.05);
    }
  });

  const columns = useMemo(() => [
    galleryItems.filter((_, i) => i % 3 === 0),
    galleryItems.filter((_, i) => i % 3 === 1),
    galleryItems.filter((_, i) => i % 3 === 2),
  ], []);

  const totalColumnHeight = useMemo(() => 
    columns.map(col => col.reduce((acc, item) => acc + item.height + 24, 0))
  , [columns]);

  return (
    <div className="relative h-screen overflow-hidden bg-cream">


      {/* Auto-scrolling columns */}
      <div 
        className="flex gap-6 h-full py-8 px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {columns.map((column, colIndex) => {
          const direction = colIndex % 2 === 0 ? -1 : 1;
          const height = totalColumnHeight[colIndex];
          
          const y = useTransform(
            basescrollY,
            (v) => {
              const offset = v * direction;
              return (offset % height + height) % height - height;
            }
          );

          return (
            <motion.div key={colIndex} className="flex-1 flex flex-col gap-6" style={{ y }}>
              {[...column, ...column].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ duration: 0.3 }}
                className="relative"
                style={{ height: item.height }}
              >
                <div className="w-full h-full border-4 border-black shadow-lg overflow-hidden bg-white">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover sepia-[0.2]"
                  />
                </div>
              </motion.div>
            ))}
            </motion.div>
          )})}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </div>
  );
}
