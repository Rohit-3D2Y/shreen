import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, MessageSquare, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Ripple Effect Component
const RippleEffect = ({
  children,
  className = "",
  rippleColor = "rgba(168, 95, 49, 0.3)",
}) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
      onTouchStart={createRipple}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: rippleColor,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const services = [
  {
    id: "design",
    title: "Design Services",
    description: "Complete design solutions for your spaces",
    icon: "/flaticons/settings.png",
    subServices: [
      {
        id: "interior",
        title: "Interior Designing",
        description:
          "Creating functional and aesthetically pleasing indoor spaces that reflect your personality and lifestyle.",
        details:
          "Transform your living spaces with our expert interior design services. We focus on creating harmonious environments that blend functionality with beauty.",
        icon: "/flaticons/sofa.png",
        backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "exterior",
        title: "Exterior Designing",
        description:
          "Enhancing curb appeal with elegant and practical outdoor designs.",
        details:
          "Make a lasting first impression with stunning exterior designs that complement your property's architecture and surroundings.",
        icon: "/flaticons/malls.png",
        backgroundImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "residential",
        title: "Residential Designing",
        description: "Tailored solutions for apartments, villas, and homes.",
        details:
          "From cozy apartments to luxury villas, we create personalized residential spaces that feel like home.",
        icon: "/flaticons/house.png",
        backgroundImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "commercial",
        title: "Commercial Designing",
        description:
          "Functional and attractive spaces for offices, shops, and businesses.",
        details:
          "Design commercial spaces that enhance productivity and create memorable experiences for your customers and employees.",
        icon: "/flaticons/malls.png",
        backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ],
  },
  {
    id: "construction",
    title: "Construction Services",
    description: "Professional construction and technical services",
    icon: "/flaticons/worker.png",
    subServices: [
      {
        id: "civil",
        title: "Civil Work",
        description:
          "Structural and foundational work for all types of projects.",
        details:
          "Solid foundations and structural integrity form the backbone of every successful project. We ensure quality construction.",
        icon: "/flaticons/fence.png",
        backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "carpentry",
        title: "Carpentry",
        description: "Custom woodwork solutions for furniture and interiors.",
        details:
          "Handcrafted woodwork that adds warmth and character to your spaces. From built-ins to custom furniture.",
        icon: "/flaticons/carpentry.png",
        backgroundImage: "/carpentryc.jpeg"
      },
      {
        id: "electrical",
        title: "Electrical",
        description: "Safe and efficient electrical installations and systems.",
        details:
          "Modern electrical solutions that power your space safely and efficiently, with smart home integration options.",
        icon: "/flaticons/plug.png",
        backgroundImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ],
  },
  {
    id: "finishing",
    title: "Finishing Services",
    description: "Final touches and smart solutions for your space",
    icon: "/flaticons/paint-roller.png",
    subServices: [
      {
        id: "plumbing",
        title: "Plumbing",
        description: "Reliable water systems and sanitary fittings.",
        details:
          "Professional plumbing services ensuring clean water supply and efficient drainage systems for your comfort.",
        icon: "/flaticons/plumbing.png",
        backgroundImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "automation",
        title: "Automation",
        description: "Smart home and office automation solutions.",
        details:
          "Step into the future with intelligent automation systems that make your life easier and more efficient.",
        icon: "/flaticons/settings.png",
        backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "pop",
        title: "POP",
        description: "False ceiling and decorative gypsum/plaster works.",
        details:
          "Elegant ceiling designs and decorative plasterwork that add sophistication to your interiors.",
        icon: "/flaticons/plastering.png",
        backgroundImage: "/popc.jpeg"
      },
      {
        id: "painting",
        title: "Painting",
        description: "Professional painting services for every surface.",
        details:
          "Transform your space with expert painting services using premium materials and precise color matching.",
        icon: "/flaticons/paint-roller.png",
        backgroundImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
    ],
  },
];

function Service2() {
  // Flatten all sub-services for the slider
  const allSubServices = services.flatMap((service) =>
    service.subServices.map((sub) => ({ ...sub, parentTitle: service.title }))
  );

  // Debug log to ensure data is loaded
  console.log("All Sub Services:", allSubServices);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 bg-[#eae5df]">
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-[#a85f31] mb-6 brico -tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              textShadow: "0px 8px 16px rgba(168, 95, 49, 0.3)",
            }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-[#8b6f4a] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're dreaming of a cozy home retreat or a bold, modern
            workspace, our expert team brings your vision to life with precision
            and creativity.
          </motion.p>
        </div>

        {/* Services Slider */}
        <div className="slider-container relative mb-16">
          <Slider {...settings}>
            {allSubServices.map((service, index) => (
              <div key={`${service.id}-${index}`} className="outline-none">
                <div className="mx-3">
                  <motion.div
                    className="relative h-80 group transition-all duration-500 hover:scale-95 rounded-xl overflow-hidden border border-white/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(168, 95, 49, 0.2)",
                      borderColor: "rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    {/* Background Image with Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 z-0"
                      style={{
                        backgroundImage: `url(${service.backgroundImage || service.icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60 z-1"></div>
                      
                      {/* Gradient overlay from bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-2"></div>
                    </div>

                    {/* Card Text Content - Redesigned layout */}
                    <div className="relative h-full flex flex-col justify-between p-6 z-10">
                      {/* Top Content */}
                      <div className="flex justify-between items-start">
                        {/* Parent Category - Top Left */}
                        <motion.span 
                          className="text-xs uppercase tracking-wider text-white/90 font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50 border border-white/20"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {service.parentTitle}
                        </motion.span>

                        {/* Service Icon - Top Right */}
                        <motion.div
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          <img 
                            src={service.icon} 
                            alt={service.title} 
                            className="w-4 h-4 object-contain" 
                          />
                        </motion.div>
                      </div>

                      {/* Bottom Content */}
                      <div className="mt-auto">
                        {/* Service Title */}
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2 leading-tight transition-all duration-300 group-hover:text-white group-hover:transform group-hover:translate-x-1"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        {/* Service Description */}
                        <motion.p 
                          className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2 transition-all duration-300 group-hover:text-white/100 pr-16"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Enhanced Button positioned over subtle circular background */}
                    <div className="absolute bottom-6 right-6 z-30">
                      {/* Subtle circular background */}
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/5 rounded-full backdrop-blur-sm"></div>
                      
                      <RippleEffect
                        className="rounded-full"
                        rippleColor="rgba(255, 255, 255, 0.4)"
                      >
                        <motion.a
                          href={`https://wa.me/918082466624?text=Hi, I would like to know more about your "${encodeURIComponent(
                            service.title
                          )}" service.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#a85f31] rounded-full flex items-center justify-center text-white hover:bg-[#8b6f4a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group-hover:shadow-2xl border border-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            whileHover={{ x: 2, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          >
                            <MessageSquare className="w-5 h-5" />
                          </motion.div>
                        </motion.a>
                      </RippleEffect>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <RippleEffect
            className="inline-block rounded-full"
            rippleColor="rgba(255, 255, 255, 0.4)"
          >
            <motion.a
              href="https://wa.me/918082466624?text=Hi, I would like to discuss my project requirements with you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#a85f31] text-white text-lg px-8 py-4 rounded-full hover:bg-[#7f5539] transition-all duration-300 shadow-lg brico"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 95, 49, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
              <motion.div
                whileHover={{ x: 5, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}

export default Service2;
