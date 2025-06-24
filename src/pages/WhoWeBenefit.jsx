import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { User, Users, Rocket, Globe, Building, Target, TrendingUp, Puzzle, Handshake, Lightbulb } from 'lucide-react'; // Lightbulb added back as it's used in this file for values.

import { motion } from 'framer-motion';

const WhoWeBenefit = () => {
  const particlesContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // CSS for animations and general styling that was previously in newsletter.css
  // Moved here to ensure no external file dependencies and resolve compilation issues.
  // Also adjusted colors for a black background theme.
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
      background-color: #000; /* Black background for these sections */
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

    /* Wave animations for the first and third sections */
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

    /* Gradient Blobs for first and third sections */
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

    /* Particles for first section */
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

    /* Light rays for first section */
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

    /* Animated shapes for second and fourth sections */
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
      background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%); /* Darker gradient for black background */
      z-index: 5;
    }

    /* Particle animation for mouse movement */
    .particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
    }

    /* Framer-motion entrance animations */
    @keyframes fade-in-up { /* Kept as a reference, actual motion uses variants */
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

  // Animation for the first section (similar to OurMethodology)
  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    const particleCount = 30;
    const particles = [];

    // Clear existing particles on re-render to prevent duplication
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-ep';

      // Random size between 4px and 12px
      const size = 4 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random opacity
      particle.style.opacity = `${0.1 + Math.random() * 0.3}`;

      // Random animation duration between 15s and 30s
      const duration = 15 + Math.random() * 15;
      particle.style.setProperty('--duration', `${duration}s`); // Set CSS variable for animation
      particle.style.animation = `float-ep ${duration}s infinite alternate ease-in-out`;

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 10}s`;

      // Random float direction
      const floatX = (Math.random() - 0.5) * 40;
      const floatY = (Math.random() - 0.5) * 40;
      particle.style.setProperty('--float-x', `${floatX}px`);
      particle.style.setProperty('--float-y', `${floatY}px`);

      container.appendChild(particle);
      particles.push(particle);
    }

    // Create light rays
    const rayCount = 8;
    for (let i = 0; i < rayCount; i++) {
      const ray = document.createElement('div');
      ray.className = 'light-ray-ep';

      // Random height between 100px and 300px
      const height = 100 + Math.random() * 200;
      ray.style.height = `${height}px`;

      // Random position
      ray.style.left = `${Math.random() * 100}%`;
      ray.style.top = `${Math.random() * 50}%`;

      // Random rotation
      ray.style.transform = `rotate(${Math.random() * 360}deg)`;

      // Random animation duration
      const duration = 20 + Math.random() * 20;
      ray.style.setProperty('--duration', `${duration}s`); // Set CSS variable for animation
      ray.style.animation = `ray-rotation-ep ${duration}s infinite linear`;

      // Random animation delay
      ray.style.animationDelay = `${Math.random() * 10}s`;

      container.appendChild(ray);
    }

    return () => {
      // Cleanup for particles and rays
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);

  // Animation for the second section (mouse interaction)
  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!currentSectionRef) return;

    const handleMouseMove = (e) => {
      if (!currentSectionRef) return;

      const { left, top, width, height } = currentSectionRef.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Only create particles if mouse is within the section
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        // Create a particle at mouse position
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 5px and 15px
        const size = 5 + Math.random() * 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Position at mouse cursor
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Set color with random opacity
        particle.style.background = `rgba(255, 209, 102, ${0.1 + Math.random() * 0.2})`;

        // Add to section
        currentSectionRef.appendChild(particle);

        // Animate and remove
        setTimeout(() => {
          particle.style.transition = 'all 1s ease-out';
          particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
          particle.style.opacity = '0';

          setTimeout(() => {
            if (currentSectionRef && currentSectionRef.contains(particle)) {
              currentSectionRef.removeChild(particle);
            }
          }, 1000);
        }, 10);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="flex flex-col w-full bg-black text-white font-['Inter']">
      {/* First Section - Who We Benefit */}
      <section className="animated-section-ep relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
          <div ref={particlesContainerRef} className="particles-container-ep"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            WHO WE BENEFIT
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Built for Founders at Every Stage of the Journey
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            We partner with visionary entrepreneurs across all stages of the startup lifecycle, providing tailored support that meets you exactly where you are.
          </motion.p>
        </div>
      </section>

      {/* Second Section - Our Founder Ecosystem */}
      <section ref={sectionRef} className="section bg-gray-900 text-white relative overflow-hidden min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* Animated shapes from Newsletter component */}
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
        <div className="animated-shape shape4"></div>
        <div className="gradient-overlay-new"></div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={fadeInUpVariants}
          >
            Our Founder Ecosystem
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            We partner with visionary entrepreneurs across all stages of the startup lifecycle, providing tailored support that meets you exactly where you are.
          </motion.p>
        </motion.div>

        <motion.div
          ref={carouselRef}
          className="relative z-10 w-full max-w-7xl mx-auto"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {/* Card 1 - Solo Entrepreneurs */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div variants={fadeInUpVariants}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                          <User className="h-6 w-6 text-[#FF9F1C]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Solo Entrepreneurs</h3>
                        <p className="text-white/80 mb-4">Visionary individuals with innovative ideas seeking co-founding partnership</p>
                        <p className="font-semibold mb-2 text-white">Perfect For:</p>
                        <p className="text-sm text-white/80 mb-4">Entrepreneurs with great ideas who need complementary expertise to bring their concepts to life.</p>
                        <p className="font-semibold mb-2 text-white">How We Help:</p>
                        <ul className="text-sm text-white/80 text-left mb-4 list-disc list-inside">
                          <li>Act as your experienced co-founder with strategic and operational expertise</li>
                          <li>Validate and refine your concept through proven frameworks</li>
                          <li>Provide access to our complete network and resource ecosystem</li>
                          <li>Handle operational execution while you focus on vision and strategy</li>
                        </ul>
                        <p className="font-semibold mb-2 text-white">Value:</p>
                        <p className="text-sm text-white/80">Transform your idea into reality with credible, experienced partnership that attracts talent and investment.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>

              {/* Card 2 - Co-Founding Teams */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div variants={fadeInUpVariants}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-[#FF9F1C]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Co-Founding Teams</h3>
                        <p className="text-white/80 mb-4">Existing teams needing specific expertise or strategic guidance</p>
                        <p className="font-semibold mb-2 text-white">Perfect For:</p>
                        <p className="text-sm text-white/80 mb-4">Founding teams with complementary skills who need additional bandwidth or specialized expertise.</p>
                        <p className="font-semibold mb-2 text-white">How We Help:</p>
                        <ul className="text-sm text-white/80 text-left mb-4 list-disc list-inside">
                          <li>Integrate seamlessly with your existing team dynamics</li>
                          <li>Fill critical gaps in product, marketing, or operational capabilities</li>
                          <li>Provide strategic oversight and experienced perspective</li>
                          <li>Accelerate execution through proven processes and methodologies</li>
                        </ul>
                        <p className="font-semibold mb-2 text-white">Value:</p>
                        <p className="text-sm text-white/80">Enhance your team's capabilities without disrupting chemistry while gaining access to institutional knowledge and networks.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>

              {/* Card 3 - Early-Stage Startups */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div variants={fadeInUpVariants}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                          <Rocket className="h-6 w-6 text-[#FF9F1C]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Early-Stage Startups</h3>
                        <p className="text-white/80 mb-4">Companies seeking product-market fit and sustainable growth</p>
                        <p className="font-semibold mb-2 text-white">Perfect For:</p>
                        <p className="text-sm text-white/80 mb-4">Startups with initial products looking to achieve traction and avoid common scaling pitfalls.</p>
                        <p className="font-semibold mb-2 text-white">How We Help:</p>
                        <ul className="text-sm text-white/80 text-left mb-4 list-disc list-inside">
                          <li>Optimize product offerings based on real market feedback</li>
                          <li>Implement scalable customer acquisition and retention strategies</li>
                          <li>Establish efficient operational processes and systems</li>
                          <li>Prepare for funding rounds with compelling investor presentations</li>
                        </ul>
                        <p className="font-semibold mb-2 text-white">Value:</p>
                        <p className="text-sm text-white/80">Accelerate your path to product-market fit while building sustainable growth foundations and avoiding costly mistakes.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>

              {/* Card 4 - Scaling Startups */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div variants={fadeInUpVariants}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                          <Globe className="h-6 w-6 text-[#FF9F1C]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Scaling Startups</h3>
                        <p className="text-white/80 mb-4">Growing companies ready for expansion and significant funding</p>
                        <p className="font-semibold mb-2 text-white">Perfect For:</p>
                        <p className="text-sm text-white/80 mb-4">Established startups preparing for market expansion, major funding rounds, or exit opportunities.</p>
                        <p className="font-semibold mb-2 text-white">How We Help:</p>
                        <ul className="text-sm text-white/80 text-left mb-4 list-disc list-inside">
                          <li>Develop comprehensive market expansion and growth strategies</li>
                          <li>Optimize operations for rapid, sustainable scaling</li>
                          <li>Prepare for larger funding rounds and strategic partnerships</li>
                          <li>Build scalable organizational structures and teams</li>
                        </ul>
                        <p className="font-semibold mb-2 text-white">Value:</p>
                        <p className="text-sm text-white/80">Navigate growth complexities with confidence while preparing for successful expansion, investment, or exit opportunities.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>

              {/* Card 5 - Corporate Innovators */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div variants={fadeInUpVariants}>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                          <Building className="h-6 w-6 text-[#FF9F1C]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Corporate Innovators</h3>
                        <p className="text-white/80 mb-4">Enterprise teams driving internal innovation and venture development</p>
                        <p className="font-semibold mb-2 text-white">Perfect For:</p>
                        <p className="text-sm text-white/80 mb-4">Corporate innovation teams seeking startup agility and proven venture-building expertise.</p>
                        <p className="font-semibold mb-2 text-white">How We Help:</p>
                        <ul className="text-sm text-white/80 text-left mb-4 list-disc list-inside">
                          <li>Bridge corporate resources with startup execution speed</li>
                          <li>Develop and validate new business models and ventures</li>
                          <li>Implement lean startup methodologies within corporate structures</li>
                          <li>Create innovation labs and intrapreneurship programs</li>
                        </ul>
                        <p className="font-semibold mb-2 text-white">Value:</p>
                        <p className="text-sm text-white/80">Combine corporate scale with startup agility to drive breakthrough innovation and new revenue streams.</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            </CarouselContent>
            <div className="block">
              <CarouselPrevious className="-left-4 md:-left-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="-right-4 md:-right-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </section>

      {/* Third Section - What We Look For */}
      <section className="animated-section-ep relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 text-white"
            variants={fadeInUpVariants}
          >
            What We Look For
          </motion.h2>

          <motion.div
            className="text-left max-w-3xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-semibold mb-6 text-white"
              variants={fadeInUpVariants}
            >
              Ideal Partners:
            </motion.h3>
            <ul className="space-y-6">
              <motion.li variants={fadeInUpVariants} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Target className="h-5 w-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Visionary Entrepreneurs</p>
                  <p className="text-white/80">With deep domain expertise or passionate commitment</p>
                </div>
              </motion.li>
              <motion.li variants={fadeInUpVariants} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="h-5 w-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Scalable Ideas</p>
                  <p className="text-white/80">With potential to create significant market impact</p>
                </div>
              </motion.li>
              <motion.li variants={fadeInUpVariants} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Puzzle className="h-5 w-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Problem Solvers</p>
                  <p className="text-white/80">Committed to building ventures that address meaningful challenges</p>
                </div>
              </motion.li>
              <motion.li variants={fadeInUpVariants} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Handshake className="h-5 w-5 text-[#FF9F1C]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Collaborative Mindset</p>
                  <p className="text-white/80">Open to true partnership and shared decision-making</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Fourth Section - Ready to Find Your Perfect Partnership? */}
      <section className="section bg-gray-900 text-white relative overflow-hidden min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24">
        {/* Animated shapes from Newsletter component */}
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
        <div className="animated-shape shape4"></div>
        <div className="gradient-overlay-new"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            variants={fadeInUpVariants}
          >
            Ready to Find Your Perfect Partnership?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            Whether you're a solo entrepreneur with a breakthrough idea or a scaling startup ready for global expansion, we provide the expertise, resources, and partnership model that accelerates your success.
          </motion.p>
          <motion.div variants={fadeInUpVariants} transition={{ delay: 0.4 }}>
            <Link to="/connect">
              <Button size="lg" className="bg-[#FF9F1C] text-white hover:bg-opacity-90 font-semibold px-8 py-6 text-lg rounded-full">
                Discover Your Partnership Model
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeBenefit;
