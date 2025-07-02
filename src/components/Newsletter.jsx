import { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    let timeoutId;
    const sectionBounds = sectionElement.getBoundingClientRect();

    const adjustedMouseMove = (e) => {
      clearTimeout(timeoutId);
      const blob = document.createElement('div');
      blob.classList.add('particle');
      blob.style.position = 'absolute';
      blob.style.left = (e.clientX - sectionBounds.left) + 'px';
      blob.style.top = (e.clientY - sectionBounds.top) + 'px';
      blob.style.width = '15px';
      blob.style.height = '15px';
      blob.style.opacity = '0.7';
      blob.style.background = 'rgba(255, 255, 255, 0.7)'; // White blob for dark background
      blob.style.borderRadius = '50%';
      blob.style.pointerEvents = 'none';
      blob.style.transition = 'all 1s ease';
      blob.style.zIndex = '5'; 
      
      sectionElement.appendChild(blob);

      setTimeout(() => {
        blob.style.opacity = '0';
        blob.style.transform = 'scale(3)';
      }, 10);

      timeoutId = window.setTimeout(() => {
        blob.remove();
      }, 1000);
    };

    sectionElement.addEventListener('mousemove', adjustedMouseMove);

    return () => {
      sectionElement.removeEventListener('mousemove', adjustedMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mailchimp URL for JSONP request
      const mailchimpUrl = "https://studio.us9.list-manage.com/subscribe/post-json?u=3d142f5f2fd1c116ae392f633&id=85a8136164&f_id=001cc2e1f0&c=?";
      
      // Create a unique callback name
      const callbackName = 'mc_callback_' + Math.floor(Math.random() * 1000000);
      
      // Create promise to handle the JSONP response
      const jsonpPromise = new Promise((resolve, reject) => {
        // Set timeout to handle no response
        const timeoutId = setTimeout(() => {
          cleanup();
          reject(new Error('Request timed out'));
        }, 10000);
        
        // Create cleanup function
        const cleanup = () => {
          delete window[callbackName];
          document.body.removeChild(script);
          clearTimeout(timeoutId);
        };
        
        // Create callback function
        window[callbackName] = (response) => {
          cleanup();
          resolve(response);
        };
        
        // Create script element
        const script = document.createElement('script');
        script.src = `${mailchimpUrl}&EMAIL=${encodeURIComponent(email)}&b_3d142f5f2fd1c116ae392f633_85a8136164=&c=${callbackName}`;
        document.body.appendChild(script);
      });
      
      // Wait for response
      const response = await jsonpPromise;
      
      setIsSubmitting(false);
      
      if (response.result === 'success') {
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        // Handle already subscribed as success
        if (response.msg.includes('already subscribed')) {
          toast.success("You're already subscribed to our newsletter!");
          setEmail("");
        } else {
          toast.error("There was an issue with your subscription. Please try again.");
        }
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("There was an issue with your subscription. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="section bg-black text-white relative overflow-hidden" ref={sectionRef}>
      {/* Added relative and overflow-hidden for positioning context of animated elements */}
      <div className="animated-shape shape1"></div>
      <div className="animated-shape shape2"></div>
      <div className="animated-shape shape3"></div>
      <div className="animated-shape shape4"></div>
      <div className="gradient-overlay-new"></div>

      <style>
        {`
          .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            background: rgba(250, 204, 21, 0.7); /* Yellow particle for black background */
            box-shadow: 0 0 10px rgba(250, 204, 21, 0.7);
          }
        `}
      </style>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-12 sm:py-16"> {/* Added padding for mobile */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Stay ahead of the curve.
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto text-yellow-400">
            Get exclusive insights, startup resources, and updates from the e-turn ecosystem.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow bg-white/10 border-yellow-400/20 text-white placeholder:text-white/50 py-2 sm:py-3"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
            >
              {isSubmitting ? "Subscribing..." : "Join Our Community"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );

};

export default Newsletter;
