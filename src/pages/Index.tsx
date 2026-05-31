import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Featured from '@/components/Featured';
import Services from '@/components/Services';
import Process from '@/components/Process';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
        <Hero />
        <Featured/>
        <Services/>
        <Process/>
        <Projects />
        <About />
        <Contact />
      <Footer />
    </div>
  );
};

export default Index;
