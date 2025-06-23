import React from 'react';

// Icons for potential future use
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
// Button component is imported but not currently used
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
// TimelineInfographic import will be handled after confirming its implementation or creating a placeholder

const ProcessSection = () => { // Component for displaying the methodology section
  const sectionRef = useRef(null); 
  // These refs are for the horizontal scrolling functionality
  // Currently not used in the component but kept for future implementation
  // Prefixed with underscore to indicate they're intentionally unused
  const _scrollContainerRef = useRef(null); 
  const _isDragging = useRef(false); 
  const _startX = useRef(0); 
  const _scrollLeft = useRef(0);
  
  // Define processSteps for both the infographic and phase details sections
  const processSteps = [ 
    { 
      title: "Phase 1", 
      subtitle: "Rapid Validation", 
      description: "Quickly test and validate your concept with real users and data.", 
      icon: <Target className="w-6 h-6 text-yellow-400" />
    }, 
    { 
      title: "Phase 2", 
      subtitle: "MVP Development", 
      description: "Build a lean, high-quality product with essential features.", 
      icon: <Rocket className="w-6 h-6 text-yellow-400" />
    }, 
    { 
      title: "Phase 3", 
      subtitle: "Market Entry", 
      description: "Launch strategically and gather actionable market feedback.", 
      icon: <Link2 className="w-6 h-6 text-yellow-400" />
    }, 
    { 
      title: "Phase 4", 
      subtitle: "Optimization & Scale", 
      description: "Refine the model and accelerate growth with scale strategies.", 
      icon: <Shield className="w-6 h-6 text-yellow-400" />
    }, 
  ];

  // Add fade-in animation with IntersectionObserver
  useEffect(() => {
    const sectionElement = sectionRef.current; 
    if (!sectionElement) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // For headings, simply add the class
            if (entry.target.tagName === 'H2' || entry.target.tagName === 'H3') {
              entry.target.classList.add('fade-in-visible');
            }
            
            // For phase detail section, handle the container
            if (entry.target.classList.contains('mt-20')) {
              const heading = entry.target.querySelector('h3');
              const cards = entry.target.querySelectorAll('.bg-\\[\\#111111\\]');
              
              // Animate the heading first
              if (heading) {
                heading.classList.add('fade-in-visible');
              }
              
              // Then stagger the cards animation
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('fade-in-visible');
                }, 200 + (index * 150)); // Staggered delay
              });
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Observe title elements and phase detail section container
    const elementsToObserve = sectionElement.querySelectorAll('h2, h3, .mt-20');
    elementsToObserve.forEach(el => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => {
      if (elementsToObserve) {
        elementsToObserve.forEach(el => observer.unobserve(el));
      }
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;
    
    let timeoutId; 
    const sectionBounds = sectionElement.getBoundingClientRect();

    const adjustedMouseMove = (e) => { 
      clearTimeout(timeoutId); 
      const blob = document.createElement("div"); 
      blob.classList.add("particle"); 
      blob.style.position = "absolute"; 
      blob.style.left = e.clientX - sectionBounds.left + "px"; 
      blob.style.top = e.clientY - sectionBounds.top + "px"; 
      blob.style.width = "15px"; 
      blob.style.height = "15px"; 
      blob.style.opacity = "0.7"; 
      blob.style.background = "rgba(255, 255, 255, 0.7)"; 
      blob.style.borderRadius = "50%"; 
      blob.style.pointerEvents = "none"; 
      blob.style.transition = "all 1s ease"; 
      blob.style.zIndex = "5";

      sectionElement.appendChild(blob);

      setTimeout(() => { 
        blob.style.opacity = "0"; 
        blob.style.transform = "scale(3)"; 
      }, 10);

      timeoutId = window.setTimeout(() => { 
        blob.remove(); 
      }, 1000); 
    };

    sectionElement.addEventListener("mousemove", adjustedMouseMove); 
    return () => { 
      sectionElement.removeEventListener("mousemove", adjustedMouseMove); 
      clearTimeout(timeoutId); 
    }; 
  }, []);



  return ( 
    <section id="methodology"
      className="section animated-gradient text-white relative overflow-hidden bg-black" 
      ref={sectionRef} 
    > 
      <style> 
        {` 
        .hide-scrollbar::-webkit-scrollbar { 
          display: none; 
        } 
        .hide-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        } 
        
        /* Fade-in animation styles */
        h2, h3 {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .infographic-placeholder {
          opacity: 1; /* Make the infographic container visible by default */
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        /* Phase detail cards animation */
        .bg-\[\#111111\] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        /* Timeline animation styles */
        .infographic-placeholder > div > div {
          opacity: 1; /* Make timeline items visible by default */
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        /* Ensure the vertical line is visible */
        .infographic-placeholder .absolute.left-1\/2 {
          opacity: 1 !important;
          height: 100% !important;
          display: block !important;
        }
        `} 
      </style> 

      <div className="animated-shape shape1"></div> 
      <div className="animated-shape shape2"></div> 
      <div className="animated-shape shape3"></div> 
      <div className="animated-shape shape4"></div> 
      <div className="gradient-overlay-new"></div> 

      <div className="max-w-4xl mx-auto text-center">  
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">//Our methodology</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffffff]">Our Methodology</h2> 
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#facc15]"> 
          The FastTrack™ Methodology: From Idea to Scale in Record Time 
        </h2> 
        <p className="text-lg md:text-xl mb-10 border border-yellow-400 rounded-xl p-6 bg-black/60 backdrop-blur-sm"> 
          We've cracked the code on venture building. Our proven 4-phase methodology compresses what traditionally takes years into months, turning your vision into a thriving business faster than you thought possible. 
        </p> 

        <div className="relative mt-16 max-w-5xl mx-auto infographic-placeholder"> 
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-100 z-0"></div> 
          <div className="grid gap-12 relative z-10"> 
            {processSteps.map((phase, idx) => ( 
              <div 
                key={phase.title} 
                className={`relative md:flex ${ 
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse" 
                } items-center gap-6`} 
              > 
                <div className="md:w-1/2 text-center md:text-left"> 
                  <div className="bg-black/60 p-6 rounded-2xl backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105"> 
                    <div className="flex items-center mb-2">
                      <div className="mr-3">{phase.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-yellow-400">{phase.title}</h3> 
                        <h4 className="text-xl font-semibold text-white mt-1">{phase.subtitle}</h4> 
                      </div>
                    </div>
                    <p className="mt-1 text-white/80 text-base leading-relaxed"> 
                      {phase.description} 
                    </p> 
                  </div> 
                </div> 
                <div className="hidden md:block w-1 h-16 bg-yellow-400 mx-auto" /> 
                <div className="w-4 h-4 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2 md:top-1/2 md:-translate-y-1/2" /> 
              </div> 
            ))} 
          </div> 
        </div> 

 

        {/* Phase Details Section */}
        <div className="mt-20 max-w-6xl mx-auto px-4"> 
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400 text-center"> 
            Phase Details 
          </h3> 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
            {[
              {
                title: "Rapid Validation",
                description: "We compress months of market research into intensive sprints, using data-driven frameworks to test assumptions and validate your concept. This phase de-risks your venture by ensuring market demand exists before major investment.",
                icon: processSteps[0].icon
              },
              {
                title: "MVP Development",
                description: "Our integrated design and development teams build market-ready products in record time, focusing on core functionality that delivers immediate value. You get a scalable product designed for growth from day one.",
                icon: processSteps[1].icon
              },
              {
                title: "Market Entry",
                description: "We leverage proven playbooks for customer acquisition and market penetration to generate early traction and valuable feedback. This strategic launch creates momentum and validates your go-to-market approach.",
                icon: processSteps[2].icon
              },
              {
                title: "Optimization & Scale",
                description: "With real-world data in hand, we continuously refine your product and growth strategy, preparing for expansion and investment rounds. This phase ensures sustainable growth and investment readiness.",
                icon: processSteps[3].icon
              }
            ].map((phase, index) => ( 
              <div 
                key={index} 
                className="bg-[#111111] border border-yellow-500 rounded-xl p-8 shadow-lg transition-transform hover:scale-[1.02]" 
              > 
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1">{phase.icon}</div>
                  <h4 className="text-2xl font-bold text-yellow-400">{phase.title}</h4>
                </div>
                <p className="text-base leading-relaxed text-white/90">{phase.description}</p> 
              </div> 
            ))} 
          </div> 
        </div>
        
        {/* CTA Button */} 
        <div className="mt-16"> 
          <Link 
            to="/about" 
            className="inline-block border border-white/60 text-white/90 bg-black/40 hover:bg-black/70 hover:text-white px-6 py-3 rounded-lg text-lg transition relative z-10" 
          > 
            Discover Our Methodology 
          </Link> 
        </div> 
      </div> 
    </section> 
  ); 
};

export default ProcessSection;

