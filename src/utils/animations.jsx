import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Ripple Effect Component
export const RippleEffect = ({
  children,
  className = "",
  rippleColor = "rgba(168, 95, 49, 0.3)",
  disabled = false,
}) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    if (disabled) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now() + Math.random(),
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
            className="absolute rounded-full pointer-events-none z-10"
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
export const AnimatedText = ({
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
    slideRight: {
      hidden: { x: 30, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    fadeIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
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

// Animated Button Component
export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  rippleColor = "rgba(255, 255, 255, 0.4)",
  ...props
}) => {
  const Component = href ? motion.a : motion.button;

  return (
    <RippleEffect className="inline-block" rippleColor={rippleColor}>
      <Component
        {...(href ? { href, target, rel } : { onClick })}
        className={className}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 20px rgba(168, 95, 49, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </Component>
    </RippleEffect>
  );
};

// Animated Card Component
export const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
  rippleColor = "rgba(168, 95, 49, 0.2)",
  ...props
}) => {
  return (
    <RippleEffect className={className} rippleColor={rippleColor}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: "easeOut",
        }}
        whileHover={{
          y: -4,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(168, 95, 49, 0.15)",
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.div>
    </RippleEffect>
  );
};

// Hover text effect
export const HoverText = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      whileHover={{
        scale: 1.05,
        textShadow: "0px 4px 8px rgba(168, 95, 49, 0.3)",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};

// Image hover animation
export const AnimatedImage = ({ src, alt, className = "", ...props }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
};
