import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lightbulb, Target, Rocket, Globe, Users, Handshake, Heart, Sparkles, Compass } from "lucide-react";
import { motion } from 'framer-motion';

const About = () => {
  const ourValues = [
    {
      title: "Innovation Focus",
      description: "We constantly push boundaries to create solutions that transform industries and improve lives.",
      icon: <Lightbulb className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Founder-First Approach",
      description: "We prioritize the vision and needs of founders, providing tailored support for their unique journeys.",
      icon: <Target className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Execution Excellence",
      description: "We deliver results through disciplined processes, attention to detail, and unwavering commitment to quality.",
      icon: <Rocket className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Global Perspective",
      description: "We bring international insights and connections to help ventures succeed in diverse markets.",
      icon: <Globe className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Collaborative Spirit",
      description: "We believe in the power of partnership and teamwork to achieve extraordinary outcomes.",
      icon: <Users className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Integrity & Transparency",
      description: "We operate with honesty and openness in all our relationships and business dealings.",
      icon: <Heart className="h-6 w-6 text-[#FF9F1C]" />
    }
  ];

  const methodologySteps = [
    {
      title: "Validation",
      description: "We validate your idea through market research, user interviews, and competitive analysis to ensure product-market fit.",
      icon: <Target className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Concept Adaptation",
      description: "We refine your concept based on validation insights, creating a solid foundation for development.",
      icon: <Lightbulb className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Tech Development",
      description: "Our expert team builds your solution using the most appropriate technologies for your specific needs.",
      icon: <Sparkles className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Go-to-Market Execution",
      description: "We help you launch with impact through strategic marketing, sales enablement, and growth tactics.",
      icon: <Rocket className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Scaling",
      description: "We support your growth journey with operational excellence, funding strategies, and expansion planning.",
      icon: <Compass className="h-6 w-6 text-[#FF9F1C]" />
    }
  ];

  const heroSectionRef = useRef(null); // Ref for the main hero section
  const particlesContainerRef = useRef(null); // Ref for particles/rays in hero section

  // Inline CSS for animations and general styling
  const inlineStyles = `
    /* Global styling for body and root elements */
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #000; /* Ensure body is black */
      color: #fff; /* Default text color is white */
    }

    .animated-section-ep {
      position: relative;
      background-color: #000; /* Default background for these sections */
      overflow: hidden;
    }

    .background-animation-ep {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0; /* Ensure animations are behind content */
    }

    /* Wave animations */
    .wave-ep {
      position: absolute;
      background: rgba(255, 159, 28, 0.1); /* Orange tint */
      border-radius: 50%;
      opacity: 0;
      animation: wave-animation-ep 20s infinite ease-out;
    }

    .wave-ep:nth-child(1) {
      width: 150vw; height: 150vw;
      left: -25vw; top: -50vw;
      animation-delay: 0s;
    }
    .wave-ep:nth-child(2) {
      width: 120vw; height: 120vw;
      left: 30vw; top: 10vw;
      animation-delay: 5s;
    }
    .wave-ep:nth-child(3) {
      width: 180vw; height: 180vw;
      left: -50vw; top: -10vw;
      animation-delay: 10s;
    }

    @keyframes wave-animation-ep {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      50% {
        opacity: 0.2;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    /* Gradient Blobs */
    .gradient-blob-ep {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.4;
    }

    .blob1-ep {
      width: 250px; height: 250px;
      background: linear-gradient(135deg, #FF9F1C, #FFD166);
      top: 10%; left: 10%;
      animation: blob-float-ep 15s infinite alternate ease-in-out;
      animation-delay: 0s;
    }
    .blob2-ep {
      width: 300px; height: 300px;
      background: linear-gradient(135deg, #FF9F1C, #FFD166);
      bottom: 5%; right: 15%;
      animation: blob-float-ep 20s infinite alternate-reverse ease-in-out;
      animation-delay: 5s;
    }
    .blob3-ep {
      width: 200px; height: 200px;
      background: linear-gradient(135deg, #FF9F1C, #FFD166);
      top: 40%; right: 5%;
      animation: blob-float-ep 18s infinite alternate ease-in-out;
      animation-delay: 10s;
    }

    @keyframes blob-float-ep {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(calc(var(--float-x, 0) * 1px), calc(var(--float-y, 0) * 1px));
      }
      100% {
        transform: translate(0, 0);
      }
    }

    /* Particles */
    .particles-container-ep {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle-ep {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.5); /* White particles */
      border-radius: 50%;
      animation: float-ep var(--duration) infinite alternate ease-in-out;
    }

    @keyframes float-ep {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(var(--float-x), var(--float-y));
      }
    }

    /* Light rays */
    .light-ray-ep {
      position: absolute;
      background: linear-gradient(to bottom, rgba(255, 159, 28, 0.05), rgba(255, 159, 28, 0)); /* Soft orange rays */
      width: 2px;
      opacity: 0.6;
      transform-origin: center top;
      animation: ray-rotation-ep var(--duration) infinite linear;
    }

    @keyframes ray-rotation-ep {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Animated shapes for other animated sections */
    .animated-shape {
      position: absolute;
      background: rgba(255, 159, 28, 0.1); /* Soft orange for shapes */
      border-radius: 50%;
      opacity: 0;
      animation: shape-float 25s infinite ease-in-out alternate;
      filter: blur(30px);
    }

    .shape1 {
      width: 150px; height: 150px;
      top: 10%; left: 10%;
      animation-delay: 0s;
    }
    .shape2 {
      width: 200px; height: 200px;
      bottom: 5%; right: 20%;
      animation-delay: 5s;
    }
    .shape3 {
      width: 100px; height: 100px;
      top: 30%; right: 5%;
      animation-delay: 10s;
    }
    .shape4 {
      width: 180px; height: 180px;
      bottom: 15%; left: 5%;
      animation-delay: 15s;
    }

    @keyframes shape-float {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 0.4;
      }
      50% {
        transform: translate(20px, -20px) scale(1.1);
        opacity: 0.6;
      }
      100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.4;
      }
    }

    .gradient-overlay-new {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%);
      z-index: 5;
    }

    /* Mouse follow particle */
    .particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
    }

    /* Entrance animations for framer-motion */
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  useEffect(() => {
    // Inject the styles into the document head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = inlineStyles;
    document.head.appendChild(styleSheet);

    // Cleanup function to remove styles
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []); // Run only once on mount

  useEffect(() => {
    const currentHeroSectionRef = heroSectionRef.current;
    const currentParticlesContainerRef = particlesContainerRef.current;

    if (!currentHeroSectionRef || !currentParticlesContainerRef) return;

    // Particle Generation (for hero section only)
    const particleCount = 30;
    // Clear existing particles on re-render to prevent duplication
    currentParticlesContainerRef.innerHTML = '';
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-ep';
      const size = 4 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
      const duration = 15 + Math.random() * 15;
      particle.style.setProperty('--duration', `${duration}s`);
      particle.style.animation = `float-ep ${duration}s infinite alternate ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      const floatX = (Math.random() - 0.5) * 40;
      const floatY = (Math.random() - 0.5) * 40;
      particle.style.setProperty('--float-x', `${floatX}px`);
      particle.style.setProperty('--float-y', `${floatY}px`);
      currentParticlesContainerRef.appendChild(particle);
    }

    // Light Rays (for hero section only)
    const rayCount = 8;
    for (let i = 0; i < rayCount; i++) {
      const ray = document.createElement('div');
      ray.className = 'light-ray-ep';
      const height = 100 + Math.random() * 200;
      ray.style.height = `${height}px`;
      ray.style.left = `${Math.random() * 100}%`;
      ray.style.top = `${Math.random() * 50}%`;
      ray.style.transform = `rotate(${Math.random() * 360}deg)`;
      const duration = 20 + Math.random() * 20;
      ray.style.setProperty('--duration', `${duration}s`);
      ray.style.animation = `ray-rotation-ep ${duration}s infinite linear`;
      ray.style.animationDelay = `${Math.random() * 10}s`;
      currentParticlesContainerRef.appendChild(ray);
    }

    // Mouse Follow Blob (for hero section only)
    const sectionBounds = currentHeroSectionRef.getBoundingClientRect();
    const handleMouseMove = (e) => {
      const blob = document.createElement('div');
      blob.classList.add('particle');
      blob.style.position = 'absolute';
      blob.style.left = (e.clientX - sectionBounds.left) + 'px';
      blob.style.top = (e.clientY - sectionBounds.top) + 'px';
      blob.style.width = '15px';
      blob.style.height = '15px';
      blob.style.opacity = '0.7';
      blob.style.background = 'rgba(255, 255, 255, 0.7)'; // White particle on black background
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease'; // Apply transition
      blob.style.zIndex = '6';

      currentHeroSectionRef.appendChild(blob);

      // Trigger fade out and scale after a very short delay to allow initial render
      setTimeout(() => {
        blob.style.opacity = '0'; // Fade out
        blob.style.transform = 'scale(3)'; // Scale up
        // Remove the blob after its transition completes
        setTimeout(() => {
          blob.remove();
        }, 1000); // Matches transition duration
      }, 10); // Small delay
    };
    currentHeroSectionRef.addEventListener('mousemove', handleMouseMove);

    // Parallax for blobs and rays (for hero section only)
    const handleParallax = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      currentHeroSectionRef.querySelectorAll('.gradient-blob-ep').forEach((blob, index) => {
        const factor = (index + 1) * 0.1;
        blob.style.transform = `translate(${moveX * factor * 15}px, ${moveY * factor * 15}px) scale(${1 + factor * 0.05})`;
      });
      currentHeroSectionRef.querySelectorAll('.light-ray-ep').forEach((ray, index) => {
        const factor = (index + 1) * 0.05;
        ray.style.transform = `rotate(${moveX * factor * 10}deg) translate(${moveY * factor * 10}px, 0)`;
      });
    };
    currentHeroSectionRef.addEventListener('mousemove', handleParallax);

    return () => {
      currentHeroSectionRef.removeEventListener('mousemove', handleMouseMove);
      currentHeroSectionRef.removeEventListener('mousemove', handleParallax);
      // Clean up dynamically added particles on component unmount
      if (currentParticlesContainerRef) {
        while (currentParticlesContainerRef.firstChild) {
          currentParticlesContainerRef.removeChild(currentParticlesContainerRef.firstChild);
        }
      }
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-['Inter']">
      {/* First Section - Hero (Animated) */}
      <section ref={heroSectionRef} className="relative overflow-hidden animated-section-ep bg-black flex flex-col items-center justify-center" style={{ minHeight: '100vh', paddingTop: 0, paddingBottom: 0 }}>
        {/* Background animation elements (using -ep classes) */}
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>

          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <div className="particles-container-ep" ref={particlesContainerRef}></div>

        {/* Hero Content - Centered */}
        <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            About E-Turn
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Building the future of entrepreneurship in MENA, one venture at a time.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Link to="/connect">
              <Button size="lg" className="bg-[#FF9F1C] text-white hover:bg-yellow-800 font-semibold px-8 py-6 text-lg rounded-full cursor-pointer">
                Partner With Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Our Story (Non-Animated) */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-black">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Story
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUpVariants} className="bg-gradient-to-br from-stone-900 via-stone-900 to-orange-900 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <p className="mb-4">
                Founded in 2023, E-Turn emerged from a vision to transform how ventures are built in the MENA region. Our founders, with decades of combined experience in entrepreneurship, technology, and venture capital, recognized a critical gap: the need for a hands-on venture studio that truly co-creates with founders.
              </p>
              <p>
                Unlike traditional incubators or accelerators, we don't just advise—we build alongside you. We contribute technical expertise, business acumen, and regional insights while sharing both risk and reward. This partnership model has proven to dramatically increase success rates for early-stage ventures.
              </p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="bg-gradient-to-br from-stone-800 via-stone-700 to-orange-900 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
              <p className="mb-4">
                Our name, E-Turn, represents the pivotal moment when an idea transforms into a viable business—the entrepreneurial turn that changes trajectories and creates impact. We exist to make these turns more successful, more strategic, and more sustainable.
              </p>
              <p>
                Today, we're proud to be working with visionary founders across Egypt, UAE, and Saudi Arabia, building ventures that address meaningful challenges and create significant value. Our portfolio spans fintech, healthtech, edtech, and sustainability solutions—all united by their potential to transform industries and improve lives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Third Section - Our Vision (Animated) */}
      <section className="animated-section-ep text-white relative overflow-hidden min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-black">
        {/* Animated shapes */}
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl italic text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            "To be the premier venture studio in MENA, known for co-creating transformative companies that define the future of their industries while generating exceptional returns for all stakeholders."
          </motion.p>
        </div>
      </section>

      {/* Fourth Section - Our Values (Non-Animated) */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-gray-900">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {ourValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                      <p className="text-white/80">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fifth Section - Our Methodology (Animated) */}
      <section className="animated-section-ep relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Methodology
          </motion.h2>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} /* Adjusted amount for better mobile visibility */
          >
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent className="-ml-4"> {/* Keep negative margin for carousel's internal spacing */}
                {methodologySteps.map((step, index) => (
                  <CarouselItem key={index} className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"> {/* Added basis-full for mobile */}
                    <motion.div variants={fadeInUpVariants}>
                      <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                              {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                            <p className="text-white/80">{step.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="block">
                <CarouselPrevious className="-left-4 md:-left-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
                <CarouselNext className="-right-4 md:-right-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Sixth Section - Our Presence (Non-Animated) */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-gray-900">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Presence
          </motion.h2>

          <motion.p
            className="text-xl text-center text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            We maintain a strategic presence in MENA's key innovation hubs, allowing us to connect founders with the right resources, partners, and opportunities across the region.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUpVariants}>
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white text-center">Egypt</h3>
                  <p className="text-white/80 mb-4 text-center">Our Cairo office serves as our engineering and product development hub, leveraging Egypt's exceptional tech talent.</p>
                  <div className="h-[200px] w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6730221120435!2d31.33582!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMjAnMDkuMCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpVariants} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white text-center">UAE</h3>
                  <p className="text-white/80 mb-4 text-center">Our Dubai presence connects us to global investors and partners, facilitating international expansion for our ventures.</p>
                  <div className="h-[200px] w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785070651!2d55.27218!3d25.19743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjciTiA1NcKwMTYnMTkuOCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpVariants} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white text-center">KSA</h3>
                  <p className="text-white/80 mb-4 text-center">Our Riyadh office focuses on strategic partnerships with Saudi enterprises and access to the kingdom's rapidly evolving startup ecosystem.</p>
                  <div className="h-[200px] w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4402883838!2d46.67246!3d24.71326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ3LjciTiA0NsKwNDAnMjAuOSJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seventh Section - Call to Action (Animated) */}
      <section className="animated-section-ep text-white relative overflow-hidden min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-black">
        {/* Animated shapes */}
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Whether you're a visionary entrepreneur with a breakthrough idea or an investor looking for high-potential ventures, we'd love to connect with you.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/connect">
              <Button size="lg" className="bg-[#FF9F1C] text-white hover:bg-yellow-800 font-semibold px-8 py-6 text-lg rounded-full cursor-pointer" >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
