"use client";

import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import OwnProjects from "@/components/OwnProjects";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// Hero section animation - Fade in and slide up
const heroAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Experience section animation - Slide in from left
const experienceAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Projects section animation - Zoom in effect
const projectsAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Skills section animation - Bounce effect
const skillsAnimation = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
};

// Speaking section animation - Slide in from right
// const speakingAnimation = {
//   initial: { x: 100, opacity: 0 },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// Certificates section animation - Fade in and scale
const certificatesAnimation = {
  initial: {
    scale: 0.9,
    opacity: 0,
    y: 30,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Clone section animation
const cloneAnimation = {
  initial: {
    scale: 0.9,
    opacity: 0,
    y: 30,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <Hero />
      <Experience />
      <Projects />
      <OwnProjects />
      <Skills />
      <Certificates />
    </div>
  );
}
