import {
  Rocket,
  Handshake,
  Link2,
  Target,
  Shield,
  ChevronLeft,
  ChevronRight, User, Users, Globe, Building
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import React from 'react';

const MethodologyPreview = () => {
  const sectionRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const particlesContainer = particlesContainerRef.current;
    if (!section || !particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle-ep");
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      particle.style.animation = `float-ep ${Math.random() * 30 + 20}s infinite alternate ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particlesContainer.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) createParticle();

    const addLightDots = () => {
      for (let i = 0; i < 15; i++) {
        const dot = document.createElement("div");
        dot.classList.add("particle-ep");
        dot.style.width = "4px";
        dot.style.height = "4px";
        dot.style.background = "rgba(255, 255, 255, 0.7)";
        dot.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animation = `float-ep ${Math.random() * 15 + 10}s infinite alternate ease-in-out`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(dot);
      }
    };
    addLightDots();

    const handleMouseMove = (e) => {
      const blob = document.createElement("div");
      blob.classList.add("particle-ep");
      blob.style.left = `${e.pageX - section.offsetLeft}px`;
      blob.style.top = `${e.pageY - section.offsetTop}px`;
      blob.style.width = "12px";
      blob.style.height = "12px";
      blob.style.opacity = "0.5";
      blob.style.background = "rgba(250, 204, 21, 0.5)";
      blob.style.boxShadow = "0 0 15px rgba(250, 204, 21, 0.5)";
      blob.style.transition = "all 1s ease";
      blob.style.zIndex = "1";
      particlesContainer.appendChild(blob);
      setTimeout(() => {
        blob.style.opacity = "0";
        blob.style.transform = "scale(3)";
      }, 10);
      setTimeout(() => blob.remove(), 1000);
    };

    section.addEventListener("mousemove", handleMouseMove);

    const handleParallaxMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      document.querySelectorAll(".gradient-blob-ep").forEach((blob, i) => {
        const factor = (i + 1) * 0.1;
        blob.style.transform = `translate(${moveX * factor * 15}px, ${moveY * factor * 15}px) scale(${1 + factor * 0.05})`;
      });
      document.querySelectorAll(".light-ray-ep").forEach((ray, i) => {
        const factor = (i + 1) * 0.05;
        ray.style.transform = `rotate(${moveX * factor * 10}deg) translate(${moveY * factor * 10}px, 0)`;
      });
    };

    section.addEventListener("mousemove", handleParallaxMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll("h2").forEach((h2) => {
      observer.observe(h2);
    });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mousemove", handleParallaxMouseMove);
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
      observer.disconnect();
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -384 : 384, behavior: "smooth" });
  };

const services = [
  { icon: <User className="w-12 h-12 text-yellow-400" />, title: "Solo Entrepreneurs", desc: "Transform your vision into reality with the ultimate co-founding partner by your side. We provide the complementary expertise, resources, and execution power you need to validate, build, and launch your venture with confidence." },
  { icon: <Users className="w-12 h-12 text-yellow-400" />, title: "Co-Founding Teams", desc: "Amplify your existing team's capabilities with hands-on support, strategic clarity, and complementary expertise. We integrate seamlessly with your founding dynamics while filling critical gaps in skills and resources." },
  { icon: <Rocket className="w-12 h-12 text-yellow-400" />, title: "Early-Stage Startups", desc: "Accelerate your path to product-market fit and avoid costly common pitfalls. Our proven frameworks and operational excellence help you build traction faster while optimizing for sustainable growth." },
  { icon: <Globe className="w-12 h-12 text-yellow-400" />, title: "Operational Excellence", desc: "Break into new markets with confidence and operational firepower. We provide the strategic guidance, resources, and execution capabilities needed to scale intelligently across borders and verticals." },
  { icon: <Building className="w-12 h-12 text-yellow-400" />, title: "Corporate Innovation Teams", desc: "Bridge the gap between corporate resources and startup agility. We help enterprises build, validate, and launch new ventures while maintaining the speed and flexibility that drive breakthrough innovation." }
];

  return (
    <section ref={sectionRef} id="portfolio" className="section animated-gradient text-white relative overflow-hidden bg-black">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          /* Fade-in animation styles */
          h2, h3 {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          .fade-in-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          /* Particle styles */
          .particle-ep {
            position: absolute;
            background: rgba(250, 204, 21, 0.3);
            border-radius: 50%;
            pointer-events: none;
          }
          
          @keyframes float-ep {
            0% { transform: translate(0, 0); }
            100% { transform: translate(20px, 20px); }
          }
        `}
      </style>
      
      <div className="animated-shape shape1"></div> 
      <div className="animated-shape shape2"></div> 
      <div className="animated-shape shape3"></div> 
      <div className="animated-shape shape4"></div> 
      <div className="gradient-overlay-new"></div>
      <div ref={particlesContainerRef} className="particles-container-ep"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-20 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-white">Who We Benefit</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400">Built for Founders at Every Stage of the Journey</h2>
          <p className="text-lg md:text-xl mb-6 sm:mb-10 border border-yellow-400 rounded-xl p-6 bg-black/60 backdrop-blur-sm">
            Whether you're a solo visionary with a breakthrough idea or a scaling startup ready for global expansion, we meet you exactly where you are and accelerate your path to success. Our flexible co-founding approach adapts to your unique needs, stage, and ambitions.
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((s, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-2 border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 bg-[#111111]/80 backdrop-blur-sm shadow-lg text-white">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/50 flex items-center justify-center mb-3 sm:mb-4">
                          {s.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400">{s.title}</h3>
                        <p className="text-sm sm:text-base text-white/90">{s.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 sm:-left-12" />
              <CarouselNext className="-right-4 sm:-right-12" />
            </div>
            <div className="flex justify-center mt-4 md:hidden">
              <Button onClick={() => scrollByCard("left")} size="sm" variant="outline" className="mr-2">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button onClick={() => scrollByCard("right")} size="sm" variant="outline">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/about" 
            className="inline-block border border-white/60 text-white/90 bg-black/40 hover:bg-black/70 hover:text-white px-6 py-3 rounded-lg text-lg transition relative z-10" 
          > 
            Explore Our Offering
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MethodologyPreview;
