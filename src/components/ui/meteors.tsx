"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [meteors, setMeteors] = useState<Array<{
    position: number;
    animationDelay: number;
    animationDuration: number;
  }>>([]);

  useEffect(() => {
    setIsMounted(true);
    const meteorCount = number || 20;
    const meteorArray = Array.from({ length: meteorCount }, (_, idx) => ({
      position: Math.random() * (window.innerWidth + 400) - 200,
      animationDelay: Math.random() * 5,
      animationDuration: Math.floor(Math.random() * (10 - 5) + 5),
    }));
    setMeteors(meteorArray);
  }, [number]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-1 w-1 rotate-[45deg] rounded-[9999px] bg-slate-400 shadow-[0_0_6px_#ffffff40]",
            "before:absolute before:top-1/2 before:h-[2px] before:w-[80px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#94a3b8] before:to-transparent before:content-[''] before:shadow-[0_0_4px_#ffffff20]",
            className,
          )}
          style={{
            top: "-40px",
            left: meteor.position + "px",
            animationDelay: meteor.animationDelay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        ></span>
      ))}
    </motion.div>
  );
};
