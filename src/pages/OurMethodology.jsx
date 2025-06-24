import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Search, Rocket, BarChart2, Zap, Target, Link2, ShieldCheck, Repeat, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const methodologyPhases = [
  {
    icon: <Search size={40} className="text-[#FF9F1C]" />, // Adjusted icon color for black background
    title: "Phase 1: Rapid Validation",
    subtitle: "Turn Ideas Into Market-Ready Opportunities",
    value: "De-risk your venture by ensuring market demand exists before major investment. We compress months of market research into intensive sprints using data-driven frameworks.",
    approach: [
      "Market Intelligence & Opportunity Assessment",
      "Concept Refinement & Business Model Design",
      "Real-World Validation & Testing"
    ],
    details: [
      "We conduct comprehensive market analysis, identify customer pain points, and evaluate competitive landscapes to uncover genuine opportunities with strong growth potential.",
      "Through structured ideation workshops and business model development, we transform initial concepts into viable business propositions with clear value propositions and revenue models.",
      "We validate assumptions through direct customer engagement, solution testing, and market demand assessment, ensuring your concept resonates with actual market needs."
    ],
    outcomes: [
      "Validated problem-solution fit",
      "Defined target market",
      "Proven demand signals",
      "Optimized business model"
    ]
  },
  {
    icon: <Rocket size={40} className="text-[#FF9F1C]" />, // Adjusted icon color for black background
    title: "Phase 2: MVP Development",
    subtitle: "Build Products That Scale From Day One",
    value: "Get a market-ready product designed for growth. Our integrated teams build scalable products in record time, focusing on core functionality that delivers immediate value.",
    approach: [
      "User-Centric Design & Prototyping",
      "Scalable Technical Architecture",
      "Data-Driven Optimization"
    ],
    details: [
      "We create intuitive user experiences through strategic design thinking, rapid prototyping, and continuous user feedback integration to ensure optimal product-market alignment.",
      "Our development approach focuses on building robust, scalable systems using agile methodologies, ensuring your product can handle growth from day one while maintaining performance and security.",
      "We implement analytics and monitoring systems to track user behavior, enabling continuous product improvement and feature prioritization based on real usage data."
    ],
    outcomes: [
      "Market-ready MVP",
      "Scalable architecture",
      "Optimized user experience",
      "Validated product-market fit"
    ]
  },
  {
    icon: <BarChart2 size={40} className="text-[#FF9F1C]" />, // Adjusted icon color for black background
    title: "Phase 3: Market Entry",
    subtitle: "Launch With Impact and Precision",
    value: "Generate early traction and validate your go-to-market approach. We leverage proven playbooks for customer acquisition and market penetration to create momentum.",
    approach: [
      "Strategic Market Positioning & Campaign Execution",
      "Customer Acquisition & Growth Engineering",
      "Performance Optimization & Market Feedback Integration"
    ],
    details: [
      "We orchestrate comprehensive launch campaigns that position your venture effectively in the market, combining strategic messaging with multi-channel marketing execution.",
      "Our proven acquisition strategies focus on sustainable growth through optimized marketing channels, strategic partnerships, and community building initiatives.",
      "We continuously refine your market approach based on real performance data, optimizing conversion rates and customer acquisition costs while expanding market reach."
    ],
    outcomes: [
      "Successful market launch",
      "Sustainable customer acquisition",
      "Strong brand recognition",
      "Scalable growth systems"
    ]
  },
  {
    icon: <Zap size={40} className="text-[#FF9F1C]" />, // Adjusted icon color for black background
    title: "Phase 4: Optimization & Scale",
    subtitle: "Grow Sustainably and Strategically",
    value: "Ensure sustainable growth and investment readiness. We refine your product and growth strategy using real-world data, preparing for expansion and funding rounds.",
    approach: [
      "Operational Excellence & Process Optimization",
      "Investment Preparation & Strategic Positioning",
      "Strategic Growth & Partnership Development"
    ],
    details: [
      "We implement scalable systems, standardize processes, and optimize team structures to support rapid growth while maintaining quality and efficiency.",
      "Our comprehensive approach to investment readiness includes financial model refinement, pitch development, and strategic positioning to attract the right investors and partnerships.",
      "We facilitate expansion through strategic relationships, market diversification, and partnership opportunities that accelerate growth and enhance competitive positioning."
    ],
    outcomes: [
      "Sustainable growth systems",
      "Investment readiness",
      "Strategic partnerships",
      "Market expansion capability"
    ]
  }
];

