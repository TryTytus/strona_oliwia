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
    src: "https://images.unsplash.com/photo-1733212697044-cfe8043a1655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBwb3J0cmFpdCUyMGRyYXdpbmd8ZW58MXx8fHwxNzYzMzAwNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Golden Retriever Portrait",
    height: 400
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1717210347936-917702ddf24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwb3J0cmFpdCUyMGFydHxlbnwxfHx8fDE3NjMzMDA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant Dog Portrait",
    height: 500
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1763070605792-c5cccccde33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBwb3J0cmFpdCUyMHBhaW50aW5nfGVufDF8fHx8MTc2MzMwMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Majestic Cat",
    height: 450
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1762119594563-fc90dabb6161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGlsbHVzdHJhdGlvbiUyMHdhdGVyY29sb3J8ZW58MXx8fHwxNzYzMzAwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Watercolor House",
    height: 480
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1640894822819-0a94bec464bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkcmF3aW5nJTIwc2tldGNofGVufDF8fHx8MTc2MzMwMDQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Pet Sketch",
    height: 380
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1717445130372-e50b9b45a669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMHNrZXRjaHxlbnwxfHx8fDE3NjMzMDA0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Architectural Drawing",
    height: 520
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1762113396324-794e0acce922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBwZXR8ZW58MXx8fHwxNzYzMzAwNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Watercolor Pet",
    height: 420
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1762970443873-0de2fd4aa37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNrZXRjaCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjMzMDA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "House Sketch",
    height: 460
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1752317591721-5d6451615143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjMzMDA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Canvas Portrait",
    height: 390
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1603711227258-909ebd7b2ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0YWdlJTIwaG91c2UlMjBkcmF3aW5nfGVufDF8fHx8MTc2MzMwMDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Cottage Drawing",
    height: 440
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
    <div className="relative h-screen overflow-hidden bg-[#f5f1e8]">


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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f1e8] to-transparent pointer-events-none" />
    </div>
  );
}
