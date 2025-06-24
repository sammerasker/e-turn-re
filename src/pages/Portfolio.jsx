import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Rocket, Zap, Shield } from 'lucide-react';

// Import images with unique names
import cofounderyPng from '@/assets/images/cofoundery.png';
import eatuplPng from '@/assets/images/eatupl.png';
import trainJpg from '@/assets/images/train.jpg';
import yogiJpg from '@/assets/images/yogi.jpg';


const Portfolio = () => {
  const heroRef = useRef(null); // Ref for the hero section to handle mouse effects and its particles
  const particlesContainerRef = useRef(null); // Ref specifically for hero section particles/rays
  const [activeTab, setActiveTab] = useState('all');

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
      background-color: #000; /* Default black background for animated sections */
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

    /* Particles for hero and other animated sections */
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

    /* Light rays for hero and other animated sections */
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

    /* Mouse follow particle */
    .mouse-particle { /* Renamed to avoid conflict with particle-ep for static particles */
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10;
    }

    /* Framer-motion entrance animations */
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

    if (!currentHeroRef || !currentParticlesContainerRef) return;

    // Particle Generation (for hero section only)
    const particleCount = 30;
    // Clear existing particles on re-render to prevent duplication
    currentParticlesContainerRef.innerHTML = '';
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-ep'; // Use particle-ep for background particles
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
      currentParticlesContainerRef.appendChild(particle);
    }

    // Light Rays (for hero section only)
    const rayCount = 8;
    for (let i = 0; i < rayCount; i++) {
      const ray = document.createElement('div');
      ray.className = 'light-ray-ep'; // Use light-ray-ep for background rays
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
    const handleMouseMove = (e) => {
      const blob = document.createElement('div');
      blob.classList.add('mouse-particle'); // Use unique class for mouse particle
      blob.style.position = 'absolute';
      blob.style.left = e.clientX + 'px';
      blob.style.top = e.clientY + 'px';
      blob.style.width = '15px';
      blob.style.height = '15px';
      blob.style.opacity = '0.7';
      blob.style.background = 'rgba(255, 255, 255, 0.7)'; // White particle on black background
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease'; // Apply transition
      blob.style.zIndex = '6';

      currentHeroRef.appendChild(blob); // Append to heroRef directly to ensure relative positioning is correct

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

    currentHeroRef.addEventListener('mousemove', handleMouseMove);
    currentHeroRef.addEventListener('mousemove', handleParallax);

    return () => {
      currentHeroRef.removeEventListener('mousemove', handleMouseMove);
      currentHeroRef.removeEventListener('mousemove', handleParallax);
      // Clean up dynamically added particles on component unmount
      if (currentParticlesContainerRef) {
        while (currentParticlesContainerRef.firstChild) {
          currentParticlesContainerRef.removeChild(currentParticlesContainerRef.firstChild);
        }
      }
    };
  }, []);

  const portfolioItems = [
    {
      id: 'cofoundery',
      name: 'The Co-Foundery',
      tagline: 'Connecting Visionaries with Complementary Skills',
      challenge: 'Talented entrepreneurs struggled to find the right co-founders with complementary skills, leading to stalled startups and unrealized potential.',
      solution: 'We built a sophisticated matching platform using AI to connect entrepreneurs based on complementary skills, values alignment, and working styles.',
      role: 'From concept to launch in 6 months, we provided end-to-end development, including algorithm design, UX research, and go-to-market strategy.',
      image: cofounderyPng, // Correctly using the imported variable
      color: 'bg-white/10', // Changed to consistent dark theme style
      icon: <Rocket className="h-8 w-8 text-[#FF9F1C]" /> // Changed icon color
    },
    {
      id: 'yogiswap',
      name: 'Yogiswap',
      tagline: 'Democratizing Access to Wellness',
      challenge: 'Quality yoga instruction was geographically limited and financially inaccessible to many, while qualified instructors struggled to build sustainable businesses.',
      solution: 'We created a two-sided marketplace connecting yoga practitioners with instructors globally through live virtual sessions with innovative scheduling and payment systems.',
      role: 'We provided technical architecture, development oversight, and growth strategy, helping scale to 10,000+ users across 15 countries.',
      image: yogiJpg, // Correctly using the imported variable
      color: 'bg-white/10', // Changed to consistent dark theme style
      icon: <Lightbulb className="h-8 w-8 text-[#FF9F1C]" /> // Changed icon color
    },
    {
      id: 'eatup',
      name: 'EatUp',
      tagline: 'Personalized Nutrition Made Simple',
      challenge: 'Consumers were overwhelmed by contradictory nutrition advice and struggled to maintain healthy eating habits that fit their unique needs and preferences.',
      solution: 'We developed an AI-powered platform that creates personalized meal plans and shopping lists based on dietary preferences, health goals, and local food availability.',
      role: 'We led product strategy, UX design, and technical implementation, integrating with grocery delivery services and health tracking platforms.',
      image: eatuplPng, // Correctly using the imported variable
      color: 'bg-white/10', // Changed to consistent dark theme style
      icon: <Zap className="h-8 w-8 text-[#FF9F1C]" /> // Changed icon color
    },
    {
      id: 'trainalong',
      name: 'TrainAlong',
      tagline: 'Hybrid Coaching for Modern Athletes',
      challenge: 'Personal trainers could not scale their businesses beyond in-person sessions, while clients wanted more flexible, ongoing support between sessions.',
      solution: 'We built a platform enabling hybrid coaching models with progress tracking, workout programming, and asynchronous feedback tools.',
      role: 'We provided full-stack development, business model refinement, and marketing strategy, helping trainers increase client capacity by 300%.',
      image: trainJpg, // Correctly using the imported variable
      color: 'bg-white/10', // Changed to consistent dark theme style
      icon: <Shield className="h-8 w-8 text-[#FF9F1C]" /> // Changed icon color
    }
  ];

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.id === activeTab);

  // Framer motion variants for entrance animations
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
      <section ref={heroRef} className="animated-section-ep text-white pt-32 pb-20 px-4 md:px-8">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
          <div className="particles-container-ep" ref={particlesContainerRef}></div>
        </div>

        <motion.div
          className="container mx-auto relative z-10 text-center max-w-4xl"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeInUpVariants}
          >
            Our Venture Ecosystem
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            We don't just build ventures—we create thriving ecosystems where innovation meets execution and vision becomes reality.
          </motion.p>
        </motion.div>
      </section>

      {/* Portfolio Tabs Section - Non-Animated (or minimal static background for contrast) */}
      <section className="py-12 md:py-20 bg-gray-900"> {/* Dark background for contrast */}
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex justify-center mb-8 md:mb-12">
            <Tabs defaultValue="all" className="w-full max-w-full overflow-x-auto" onValueChange={setActiveTab}>
              <TabsList className="bg-white/10 border border-white/20 p-1 flex justify-center flex-nowrap min-w-max"> {/* Ensure tabs are flex-nowrap to avoid wrapping */}
                <TabsTrigger value="all" className="px-4 py-2 text-white data-[state=active]:bg-[#FF9F1C] data-[state=active]:text-white rounded-md transition-all whitespace-nowrap">All Ventures</TabsTrigger>
                {portfolioItems.map(item => (
                  <TabsTrigger key={item.id} value={item.id} className="px-4 py-2 text-white data-[state=active]:bg-[#FF9F1C] data-[state=active]:text-white rounded-md transition-all whitespace-nowrap">{item.name}</TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 gap-12">
                  {filteredItems.map((item, index) => (
                    <PortfolioCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              </TabsContent>

              {portfolioItems.map(item => (
                <TabsContent key={item.id} value={item.id} className="mt-0">
                  <div className="grid grid-cols-1">
                    <PortfolioCard item={item} index={0} detailed />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </section>

      {/* Coming Soon Section - Animated */}
      <section className="animated-section-ep py-20 px-4 md:px-8">
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
          <div className="particles-container-ep"></div> {/* Re-using container for consistency */}
        </div>
        <motion.div
          className="container mx-auto relative z-10 text-center"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            variants={fadeInUpVariants}
          >
            More Coming Soon...
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-10 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            Our venture studio is constantly working on new and exciting projects.
            Check back regularly to see our latest innovations and success stories.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            transition={{ delay: 0.4 }}
          >
            <Link to="/connect">
              <Button className="bg-[#FF9F1C] hover:bg-[#e58a1c] text-white px-8 py-6 rounded-full text-lg font-medium">
                Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

// Removed interface declaration for JSX compatibility
const PortfolioCard = ({ item, index, detailed = false }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Adjusted amount for better mobile visibility
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 } },
      }}
      className={`rounded-2xl overflow-hidden shadow-lg ${item.color} border border-white/20`} // Added border
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center portfolio-card`}>
        <div className="md:w-1/2 p-6 md:p-12 text-white"> {/* Adjusted text color for dark background */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="flex items-center mb-4">
              <div className="mr-4 p-3 rounded-full bg-white/10 backdrop-blur-sm"> {/* Adjusted background for icon */}
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{item.name}</h3>
                <p className="text-[#FFD166] font-medium">{item.tagline}</p> {/* Adjusted accent color */}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 mt-6">
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }}>
              <h4 className="font-bold text-lg text-white">The Challenge</h4>
              <p className="text-white/80">{item.challenge}</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}>
              <h4 className="font-bold text-lg text-white">Our Solution</h4>
              <p className="text-white/80">{item.solution}</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}>
              <h4 className="font-bold text-lg text-white">e-turn's Role</h4>
              <p className="text-white/80">{item.role}</p>
            </motion.div>

            {detailed && (
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4 } } }}>
                <Link to="/connect">
                  <Button className="mt-4 bg-[#FF9F1C] hover:bg-[#e58a1c] text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 p-6 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            src={item.image}
            alt={item.name}
            className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-sm"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