const methodologyAdvantages = [
  { icon: <Zap size={32} className="text-[#FF9F1C]" />, title: "Accelerated Timeline", desc: "Compress traditional startup timelines by up to 60% through systematic validation and continuous optimization at every stage." },
  { icon: <Target size={32} className="text-[#FF9F1C]" />, title: "Risk Mitigation", desc: "Built-in validation mechanisms ensure market demand before major investment, dramatically reducing venture risk." },
  { icon: <Link2 size={32} className="text-[#FF9F1C]" />, title: "Seamless Integration", desc: "End-to-end execution eliminates coordination overhead, providing unified support across all critical functions." },
  { icon: <ThumbsUp size={32} className="text-[#FF9F1C]" />, title: "Proven Excellence", desc: "Battle-tested framework based on real entrepreneurial experience and successful venture launches." },
  { icon: <Repeat size={32} className="text-[#FF9F1C]" />, title: "Adaptive Implementation", desc: "Flexible methodology that adapts to your venture's unique requirements and market dynamics." }
];

const OurMethodology = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

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

    /* Animated shapes for sections alternating with black */
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

    /* Framer-motion entrance animations for consistency */
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
    const heroElement = heroRef.current;
    if (!heroElement) return;

    let timeoutId;

    const adjustedMouseMove = (e) => {
      clearTimeout(timeoutId);
      const heroBounds = heroElement.getBoundingClientRect();
      const blob = document.createElement('div');
      blob.classList.add('particle');
      blob.style.position = 'absolute';
      blob.style.left = (e.clientX - heroBounds.left) + 'px';
      blob.style.top = (e.clientY - heroBounds.top) + 'px';
      blob.style.width = '15px';
      blob.style.height = '15px';
      blob.style.opacity = '0.7'; // Initial opacity
      blob.style.background = 'rgba(255, 255, 255, 0.7)'; // White particle on black background
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease'; // Apply transition
      blob.style.zIndex = '5';
      heroElement.appendChild(blob);

      // Trigger fade out and scale after a very short delay to allow initial render
      setTimeout(() => {
        blob.style.opacity = '0'; // Fade out
        blob.style.transform = 'scale(3)'; // Scale up
      }, 10); // Small delay

      // Remove the blob after the transition completes
      timeoutId = window.setTimeout(() => {
        blob.remove();
      }, 1000); // Matches transition duration
    };
    heroElement.addEventListener('mousemove', adjustedMouseMove);
    return () => {
      heroElement.removeEventListener('mousemove', adjustedMouseMove);
      clearTimeout(timeoutId);
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
    <div className="min-h-screen w-full bg-black text-white font-['Inter']"> {/* Main background is black */}
      {/* Hero Section - Animated */}
      <section ref={heroRef} className="animated-section-ep text-white text-center font-semibold relative pt-16 md:pt-24 min-h-[100vh] mt-0 pb-8 md:pb-12 bg-black py-20">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
          {/* Particles and Light Rays are handled by the useEffect for heroRef */}
        </div>
        <motion.div
          className="relative z-10"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible" // Animate on mount for hero section
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 tracking-tight"
            variants={fadeInUpVariants}
          >
            OUR METHODOLOGY
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-xl md:text-3xl font-semibold mb-3 md:mb-4 opacity-90"
            variants={fadeInUpVariants}
          >
            From Concept to Success: The FastTrack™ Blueprint
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto bg-white/10 rounded-xl p-2 sm:p-3 md:p-4 mb-3 md:mb-6 shadow-lg"
            variants={fadeInUpVariants}
          >
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-2 text-white">We fast-track startup growth through a structured, proven approach designed to accelerate your journey from idea to scale—all under one roof.</h3>
          </motion.div>
          <motion.p
            className="max-w-3xl mx-auto text-xs sm:text-sm md:text-xl font-medium mb-3 md:mb-6 text-white/90"
            variants={fadeInUpVariants}
          >
            Traditional startup building is slow, fragmented, and risky. Our FastTrack™ methodology changes that. We've distilled years of entrepreneurial experience into a systematic approach that compresses timelines, reduces risk, and maximizes your chances of success. Every phase builds momentum while validating assumptions, ensuring you're always moving in the right direction. This methodology, combined with our flexible partnership models, adapts to each venture's unique needs and stage of development.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mt-3 md:mt-8"
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeInUpVariants} className="bg-white/20 rounded-lg p-2 md:p-4 flex-1">
              <h4 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-white">Strategic Assessment</h4>
              <p className="text-xs sm:text-sm md:text-base text-white/80">Evaluate your current position and methodology entry point</p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="bg-white/20 rounded-lg p-2 md:p-4 flex-1">
              <h4 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-white">Customized Approach</h4>
              <p className="text-xs sm:text-sm md:text-base text-white/80">Adapt our framework to your specific needs and market</p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="bg-white/20 rounded-lg p-2 md:p-4 flex-1">
              <h4 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-white">Accelerated Execution</h4>
              <p className="text-xs sm:text-sm md:text-base text-white/80">Begin your fast-tracked journey with full expert support</p>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="bg-white/20 rounded-lg p-2 md:p-4 flex-1">
              <h4 className="text-sm sm:text-base md:text-xl font-bold mb-1 md:mb-2 text-white">Validated Success</h4>
              <p className="text-xs sm:text-sm md:text-base text-white/80">Achieve market success faster than traditional approaches</p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUpVariants}>
            <Button className="mt-3 md:mt-8 px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg font-bold bg-[#FF9F1C] text-white hover:bg-opacity-90 shadow-lg" onClick={() => navigate("/connect")}>Start Your FastTrack Journey</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FastTrack™ Process Section - Non-Animated */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gray-900">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[#FF9F1C]"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          The FastTrack™ Process
        </motion.h2>
        <motion.div
          className="space-y-10 sm:space-y-12 md:space-y-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {methodologyPhases.map((phase, idx) => (
            <motion.div
              key={phase.title}
              className={`rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-500 bg-white/10 text-white relative overflow-hidden border border-white/20`}
              variants={fadeInUpVariants}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <motion.span variants={fadeInUpVariants} className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-0">{phase.icon}</motion.span>
                <motion.h3 variants={fadeInUpVariants} className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{phase.title}</motion.h3>
              </div>
              <motion.h4 variants={fadeInUpVariants} className="text-lg sm:text-xl font-semibold mb-2 text-orange-400">{phase.subtitle}</motion.h4>
              <motion.p variants={fadeInUpVariants} className="mb-4 text-white/80 font-medium text-sm sm:text-base">{phase.value}</motion.p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4"
                variants={staggerContainerVariants}
              >
                {phase.approach.map((item, i) => (
                  <motion.div key={item} className="bg-gray-800 rounded-lg p-3 sm:p-4 shadow text-white" variants={fadeInUpVariants}>
                    <h5 className="font-bold text-orange-400 mb-1 text-sm sm:text-base">{item}</h5>
                    <p className="text-white/80 text-xs sm:text-sm">{phase.details[i]}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.ul
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4"
                variants={staggerContainerVariants}
              >
                {phase.outcomes.map((outcome) => (
                  <motion.li variants={fadeInUpVariants} key={outcome} className="bg-[#FF9F1C] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow"><ShieldCheck size={14} className="inline mr-1 text-white/80" />{outcome}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The FastTrack™ Advantage Section - Animated */}
      <section className="animated-section-ep py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-black">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>
        <motion.div
          className="relative z-10"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-[#FF9F1C]"
            variants={fadeInUpVariants}
          >
            The FastTrack™ Advantage
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
            variants={staggerContainerVariants}
          >
            {methodologyAdvantages.map((adv) => (
              <motion.div key={adv.title} className="bg-white/10 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 flex flex-col items-center text-center text-white border border-white/20" variants={fadeInUpVariants}>
                <span className="text-3xl sm:text-4xl mb-2">{adv.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{adv.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 sm:mt-12 md:mt-16 text-center px-3 sm:px-4"
            variants={staggerContainerVariants}
          >
            <motion.h3 variants={fadeInUpVariants} className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#FF9F1C]">Ready to FastTrack Your Venture?</motion.h3>
            <motion.p variants={fadeInUpVariants} className="max-w-2xl mx-auto text-sm sm:text-sm md:text-lg text-white/80 mb-4 sm:mb-5 md:mb-6">Our methodology transforms ideas into thriving ventures by providing a structured path from concept to market success. Whether you're starting with an idea or accelerating an existing venture, we guide you through every phase with proven expertise and comprehensive support.</motion.p>
            <motion.div variants={fadeInUpVariants}>
              <Button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-bold bg-[#FF9F1C] text-white hover:bg-opacity-90 shadow-lg" onClick={() => navigate("/connect")}>Start Your Journey</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurMethodology;
