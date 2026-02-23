import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
    const containerVariants:Variants = {
        hidden: {},
        visible: {
        transition: {
            staggerChildren: 0.25,
        },
        },
    };

    const itemVariants:Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <Section
      className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-border"
    >

      {/* Floating blob */}
      <div
        className="
          absolute -top-32 -right-32 w-80 h-80 
          rounded-full blur-3xl 
          opacity-20 dark:opacity-10
          bg-blue-300 dark:bg-blue-500
          animate-float-slow
        "
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px)`
        }}
      />

      <Container>
        <motion.div
            className="max-w-3xl space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >

              <span className="bg-gradient-to-b from-accent to-blue-400 bg-clip-text text-transparent">
              {/* <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent"> */}
                Ayushman Pani
              </span>
            </motion.h1>

            {/* Positioning */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted font-medium"
            >
              AI & Systems Engineer · Full-Stack Developer · Security Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted text-lg leading-relaxed"
            >

              I build production-focused machine learning systems,
              scalable full-stack applications, and secure backend architectures.
              My work emphasizes real-world constraints, monitoring, and reliability.
            </motion.p>

            {/* Domain Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              {["Machine Learning Systems", "Web Engineering", "Cybersecurity"].map((item) => (
                <span
                  key={item}
                  className="
                    px-3 py-1 text-sm 
                    bg-card 
                    border border-border 
                    rounded-full 
                    transition-all duration-300
                    hover:border-accent
                    hover:text-accent
                    hover:-translate-y-1
                    cursor-pointer
                  "
                >
                  {item}
                </span>
              ))}
            </motion.div>


            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Link to="/projects">
                <Button>
                  View Projects
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="secondary">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
            {/* <div className="pt-16 flex justify-center">
              <div className="flex flex-col items-center gap-2 text-muted">
                <span className="text-sm">Scroll</span>
                <div className="w-[2px] h-10 bg-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-accent animate-scroll-indicator"></div>
                </div>
              </div>
            </div> */}


          </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
