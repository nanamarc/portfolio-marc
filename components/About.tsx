"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrainCircuit } from "lucide-react";



export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-all duration-700">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left side - Animated Icon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:w-1/3 justify-center items-center md:mt-10 hidden md:flex"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-12 rounded-full shadow-lg">
                  <div className="relative flex justify-center items-center">
                    <BrainCircuit
                      size={120}
                      className="text-purple-600"
                      style={{
                        filter: "drop-shadow(0 4px 6px rgba(139, 92, 246, 0.3))",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Description */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:w-2/3"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About me
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-white">
                <p className="text-lg">
                  I&apos;m a passionate web developper,I&apos;m specializing in{" "}
                  <span className="text-purple-600 font-bold">
                     backend development
                  </span>{" "}
                  but I&apos;m also comfortable working on the {" "}
                  <span className="text-purple-600 font-bold">
                      frontend
                  </span>
                  .
                </p>
                <p className="text-lg">I enjoy working in a team, where collaboration brings ideas to life, and I am also comfortable managing a
                   project independently, ensuring its successful completion.
                </p>
                <p className="text-lg">I am committed to growing as a developer by learning 
                  from each experience and continuously refining my skills to deliver better solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
