import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedDestinations } from './components/FeaturedDestinations.jsx';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navigation />

      <main>
        <Hero />
        <FeaturedDestinations />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
