import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricShapeProps {
  className?: string;
}

export const Circle: React.FC<GeometricShapeProps> = ({ className }) => (
  <div className={cn(
    "absolute rounded-full opacity-30 blur-xl",
    className
  )} />
);

export const Square: React.FC<GeometricShapeProps> = ({ className }) => (
  <div className={cn(
    "absolute rounded-xl opacity-20 blur-md",
    className
  )} />
);

export const Triangle: React.FC<GeometricShapeProps> = ({ className }) => (
  <div className={cn(
    "absolute clip-path-triangle opacity-20 backdrop-blur-md",
    className
  )} />
);

export const GeometricBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Circle className="w-72 h-72 bg-purple-500/30 -top-20 -left-20 animate-float-slow" />
      <Circle className="w-96 h-96 bg-blue-500/20 top-1/3 -right-32 animate-float-medium" />
      <Square className="w-64 h-64 bg-indigo-500/20 bottom-1/4 left-1/3 rotate-45 animate-float-reverse" />
      <div className="absolute w-80 h-80 border border-purple-500/10 rounded-full top-1/2 left-1/4 animate-pulse-slow" />
      <div className="absolute w-40 h-40 border border-blue-300/20 rounded-md rotate-12 bottom-20 right-1/3 animate-spin-slow" />
    </div>
  );
};