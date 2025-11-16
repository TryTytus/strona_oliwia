import { motion, useAnimationFrame } from 'motion/react';
import { useRef, useState } from 'react';
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
  const scrollRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      scrollRef.current += delta * 0.03;
    }
  });

  const columns = [
    galleryItems.filter((_, i) => i % 3 === 0),
    galleryItems.filter((_, i) => i % 3 === 1),
    galleryItems.filter((_, i) => i % 3 === 2),
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-cream">


      {/* Auto-scrolling columns */}
      <div 
        className="flex gap-6 h-full py-8 px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex-1 flex flex-col gap-6"
            style={{
              y: useAnimationFrame((t) => {
                if (isPaused) return scrollRef.current;
                const speed = colIndex % 2 === 0 ? 1 : -1;
                const offset = colIndex * 200;
                return ((scrollRef.current * speed + offset) % 2000) - 1000;
              })
            }}
          >
            {[...column, ...column, ...column].map((item, index) => (
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
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </div>
  );
}
