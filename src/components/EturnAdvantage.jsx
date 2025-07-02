import {
  Rocket,
  Handshake,
  Link2,
  Target,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel.jsx";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EturnAdvantage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const particlesContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Particle + background setup
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
        const particle = document.createElement("div");
        particle.classList.add("particle-ep");
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.background = "rgba(255, 255, 255, 0.7)";
        particle.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float-ep ${Math.random() * 15 + 10}s infinite alternate ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
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
      blob.style.background = "rgba(255, 224, 102, 0.5)";
      blob.style.boxShadow = "0 0 15px rgba(255, 224, 102, 0.5)";
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

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mousemove", handleParallaxMouseMove);
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -384 : 384, behavior: "smooth" });
  };

  const services = [
    { icon: Rocket, title: "Accelerated Development", desc: "Our FastTrack™ methodology compresses the journey from concept to market-ready product, cutting traditional timelines through intensive validation sprints and rapid prototyping. Reach market faster while reducing risk." },
    { icon: Handshake, title: "Partnership Models", desc: "Choose the collaboration structure that works for you from idea co-creation to technical execution to full venture partnership. Customizable equity arrangements and resource allocations ensure perfect alignment between founders and studio." },
    { icon: Link2, title: "End-to-End Execution", desc: "No need to juggle multiple partners. From ideation to MVP to scaling operations, our integrated team handles every aspect of your venture's development, eliminating fragmentation and ensuring seamless execution." },
    { icon: Target, title: "Operational Excellence", desc: "Our unique operational and process optimization dramatically reduces time-to-market while increasing the probability of success through continuous validation and refinement at every stage." },
    { icon: Shield, title: "IP Protection", desc: "Protect your innovations with specialized intellectual property guidance. From patent assessment to trademark protection and trade secret management, we help you build a strategic IP portfolio that enhances company value." }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} id="advantages" className="section animated-section-ep bg-black relative overflow-hidden">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="container mx-auto px-4 relative z-20 sm:px-6 py-12 sm:py-16">
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">The e-turn Advanage</p>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 text-white"
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
          >The e-turn Advantage</motion.h2>
          <motion.h2
             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400"
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
          >Building Startups the Smart Way</motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 border border-gray-700 rounded-xl p-4 sm:p-6 bg-black/60 backdrop-blur-sm text-white"
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
            We've re-engineered startup building by combining all essential services into one integrated platform. No more juggling multiple partners or fragmented processes, just seamless execution from concept to success.
            <span className="block italic relative text-xs sm:text-sm md:text-base mt-4 px-3 sm:px-4 py-2 sm:py-3 border-l-4 border-gray-500 bg-gray-900 text-white rounded-r-lg">
              "Our advantage is clear: we provide a complete support for startup success. By combining our rapid development process, versatile partnership options, and full-stack execution with operational rigor and IP advisory, we ensure your venture is built to win.""
            </span>
          </motion.p>
        </div>

        {/* Cards Carousel */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {services.map((s, i) => {
                const borderColor = "border-gray-700";
                const bgGradient = "from-gray-900/20 to-gray-600/20";
                return (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className={`border-2 ${borderColor} rounded-lg p-8 bg-gradient-to-br ${bgGradient} backdrop-blur-sm relative overflow-hidden group cursor-pointer text-white`}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => scrollByCard("left")}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      className="mb-6 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <s.icon className="w-16 h-16 text-gray-300" />
                    </motion.div>
                    
                    <motion.h3
                      className="text-2xl font-bold mb-4 relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                      {s.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
                    >
                      {s.desc}
                    </motion.p>
                    
                    <motion.button
                      className="text-gray-400 hover:text-white transition-colors flex items-center relative z-10 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      LEARN MORE
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </CarouselItem>
              )
              })}
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

        <div className="text-center mt-6">
          <Button asChild size="lg" className="bg-gray-800 text-white hover:bg-opacity-90">
            <Link to="/about">Explore Our Offering</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EturnAdvantage;