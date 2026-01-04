import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Codes } from './components/Codes';
import { ReviewProcess } from './components/ReviewProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Codes />
      <ReviewProcess />
      <Contact />
      <Footer />
    </div>
  );
}
