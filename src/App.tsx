import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Programs from './sections/Programs';
import Contact from './sections/Contact';
import Donate from './sections/Donate';
import Footer from './sections/Footer';
import './i18n';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
