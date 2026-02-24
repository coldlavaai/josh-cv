import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import ByTheNumbers from '@/components/ByTheNumbers';
import Awards from '@/components/Awards';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Journey />
      <ByTheNumbers />
      <Awards />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
