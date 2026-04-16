import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceSimulation from './components/PriceSimulation';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TrustSection from './components/TrustSection';
import DualAction from './components/DualAction';
import FAQ from './components/FAQ';
import CarInputForm from './components/CarInputForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20">
      <Navbar />
      <Hero />
      <PriceSimulation />
      <DualAction />
      <HowItWorks />
      <CarInputForm />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
