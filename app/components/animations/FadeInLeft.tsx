"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInLeftProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
