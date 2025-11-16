import { AutoScrollGalleryHero } from './components/AutoScrollGalleryHero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';

const horseGalleryItems = [
  {
    id: 1,
    src: "/kategorie/konie/IMG_1543.jpg",
    alt: "Portret konia o jasnej sierści w kantarku"
  },
  {
    id: 2,
    src: "/kategorie/konie/72B04E4F-80E3-40FA-AEB6-0792244AEBB6.jpeg",
    alt: "Rysunek głowy konia z bliska"
  },
  {
    id: 3,
    src: "/kategorie/konie/IMG_0177.jpg",
    alt: "Dwa konie obok siebie"
  },
  {
    id: 4,
    src: "/kategorie/konie/IMG_3317.JPG",
    alt: "Czarno-biały szkic konia"
  },
  {
    id: 5,
    src: "/kategorie/konie/IMG_9882.jpg",
    alt: "Portret konia na ciemnym tle"
  },
  {
    id: 6,
    src: "/kategorie/konie/IMG_4939_jpg.jpg",
    alt: "Koń w galopie, rysunek ołówkiem"
  },
];

const petGalleryItems = [
  {
    id: 8,
    src: "/kategorie/psy/IMG_0525.jpg",
    alt: "Portret uśmiechniętego psa"
  },
  {
    id: 9,
    src: "/kategorie/psy/IMG_5923.jpg",
    alt: "Portret psa rasy owczarek"
  },
  {
    id: 10,
    src: "/kategorie/psy/IMG_4147.jpg",
    alt: "Rysunek dwóch psów razem"
  },
  {
    id: 11,
    src: "/kategorie/psy/IMG_4763.jpg",
    alt: "Szkic psa z długimi uszami"
  },
  {
    id: 12,
    src: "/kategorie/psy/IMG_3542.jpg",
    alt: "Portret psa z wyciągniętym językiem"
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <AutoScrollGalleryHero />
      <AboutSection />
      <GallerySection
        title={<span className="font-serif text-4xl md:text-6xl italic">Szlachetne Portrety: Konie</span>}
        subtitle={<span className="text-lg font-light mt-2 text-mid-brown">Każdy detal, każde spojrzenie, uchwycone z artystyczną precyzją.</span>}
        items={horseGalleryItems}
      />
      <GallerySection
        title={<span className="font-serif text-4xl md:text-6xl italic">Portrety Domowych Pupili</span>}
        subtitle={<span className="text-lg font-light mt-2 text-mid-brown">Uchwyć niepowtarzalną osobowość swojego przyjaciela na zawsze.</span>}
        items={petGalleryItems}
      />
      <ContactSection />
    </div>
  );
}
