import React, { useRef, useEffect } from 'react';
import {
  Rocket,
  Handshake,
  Wrench,
  Shield,
  Users,
  Building2,
  Globe,
  DollarSign,
  BarChart,
  FileText,
  RefreshCw,
  Zap,
  Lightbulb,
  FileChartColumn,
  Laptop,
  Blend, // Not used but kept for completeness based on original import
  ChartColumnBig, // Not used but kept for completeness based on original import
  Banknote,
  Layers,
  ShieldCheck,
  Target,
  Infinity,
  User // Not used but kept for completeness based on original import
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link import

export default function OfferingPage() {
  const heroRef = useRef(null);
  const particlesContainerRef = useRef(null); // Ref specifically for hero section particles/rays

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
    const currentHeroRef = heroRef.current;
    const currentParticlesContainerRef = particlesContainerRef.current;

    // Only apply particles/rays/mouse effects if the heroRef exists
    if (!currentHeroRef || !currentParticlesContainerRef) return;

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
    let timeoutId;
    const heroBounds = currentHeroRef.getBoundingClientRect();
    const handleMouseMove = (e) => {
      clearTimeout(timeoutId);
      const blob = document.createElement('div');
      blob.classList.add('particle');
      blob.style.position = 'absolute';
      blob.style.left = (e.clientX - heroBounds.left) + 'px';
      blob.style.top = (e.clientY - heroBounds.top) + 'px';
      blob.style.width = '15px';
      blob.style.height = '15px';
      blob.style.opacity = '0.7';
      blob.style.background = 'rgba(255, 255, 255, 0.7)'; // White particle on black background
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease';
      blob.style.zIndex = '6';

      currentHeroRef.appendChild(blob);

      setTimeout(() => {
        blob.style.opacity = '0';
        blob.style.transform = 'scale(3)';
      }, 10);

      timeoutId = window.setTimeout(() => {
        blob.remove();
      }, 1000);
    };
    currentHeroRef.addEventListener('mousemove', handleMouseMove);

    // Parallax for blobs and rays (for hero section only)
    const handleParallax = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      currentHeroRef.querySelectorAll('.gradient-blob-ep').forEach((blob, index) => {
        const factor = (index + 1) * 0.1;
        blob.style.transform = `translate(${moveX * factor * 15}px, ${moveY * factor * 15}px) scale(${1 + factor * 0.05})`;
      });
      currentHeroRef.querySelectorAll('.light-ray-ep').forEach((ray, index) => {
        const factor = (index + 1) * 0.05;
        ray.style.transform = `rotate(${moveX * factor * 10}deg) translate(${moveY * factor * 10}px, 0)`;
      });
    };
    currentHeroRef.addEventListener('mousemove', handleParallax);

    return () => {
      currentHeroRef.removeEventListener('mousemove', handleMouseMove);
      currentHeroRef.removeEventListener('mousemove', handleParallax);
      clearTimeout(timeoutId);
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
    <div className="min-h-screen bg-black text-white font-['Inter']">
      {/* Hero Section - Animated */}
      <section ref={heroRef} className="animated-section-ep bg-black flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 text-center px-3 sm:px-4" style={{ minHeight: '100vh' }}>
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
          <div className="particles-container-ep" ref={particlesContainerRef}></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            Our Offering
          </motion.h2>
          <motion.h2
            className="text-lg sm:text-xl max-w-2xl mx-auto text-white/80"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Comprehensive Venture Building Tailored to Your Success
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto text-center mt-4 sm:mt-6"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 border border-[#FF9F1C] rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm text-white/90">
              e-turn provides everything you need to transform ideas into thriving ventures. Our integrated approach combines strategic services, hands-on execution, and flexible partnership models to meet you exactly where you are and accelerate your path to success. Whether you're an entrepreneur with a concept, a founder with a validated idea, or a scaling startup ready for growth, we deliver the expertise and resources to build, launch, and scale effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid - Non-Animated */}
      <section className="py-10 sm:py-14 md:py-20 bg-gray-900">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">What We Provide</h2>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-3 sm:px-4 md:px-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9F1C]" />,
              title: "Comprehensive Venture Building",
              desc: "End-to-End Startup Development: We handle every aspect of venture creation and growth, from initial concept validation to market-ready product launch and scaling operations.",
              points: [
                "Market assessment & validation",
                "Business model development and optimization",
                "Product development and technical architecture",
                "Go-to-market strategy and execution",
                "Operational scaling and process optimization",
                "Team building and organizational development"
              ],
              footer:
                "Value Delivered: Complete venture development with reduced risk, faster time-to-market, and higher probability of success through proven methodologies."
            },
            {
              icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9F1C]" />,
              title: "Strategic Advisory & Consultancy",
              desc: "Your Co-Founding Strategic Partner: Bespoke strategic guidance tailored to your market, stage, and ambitions. We act as your co-founder, not just your advisor, providing hands-on support and decision-making partnership.",
              points: [
                "Competitive analysis and market positioning",
                "Financial modeling and unit economics development",
                "Investment strategy and fundraising preparation",
                "Growth planning and scaling roadmaps",
                "Exit strategy development and execution planning",
                "Strategic partnership facilitation"
              ],
              footer:
                "Value Delivered: Expert guidance that accelerates decision-making, reduces costly mistakes, and positions your venture for sustainable growth and successful exits."
            }
          ].map(({ icon, title, desc, points, footer }, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-md transition w-full md:w-[48%] max-w-xl mb-4 sm:mb-0 text-white border border-white/20"
              variants={fadeInUpVariants}
            >
              <div className="mb-2 sm:mb-4">{icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
              {desc && <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">{desc}</p>}
              <ul className="text-white/80 list-disc pl-4 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                {points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-white">{footer}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* On-Demand Expert Services - Animated */}
      <section className="animated-section-ep text-white py-10 sm:py-14 md:py-20 bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>
        <div className="relative z-10">
          <motion.div
            className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 space-y-6 sm:space-y-8 md:space-y-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 flex items-center">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF9F1C] mr-1 sm:mr-2" />
                <span>On-Demand Expert Services</span>
              </h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm max-w-3xl text-white/80">Access Specialized Expertise When You Need It – Tap into our network of vetted specialists across all critical business functions. Get expert support without the overhead of full-time hires.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInUpVariants} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold mb-1 flex items-center text-white">
                  <Laptop className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF9F1C] mr-1 sm:mr-2" />
                  <span>Product & Technology</span>
                </h4>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white/80">
                  <li>User experience research and design optimization</li>
                  <li>Technical architecture and scalable development</li>
                  <li>Quality assurance and comprehensive testing</li>
                  <li>DevOps and infrastructure management</li>
                  <li>Security and compliance implementation</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUpVariants} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold mb-1 flex items-center text-white">
                  <FileChartColumn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF9F1C] mr-1 sm:mr-2" />
                  <span>Marketing & Growth</span>
                </h4>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white/80">
                  <li>Brand strategy and identity development</li>
                  <li>Digital marketing and customer acquisition</li>
                  <li>Content creation and thought leadership</li>
                  <li>SEO optimization and performance marketing</li>
                  <li>Analytics and conversion optimization</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUpVariants} className="sm:col-span-2 md:col-span-1 bg-white/10 p-4 rounded-lg border border-white/20">
                <h4 className="font-bold mb-1 flex items-center text-white">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF9F1C] mr-1 sm:mr-2" />
                  <span>Business Operations</span>
                </h4>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white/80">
                  <li>Process design and workflow optimization</li>
                  <li>Team building and talent acquisition</li>
                  <li>Financial management and reporting systems</li>
                  <li>Legal compliance and contract management</li>
                  <li>Customer success and retention programs</li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.p variants={fadeInUpVariants} className="mt-2 sm:mt-3 italic text-white text-xs sm:text-sm">Value Delivered: Access to top-tier expertise without long-term commitments, allowing you to scale your capabilities efficiently and cost-effectively.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* IP Protection - Non-Animated */}
      <section className="py-10 sm:py-14 md:py-20 bg-gray-900">
        <motion.div
          className="max-w-6xl mx-auto flex justify-center px-3 sm:px-4 md:px-6"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-md transition w-full max-w-xl text-white border border-white/20">
            <div className="mb-2 sm:mb-4">
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#FF9F1C]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Intellectual Property Protection</h3>
            <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">
              Securing Your Competitive Advantage: Comprehensive IP advisory services to protect your innovations and build strategic value through intellectual property portfolios.
            </p>
            <ul className="text-white/80 list-disc pl-4 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
              {[
                "IP Strategy Development: Portfolio strategy and competitive landscape analysis",
                "Patent Services: Patentability assessment, filing, and portfolio management",
                "Trademark Protection: Brand asset security across multiple markets",
                "Copyright & Trade Secrets: Comprehensive protection frameworks for proprietary information"
              ].map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-white">
              Value Delivered: Secured competitive positioning, enhanced company valuation, and protection of your most valuable innovations from concept to exit.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How We Partner (Header) - Non-Animated (Simple background) */}
      <section className="bg-black py-8">
        <motion.div
          className="max-w-6xl mx-auto flex justify-center px-3 sm:px-4 md:px-6"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-t-lg sm:rounded-t-xl shadow hover:shadow-md transition w-full max-w-xl text-center text-white backdrop-blur border border-white/20">
            <h1 className="text-lg sm:text-xl font-bold">How We Partner</h1>
            <h2 className="text-lg sm:text-xl font-bold">Partnership Approaches</h2>
            <h3 className="text-sm sm:text-base mt-1">Choose the Model That Fits Your Journey</h3>
          </div>
        </motion.div>
      </section>

      {/* Partnership Models - Alternating Animation */}
      {[
        {
          title: "Co-Creation Model",
          icon: <Handshake className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FFD166]" />,
          paragraph: "For Entrepreneurs with Domain Expertise Seeking Concepts: We jointly identify market opportunities and co-create ventures from the ground up, combining your expertise with our operational excellence. What's Included:",
          desc: [
            "Collaborative opportunity identification and validation",
            "Joint concept development and market testing",
            "Shared decision-making and strategic planning",
            "Integrated team formation and role definitionTechnical expertise",
            "Aligned success metrics and milestone tracking"
          ],
          footer: "Best For: Industry experts, experienced professionals, and domain specialists ready to build their next venture with proven co-founding support.",
          sectionBg: "bg-gray-900" // Non-animated background
        },
        {
          title: "Builder Model",
          icon: <Rocket className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#FFD166]" />,
          paragraph: "For Founders with Validated Ideas: We provide comprehensive resources to build, launch, and scale your vision, acting as your ultimate co-founding partner throughout the entire journey. What's Included:",
          desc: [
            "Full operational support and resource allocation",
            "End-to-end execution across all business functions",
            "Access to our complete network and ecosystem",
            "Strategic guidance and hands-on mentorship",
            "Scalable systems and process implementation"
          ],
          footer:
            "Best For: Founders with validated concepts who need comprehensive support, resources, and expertise to build and scale effectively.",
          sectionBg: "bg-black" // Animated background
        },
        {
          title: "Accelerator Model",
          icon: <Zap className="w-16 h-16 text-[#FFD166]" />,
          paragraph: "For Early-Stage Startups with MVP: We supercharge your existing momentum with strategic guidance, technical resources, and market access to accelerate growth and optimization. What's Included:",
          desc: [
            "Growth optimization and scaling strategies",
            "Market expansion planning and execution",
            "Investment preparation and investor connections",
            "Operational efficiency improvements",
            "Strategic partnership facilitation"
          ],
          footer:
            "Best For: Early-stage startups with working products seeking to accelerate growth, optimize operations, and prepare for significant scaling or investment rounds.",
          sectionBg: "bg-gray-900" // Non-animated background
        }
      ].map(({ title, icon, paragraph, desc, footer, sectionBg }, i) => (
        <section
          key={i}
          className={`${i % 2 !== 0 ? 'animated-section-ep' : ''} ${sectionBg} text-white py-8 sm:py-12 md:py-16`}
        >
          {/* Only render background animations if it's an animated section (odd index for this alternating pattern) */}
          {i % 2 !== 0 && (
            <div className="background-animation-ep">
              <div className="wave-ep"></div>
              <div className="wave-ep"></div>
              <div className="wave-ep"></div>
              <div className="gradient-blob-ep blob1-ep"></div>
              <div className="gradient-blob-ep blob2-ep"></div>
              <div className="gradient-blob-ep blob3-ep"></div>
            </div>
          )}
          <motion.div
            className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-10 px-3 sm:px-4 md:px-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUpVariants}>{icon}</motion.div>
            <div className="text-center md:text-left">
              <motion.h3 variants={fadeInUpVariants} className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{title}</motion.h3>
              {paragraph && <motion.p variants={fadeInUpVariants} className="text-xs sm:text-sm mb-2 sm:mb-3 max-w-lg text-white/80">{paragraph}</motion.p>}
              <motion.ul variants={fadeInUpVariants} className="list-disc pl-4 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-white/80">
                {desc.map((d, j) => <li key={j}>{d}</li>)}
              </motion.ul>
              {footer && <motion.p variants={fadeInUpVariants} className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-white">{footer}</motion.p>}
            </div>
          </motion.div>
        </section>
      ))}

      {/* Flexible Engagement Models - Non-Animated */}
      <section className="py-10 sm:py-14 md:py-20 bg-gray-900">
        <motion.h3
          className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-white px-3 sm:px-4"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Flexible Engagement Models
        </motion.h3>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF9F1C]" />,
              title: "Equity-Based Partnerships",
              desc: "Joint venture development with shared ownership, collaborative decision-making, and aligned long-term incentives throughout the venture lifecycle."
            },
            {
              icon: <BarChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF9F1C]" />,
              title: "Revenue Sharing",
              desc: "Performance-based partnerships where success is shared based on actual results and value creation, ensuring mutual commitment to outcomes."
            },
            {
              icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF9F1C]" />,
              title: "Fixed-Fee Projects",
              desc: "Project-based engagements with defined deliverables, timelines, and scope—perfect for specific initiatives or short-term objectives."
            },
            {
              icon: <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF9F1C]" />,
              title: "Hybrid Arrangements",
              desc: "Customized combinations of equity, revenue sharing, and fixed fees tailored to your specific situation, stage, and requirements."
            }
          ].map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 border border-white/20 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow text-center text-white"
              variants={fadeInUpVariants}
            >
              <div className="mb-1 sm:mb-2 flex justify-center">{icon}</div>
              <h4 className="font-bold text-base sm:text-lg mt-1 sm:mt-2">{title}</h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Investment & Capital Section - Animated */}
      <section className="animated-section-ep py-12 sm:py-16 md:py-20 bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>
        <div className="relative z-10">
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={fadeInUpVariants} className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-white">Investment & Capital</motion.h2>
            <motion.div variants={fadeInUpVariants} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF9F1C] mb-2 flex items-center justify-center gap-1 sm:gap-2">
                <Banknote className="w-5 h-5 sm:w-6 sm:h-6" />
                Strategic Investment Offering
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                We selectively invest in high-potential ventures that align with our studio model, providing both strategic capital and comprehensive operational support to accelerate growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow mb-8 sm:mb-12 text-white border border-white/20">
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Our Investment Approach</h4>
              <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
                Unlike traditional investors, we combine capital with hands-on operational partnership. When we invest, you gain not just funding but a committed co-founding partner dedicated to your success.
              </p>

              <h5 className="font-bold mt-4 sm:mt-6 mb-1 sm:mb-2">Investment Criteria:</h5>
              <ul className="list-disc list-inside text-xs sm:text-sm text-white/80 space-y-0.5 sm:space-y-1">
                <li>Strong market opportunity with significant growth potential</li>
                <li>Experienced founding team with proven domain expertise</li>
                <li>Scalable business model with clear monetization path</li>
                <li>Strategic alignment with e-turn's operational capabilities</li>
                <li>Commitment to long-term partnership and collaborative growth</li>
              </ul>

              <h5 className="font-bold mt-4 sm:mt-6 mb-1 sm:mb-2">What You Get Beyond Capital:</h5>
              <ul className="list-disc list-inside text-xs sm:text-sm text-white/80 space-y-0.5 sm:space-y-1">
                <li>Full access to our operational capabilities and resources</li>
                <li>Hands-on support from our experienced founding team</li>
                <li>Network access to investors, partners, and industry experts</li>
                <li>Ongoing strategic guidance through scaling and exit phases</li>
                <li>Integrated support across all critical business functions</li>
              </ul>
            </motion.div>

            <motion.h3 variants={fadeInUpVariants} className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">The e-turn Advantage</motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-[#FF9F1C]" />,
                  title: "Integrated Approach",
                  desc: "Seamless support across every function under one roof—eliminating startup inefficiencies."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-[#FF9F1C]" />,
                  title: "Proven Expertise",
                  desc: "Guidance from real entrepreneurs who’ve built and scaled ventures firsthand."
                },
                {
                  icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-[#FF9F1C]" />,
                  title: "Flexible Engagement",
                  desc: "We adapt to your needs—co-founding or standalone services, based on stage and goals."
                },
                {
                  icon: <Infinity className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-[#FF9F1C]" />,
                  title: "Long-term Commitment",
                  desc: "We’re in it for the long haul—with you through growth, scale, and exit."
                }
              ].map(({ icon, title, desc }, i) => (
                <motion.div key={i} className="bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow text-white border border-white/20" variants={fadeInUpVariants}>
                  <div className="mb-1 sm:mb-2">{icon}</div>
                  <h4 className="font-bold text-base sm:text-lg">{title}</h4>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5 sm:mt-1">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Non-Animated */}
      <section className="bg-black py-12 sm:py-16 md:py-24 text-white text-center relative overflow-hidden">
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUpVariants} className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-12">Next Steps</motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                step: "1",
                title: "Assess Your Needs",
                desc: "Identify the services and engagement model that align with your startup's current stage and future vision.",
              },
              {
                step: "2",
                title: "Book a Consultation",
                desc: "Connect with our team to discuss your goals and explore the best-fit strategy for your venture.",
              },
              {
                step: "3",
                title: "Design the Partnership",
                desc: "Co-create a tailored collaboration model—whether equity, revenue sharing, or hybrid—to suit your journey.",
              },
              {
                step: "4",
                title: "Start Building",
                desc: "Hit the ground running with full-stack support to bring your product, brand, and growth plan to life.",
              }
            ].map(({ step, title, desc }, idx) => (
              <motion.div key={idx} className="bg-white/10 text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow flex flex-col gap-2 sm:gap-3 border border-white/20" variants={fadeInUpVariants}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#FF9F1C] text-white text-base sm:text-lg font-bold border-2 border-white">
                  {step}
                </div>
                <h3 className="font-bold text-base sm:text-lg">{title}</h3>
                <p className="text-xs sm:text-sm text-white/80">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUpVariants} className="mt-8 sm:mt-10 md:mt-12">
            <Link to="/connect">
              <Button size="lg" className="bg-[#FF9F1C] text-white hover:bg-opacity-90 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                Start Your Partnership Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
