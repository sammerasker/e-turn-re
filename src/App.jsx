import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import MethodologyPreview from './components/MethodologyPreview';
import Newsletter from './components/Newsletter';
import EturnAdvantage from './components/EturnAdvantage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EturnAdvantage />
      <ProcessSection />
      <MethodologyPreview />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

