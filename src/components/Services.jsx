import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceBackup from "./ServiceBackup";

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

// Enhanced Text Animation Component
const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  variant = "slideUp",
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants = {
    slideUp: {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    slideLeft: {
      hidden: { x: -30, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    fadeIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    typewriter: {
      hidden: { width: 0 },
      visible: { width: "auto" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
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
      },
      {
        id: "exterior",
        title: "Exterior Designing",
        description:
          "Enhancing curb appeal with elegant and practical outdoor designs.",
        details:
          "Make a lasting first impression with stunning exterior designs that complement your property's architecture and surroundings.",
        icon: "/flaticons/malls.png",
      },
      {
        id: "residential",
        title: "Residential Designing",
        description: "Tailored solutions for apartments, villas, and homes.",
        details:
          "From cozy apartments to luxury villas, we create personalized residential spaces that feel like home.",
        icon: "/flaticons/house.png",
      },
      {
        id: "commercial",
        title: "Commercial Designing",
        description:
          "Functional and attractive spaces for offices, shops, and businesses.",
        details:
          "Design commercial spaces that enhance productivity and create memorable experiences for your customers and employees.",
        icon: "/flaticons/malls.png",
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
      },
      {
        id: "carpentry",
        title: "Carpentry",
        description: "Custom woodwork solutions for furniture and interiors.",
        details:
          "Handcrafted woodwork that adds warmth and character to your spaces. From built-ins to custom furniture.",
        icon: "/flaticons/carpentry.png",
      },
      {
        id: "electrical",
        title: "Electrical",
        description: "Safe and efficient electrical installations and systems.",
        details:
          "Modern electrical solutions that power your space safely and efficiently, with smart home integration options.",
        icon: "/flaticons/plug.png",
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
      },
      {
        id: "automation",
        title: "Automation",
        description: "Smart home and office automation solutions.",
        details:
          "Step into the future with intelligent automation systems that make your life easier and more efficient.",
        icon: "/flaticons/settings.png",
      },
      {
        id: "pop",
        title: "POP",
        description: "False ceiling and decorative gypsum/plaster works.",
        details:
          "Elegant ceiling designs and decorative plasterwork that add sophistication to your interiors.",
        icon: "/flaticons/plastering.png",
      },
      {
        id: "painting",
        title: "Painting",
        description: "Professional painting services for every surface.",
        details:
          "Transform your space with expert painting services using premium materials and precise color matching.",
        icon: "/flaticons/paint-roller.png",
      },
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      id={service.id}
      className="min-h-screen lg:min-h-[70vh] flex items-center justify-center p-8 lg:p-16"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-2xl">
        <motion.div
          className="w-16 h-16 mb-8 flex items-center justify-center"
          animate={inView ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-contain filter brightness-0 saturate-100"
            style={{
              filter:
                "invert(47%) sepia(57%) saturate(423%) hue-rotate(3deg) brightness(93%) contrast(93%)",
            }}
          />
        </motion.div>

        <AnimatedText
          variant="slideLeft"
          delay={0.1}
          className="text-4xl lg:text-5xl font-bold text-[#a85f31] mb-6 brico -tracking-wider"
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 4px 8px rgba(168, 95, 49, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.span>
        </AnimatedText>

        <AnimatedText
          variant="slideLeft"
          delay={0.2}
          className="text-xl text-[#8b6f4a] mb-6 leading-relaxed"
        >
          {service.description}
        </AnimatedText>

        <AnimatedText
          variant="slideLeft"
          delay={0.3}
          className="text-lg text-[#b8a08a] mb-8 leading-relaxed"
        >
          {service.details}
        </AnimatedText>

        <AnimatedText variant="fadeIn" delay={0.4}>
          <RippleEffect
            className="inline-block rounded-full"
            rippleColor="rgba(255, 255, 255, 0.4)"
          >
            <motion.a
              href={`https://wa.me/918082466624?text=Hi, I would like to know more about your "${encodeURIComponent(
                service.title
              )}" service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#a85f31] text-white text-lg px-8 py-4 rounded-full hover:bg-[#7f5539] transition-all duration-300 shadow-lg hover:shadow-xl brico"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 95, 49, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                whileHover={{ x: 5, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>
          </RippleEffect>
        </AnimatedText>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const [activeSubService, setActiveSubService] = useState(
    services[0].subServices[0].id
  );
  const [isMobile, setIsMobile] = useState(false);

  // Flatten all services for easy access
  const allSubServices = services.flatMap((service) =>
    service.subServices.map((sub) => ({ ...sub, parentId: service.id }))
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const serviceElements = allSubServices.map((service) =>
        document.getElementById(service.id)
      );

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = serviceElements.length - 1; i >= 0; i--) {
        const element = serviceElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;

          if (scrollY >= elementTop - windowHeight / 2) {
            const currentSubService = allSubServices[i];
            setActiveSubService(currentSubService.id);
            setActiveService(currentSubService.parentId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, allSubServices]);

  const scrollToService = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return <ServiceBackup />;
  }

  return (
    <section className="relative bg-[#eae5df]">
      {/* Header */}
      <div className="py-16 px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatedText variant="fadeIn" className="text-center">
          <motion.h2
            className="text-5xl lg:text-7xl font-bold text-[#a85f31] mb-6 brico -tracking-wider"
            whileHover={{
              scale: 1.02,
              textShadow: "0px 8px 16px rgba(168, 95, 49,0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            Our Services
          </motion.h2>
          <AnimatedText
            variant="slideUp"
            delay={0.3}
            className="text-xl text-[#8b6f4a] max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're dreaming of a cozy home retreat or a bold, modern
            workspace, our expert team brings your vision to life with precision
            and creativity.
          </AnimatedText>
        </AnimatedText>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sticky Navigation */}
        <div className="w-1/3 sticky top-0 h-screen flex flex-col justify-center pl-8 lg:pl-16 bg-gradient-to-br from-[#e7daca] to-[#ddd0bf]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-wider text-[#8b6f4a] mb-8 font-medium brico">
              What We Offer
            </h3>

            <nav className="space-y-6">
              {services.map((service, index) => (
                <div key={service.id} className="space-y-2">
                  <AnimatedText
                    variant="slideLeft"
                    delay={index * 0.1}
                    className={`text-xl lg:text-2xl font-bold transition-all duration-300 brico ${
                      activeService === service.id
                        ? "text-[#a85f31]"
                        : "text-[#b8a08a]"
                    }`}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                        textShadow: "0px 4px 8px rgba(168, 95, 49, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.span>
                  </AnimatedText>

                  <div className="ml-4 space-y-1">
                    {service.subServices.map((subService, subIndex) => (
                      <RippleEffect
                        key={subService.id}
                        className="block"
                        rippleColor="rgba(168, 95, 49, 0.2)"
                      >
                        <motion.button
                          onClick={() => scrollToService(subService.id)}
                          className={`block text-left text-lg font-medium transition-all duration-300 brico w-full py-2 px-3 rounded-lg ${
                            activeSubService === subService.id
                              ? "text-[#a85f31] scale-105 font-bold bg-[#a85f31]/10"
                              : "text-[#b8a08a] hover:text-[#a85f31] hover:bg-[#a85f31]/5"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + subIndex * 0.05,
                          }}
                          whileHover={{
                            x: 8,
                            textShadow: "0px 2px 4px rgba(168, 95, 49, 0.2)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {subService.title}
                        </motion.button>
                      </RippleEffect>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="w-2/3 bg-[#eae5df]">
          {allSubServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
