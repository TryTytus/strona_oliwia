import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
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

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

export function AutoScrollGalleryHero() {
  const [isPaused, setIsPaused] = useState(false);
  const basescrollY = useMotionValue(0);
  const isMobile = useIsMobile();

  useAnimationFrame((_time, delta) => {
    if (!isPaused) {
      let scrollSpeed = 0.05;
      if (isMobile) {
        scrollSpeed = 0.03; // Slower scroll on mobile for better viewing
      }
      basescrollY.set(basescrollY.get() + delta * scrollSpeed);
    }
  });

  const columns = useMemo(() => {
    const numColumns = isMobile ? 1 : 3;
    return Array.from({ length: numColumns }, (_, i) =>
      galleryItems.filter((_, itemIndex) => itemIndex % numColumns === i)
    );
  }, [isMobile]);

  const totalColumnHeight = useMemo(() => 
    columns.map(col => col.reduce((acc, item) => acc + item.height + 24, 0))
  , [columns]);

  return (
    <div className="relative h-screen overflow-hidden bg-cream">


      {/* Auto-scrolling columns */}
      <div 
        className="flex gap-6 h-full py-8 px-3 md:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {columns.map((column, colIndex) => {
          // This component will render the column and handle its own animation logic.
          // This avoids calling hooks inside a loop in the parent component.
          return (
            <ScrollingColumn
              key={colIndex}
              column={column}
              basescrollY={basescrollY}
              direction={colIndex % 2 === 0 ? -1 : 1}
              totalHeight={totalColumnHeight[colIndex]}
            />
          );
        })}
      </div>

      {/* Angled intro section */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[45vh] bg-[#e8e4d9]"
        style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-black max-w-2xl mx-auto px-6 pt-20">
            <h1 className="font-serif text-5xl md:text-7xl italic">
              Sztuka, która opowiada Twoją historię
            </h1>
            <p className="mt-4 text-lg text-mid-brown">
              Ręcznie rysowane portrety zwierząt i domów, które uchwycą to, co najważniejsze.
            </p>
            <motion.div whileHover={{ y: 5 }} className="mt-8">
              <ArrowDown className="w-8 h-8 mx-auto animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ScrollingColumnProps {
  column: GalleryItem[];
  basescrollY: ReturnType<typeof useMotionValue<number>>;
  direction: 1 | -1;
  totalHeight: number;
}

function ScrollingColumn({ column, basescrollY, direction, totalHeight }: ScrollingColumnProps) {
  const y = useTransform(
    basescrollY,
    (v) => {
      const offset = v * direction;
      // Ensure totalHeight is not zero to avoid division by zero errors
      if (totalHeight === 0) return 0;
      return (offset % totalHeight + totalHeight) % totalHeight - totalHeight;
    }
  );

  return (
    <motion.div className="flex-1 flex flex-col gap-6" style={{ y }}>
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
  );
}
