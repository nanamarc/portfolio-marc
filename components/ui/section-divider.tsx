"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag' | 'dots';
  className?: string;
  animated?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  className,
  animated = true,
}) => {
  const renderWave = () => (
    <div className={cn("relative h-24 overflow-hidden", className)}>
      <motion.svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        animate={animated ? { x: [0, -100, 0] } : undefined}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="currentColor"
          className="text-primary/10"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill="currentColor"
          className="text-primary/20"
        />
      </motion.svg>
    </div>
  );

  const renderDiagonal = () => (
    <div className={cn("relative h-16 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 transform -skew-y-1" />
    </div>
  );

  const renderCurve = () => (
    <div className={cn("relative h-20 overflow-hidden", className)}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="currentColor"
          className="text-primary/10"
        />
      </svg>
    </div>
  );

  const renderZigzag = () => (
    <div className={cn("relative h-12 overflow-hidden", className)}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0L50,60L100,0L150,60L200,0L250,60L300,0L350,60L400,0L450,60L500,0L550,60L600,0L650,60L700,0L750,60L800,0L850,60L900,0L950,60L1000,0L1050,60L1100,0L1150,60L1200,0V120H0V0Z"
          fill="currentColor"
          className="text-primary/10"
        />
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className={cn("relative h-16 flex items-center justify-center", className)}>
      <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={animated ? { scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] } : undefined}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );

  const variants = {
    wave: renderWave,
    diagonal: renderDiagonal,
    curve: renderCurve,
    zigzag: renderZigzag,
    dots: renderDots,
  };

  return variants[variant]();
};

export const GradientDivider: React.FC<{
  direction?: 'horizontal' | 'vertical';
  className?: string;
}> = ({ direction = 'horizontal', className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-transparent via-primary/30 to-transparent",
        direction === 'horizontal' ? "h-px w-full" : "w-px h-full",
        className
      )}
    />
  );
};

export const AnimatedLine: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={cn("relative h-px bg-border overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};