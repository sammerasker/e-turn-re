import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Users, DollarSign, Building, Rocket, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { motion } from 'framer-motion'; // Ensure motion is imported

const Connect = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    message: "",
  });

  const heroSectionRef = useRef(null); // Ref for the hero section
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

    /* Particles for hero section */
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

    /* Light rays for hero section */
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

    /* Slide-in animations for general content */
    @keyframes slide-in-bottom {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-on-scroll {
      opacity: 0; /* Start invisible */
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
    currentParticlesContainerRef.innerHTML = ''; // Clear existing particles
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
    const sectionBounds = currentHeroSectionRef.getBoundingClientRect();
    const adjustedMouseMove = (e) => {
      clearTimeout(timeoutId);
      const blob = document.createElement('div');
      blob.classList.add('particle');
      blob.style.position = 'absolute';
      blob.style.left = (e.clientX - sectionBounds.left) + 'px';
      blob.style.top = (e.clientY - sectionBounds.top) + 'px';
      blob.style.width = '12px';
      blob.style.height = '12px';
      blob.style.opacity = '0.5';
      blob.style.background = 'rgba(255, 159, 28, 0.6)';
      blob.style.boxShadow = '0 0 15px rgba(255, 159, 28, 0.6)';
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease';
      blob.style.zIndex = '6';

      currentHeroSectionRef.appendChild(blob);

      setTimeout(() => {
        blob.style.opacity = '0';
        blob.style.transform = 'scale(3)';
      }, 10);

      timeoutId = window.setTimeout(() => {
        blob.remove();
      }, 1000);
    };
    currentHeroSectionRef.addEventListener('mousemove', adjustedMouseMove);

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

    // Add EmailJS script to the head
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    document.head.appendChild(script);


    return () => {
      currentHeroSectionRef.removeEventListener('mousemove', adjustedMouseMove);
      currentHeroSectionRef.removeEventListener('mousemove', handleParallax);
      clearTimeout(timeoutId);
      if (currentParticlesContainerRef) {
        while (currentParticlesContainerRef.firstChild) {
          currentParticlesContainerRef.removeChild(currentParticlesContainerRef.firstChild);
        }
      }
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof window.emailjs === 'undefined') {
      toast.error("Email service is not available. Please try again later.");
      console.error("EmailJS script not loaded.");
      return;
    }

    setIsSubmitting(true);

    // Initialize EmailJS with your public key
    window.emailjs.init("D7OZx145zm6sPZe5g");

    // Prepare data for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      stage: formData.stage,
      message: formData.message,
    };

    try {
      // Replace with your EmailJS Service ID and Template ID
      const response = await window.emailjs.send("service_tkd6izv", "template_17z3jge", templateParams);

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          stage: "",
          message: ""
        });
      } else {
        toast.error(`Failed to send message: ${response.text || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const connectOptions = [
    {
      title: "Entrepreneurs",
      description: "Ready to Transform Your Vision into Reality?",
      subDescription: "Partner with us to accelerate your journey from concept to successful venture.",
      buttonText: "Apply Now",
      accent: "bg-gradient-to-r from-[#FF9F1C] to-[#FFD166]", // Using the accent color for gradient
      icon: <Rocket className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Investors",
      description: "Discover high-growth opportunities built on strategic foundations.",
      subDescription: "",
      buttonText: "Investor Inquiry",
      accent: "bg-gradient-to-r from-[#FF9F1C] to-[#FFD166]",
      icon: <Users className="h-6 w-6 text-[#FF9F1C]" />
    },
    {
      title: "Corporate Partners",
      description: "Leverage startup agility to fuel corporate innovation.",
      subDescription: "",
      buttonText: "Explore Partnerships",
      accent: "bg-gradient-to-r from-[#FF9F1C] to-[#FFD166]",
      icon: <Building className="h-6 w-6 text-[#FF9F1C]" />
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      {/* Hero Section & Connect Options - Animated */}
      <section ref={heroSectionRef} className="relative overflow-hidden animated-section-ep bg-black pt-20 md:pt-24 pb-16">
        {/* Background animation elements */}
        <div className="background-animation-ep">
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="wave-ep"></div>
          <div className="gradient-blob-ep blob1-ep"></div>
          <div className="gradient-blob-ep blob2-ep"></div>
          <div className="gradient-blob-ep blob3-ep"></div>
        </div>

        <div className="particles-container-ep" ref={particlesContainerRef}></div>

        {/* Main Content */}
        <div className="container-custom relative z-10 py-12 mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-white"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-xl mb-12 text-center max-w-2xl mx-auto text-white/80"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Let's Build the Future Together
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {connectOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FF9F1C]/50 transition-all duration-300 overflow-hidden">
                  <div className={`h-2 ${option.accent}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                        {option.icon}
                      </div>
                    </div>
                    <CardTitle className="text-center text-white">{option.title}</CardTitle>
                    <CardDescription className="text-center text-white/80 text-lg font-medium">{option.description}</CardDescription>
                    {option.subDescription && (
                      <p className="text-center text-white/70 mt-2">{option.subDescription}</p>
                    )}
                  </CardHeader>
                  <CardContent className="flex justify-center pb-6">
                    <Button
                      className="bg-[#FF9F1C] text-white hover:bg-opacity-90 font-semibold px-6 py-2 rounded-full"
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            id="contact-form"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Get In Touch</CardTitle>
                <CardDescription className="text-white/70">Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name (if applicable)"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stage" className="text-white">Startup Stage</Label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-base text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F1C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="" className="bg-gray-900 text-white">Select stage</option>
                        <option value="ideation" className="bg-gray-900 text-white">Ideation</option>
                        <option value="validation" className="bg-gray-900 text-white">Validation</option>
                        <option value="early-traction" className="bg-gray-900 text-white">Early Traction</option>
                        <option value="scaling" className="bg-gray-900 text-white">Scaling</option>
                        <option value="investor" className="bg-gray-900 text-white">Investor</option>
                        <option value="corporate-partner" className="bg-gray-900 text-white">Corporate Partner</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-base text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F1C] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF9F1C] text-white hover:bg-opacity-90 font-semibold rounded-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reach Out Directly Section - Non-Animated */}
      <section className="bg-gray-900 py-16 md:py-24">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Reach Out Directly</h2>

          <div className="space-y-6 text-white/80 inline-block text-left">
            <motion.div variants={fadeInUpVariants} transition={{ delay: 0.4 }} className="flex items-center">
              <Mail className="h-5 w-5 text-[#FF9F1C] mr-3" />
              <p className="text-lg">Email: <a href="mailto:hello@eturn.com" className="text-[#FF9F1C] hover:underline">hello@eturn.com</a></p>
            </motion.div>

            <motion.div variants={fadeInUpVariants} transition={{ delay: 0.5 }} className="flex items-center">
              <Phone className="h-5 w-5 text-[#FF9F1C] mr-3" />
              <p className="text-lg">Phone: +971 58 1962613 (UAE) | +20 122 1401400 (Egypt)</p>
            </motion.div>

            <motion.div variants={fadeInUpVariants} transition={{ delay: 0.6 }} className="flex items-center">
              <Linkedin className="h-5 w-5 text-[#FF9F1C] mr-3" />
              <p className="text-lg">Follow Us: <a href="https://www.linkedin.com/company/eturn-ventures/" target="_blank" rel="noopener noreferrer" className="text-[#FF9F1C] hover:underline">LinkedIn</a></p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Connect;
