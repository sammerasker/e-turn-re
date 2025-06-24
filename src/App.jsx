import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import MethodologyPreview from './components/MethodologyPreview';
import Newsletter from './components/Newsletter';
import EturnAdvantage from './components/EturnAdvantage';
import Footer from './components/Footer';

import About from './pages/About';
import OurOfferings from './pages/OurOfferings';
import Portfolio from './pages/Portfolio';
import WhoWeBenefit from './pages/WhoWeBenefit';
import OurMethodology from './pages/OurMethodology';
import Connect from './pages/Connect';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <EturnAdvantage />
              <ProcessSection />
              <MethodologyPreview />
              <Newsletter />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/our-offerings" element={<OurOfferings />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/who-we-benefit" element={<WhoWeBenefit />} />
        <Route path="/our-methodology" element={<OurMethodology />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
