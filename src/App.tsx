import { AutoScrollGalleryHero } from './components/AutoScrollGalleryHero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';

const horseGalleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1733212697044-cfe8043a1655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBwb3J0cmFpdCUyMGRyYXdpbmd8ZW58MXx8fHwxNzYzMzAwNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Golden Retriever Portrait"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1717210347936-917702ddf24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwb3J0cmFpdCUyMGFydHxlbnwxfHx8fDE3NjMzMDA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant Dog Portrait"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1763070605792-c5cccccde33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBwb3J0cmFpdCUyMHBhaW50aW5nfGVufDF8fHx8MTc2MzMwMDQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Majestic Cat Painting"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1640894822819-0a94bec464bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkcmF3aW5nJTIwc2tldGNofGVufDF8fHx8MTc2MzMwMDQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Pet Sketch Study"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1762113396324-794e0acce922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBwZXR8ZW58MXx8fHwxNzYzMzAwNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Watercolor Pet Portrait"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1752317591721-5d6451615143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjMzMDA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Canvas Dog Portrait"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1612760721786-a42eb89aba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBhcnQlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzMzAwNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Artistic Cat Illustration"
  },
];

const petGalleryItems = [
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1762119594563-fc90dabb6161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGlsbHVzdHJhdGlvbiUyMHdhdGVyY29sb3J8ZW58MXx8fHwxNzYzMzAwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Watercolor House Portrait"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1717445130372-e50b9b45a669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMHNrZXRjaHxlbnwxfHx8fDE3NjMzMDA0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Architectural Line Drawing"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1762970443873-0de2fd4aa37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNrZXRjaCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjMzMDA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Detailed House Sketch"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1603711227258-909ebd7b2ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0YWdlJTIwaG91c2UlMjBkcmF3aW5nfGVufDF8fHx8MTc2MzMwMDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Charming Cottage Drawing"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1719694171233-f7db177e2502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBwYWludGluZ3xlbnwxfHx8fDE3NjMzMDA0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Artist's Workspace"
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
