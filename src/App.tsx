import {
  Github,
  Mail,
  ExternalLink,
  Linkedin,
  FileText,
  Menu,
  X,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Snowfall } from "react-snowfall";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const EXPERIENCES = [
  {
    id: 1,
    title: "Internal IT",
    company: "Atreus Global",
    period: "2025 — Present",
    description:
      "Building scalable web applications with React, TypeScript, and modern tooling. Leading frontend architecture decisions and mentoring junior developers.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "GraphQL"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Rupa Aestetika Teknologi Aktual",
    period: "2024 — 2025",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers and backend teams to deliver pixel-perfect interfaces.",
    skills: ["JavaScript", "React", "Vue.js", "SCSS", "REST API"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Wahana Datarindo Sempurna",
    period: "2023 — 2024",
    description:
      "Started my career building websites and learning modern web technologies. Worked on multiple projects ranging from landing pages to full-stack applications.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Sipakat-PBJ",
    description:
      "Integrated monitoring system for government procurement processes with real-time analytics, audit tracking, and collaborative vendor management.",
    image: "sipakatbanner.jpeg",
    tags: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    github: "https://github.com/Indrawasthere/spkmb",
    external: "#",
  },
  {
    id: 2,
    title: "ProveIT",
    description:
      "Multi-layer approval workflow system with Google Drive integration, real-time notifications, and comprehensive document management.",
    image: "proveitbanner.jpeg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/Indrawasthere/approvalsystem",
    external: "#",
  },
  {
    id: 3,
    title: "Hyra",
    description:
      "AI-powered HRIS with Ollama integration for salary recommendations, attendance analytics, and automated CV screening.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["FastAPI", "React", "MongoDB", "Ollama"],
    github: "https://github.com/Indrawasthere/hyra",
    external: "#",
  },
  {
    id: 4,
    title: "Orca POS",
    description:
      "Enterprise-grade POS system with kitchen display, multi-role support, and AI-enhanced development using Claude Sonnet 4.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["Golang", "TanStack", "PostgreSQL", "Docker"],
    github: "https://github.com/Indrawasthere/pointsale",
    external: "#",
  },
  {
    id: 5,
    title: "SweetCommerce",
    description:
      "Modern e-commerce platform with beautiful UI components, built with Lovable and optimized for performance.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Shadcn"],
    github: "https://github.com/Indrawasthere/sweetcommerce",
    external:
      "https://lovable.dev/projects/6281a7d8-f17d-43cd-8628-4826d2ed73a0",
  },
];

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

// --- Components ---

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    >
      <div className="w-full h-full rounded-full border-2 border-white" />
    </motion.div>
  );
}

function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-40 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function RotatingTypewriter({
  texts,
  delay = 0,
}: {
  texts: string[];
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayText(currentText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            // Move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 80,
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, started, texts]);

  return (
    <span>
      {displayText}
      {started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-purple-500"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return (
    <div ref={nodeRef} className="text-4xl font-bold text-purple-600">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

function FloatingCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

function Header({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-black bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent"
        >
          f.dlan
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors relative",
                activeSection === item.id
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600",
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 border-2 border-purple-500 text-purple-600 rounded hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
          >
            <nav className="px-6 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 border-2 border-purple-500 text-purple-600 rounded hover:bg-purple-50 transition-colors"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NumberedHeading({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-800 mb-12"
    >
      {number && (
        <span className="text-purple-500 font-mono text-xl">{number}.</span>
      )}
      <span>{children}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4" />
    </motion.h2>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "work", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-rose-50 to-blue-50 text-gray-800 cursor-none md:cursor-auto">
      <CustomCursor />
      <GradientOrbs />
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Side Navigation with Labels */}
      <nav className="hidden xl:flex fixed left-12 top-0 bottom-0 items-center z-40">
        <div className="space-y-10">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className={cn(
                  "h-0.5 rounded-full transition-all duration-300",
                  activeSection === item.id
                    ? "bg-purple-500 w-16"
                    : "bg-gray-400 w-12 group-hover:bg-purple-400 group-hover:w-14",
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium uppercase tracking-wider transition-all duration-300",
                  activeSection === item.id
                    ? "text-purple-600 opacity-100"
                    : "text-gray-500 opacity-0 group-hover:opacity-100",
                )}
              >
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden lg:flex fixed right-12 bottom-0 flex-col items-center gap-6 pb-8 z-40"
      >
        {[
          {
            icon: <Github size={20} />,
            href: "https://github.com/Indrawasthere",
            label: "GitHub",
          },
          {
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/muhammadfadlanh/",
            label: "LinkedIn",
          },
          {
            icon: <Mail size={20} />,
            href: "mailto:mhmdfdln14@gmail.com",
            label: "Email",
          },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ y: -3, scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-purple-500 transition-colors"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
        <motion.div
          className="w-px h-24 bg-gradient-to-b from-gray-400 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex flex-col justify-center pt-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-purple-500 font-mono mb-6 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900"
          >
            Muhammad Fadlan
          </motion.h1>

          <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold mb-8 text-gray-600">
            <RotatingTypewriter
              texts={[
                "Just a guy who addicted with code.",
                "Full-Stack Developer.",
                "Ctrl+Z is my best friend.",
                "Problem solver. Code enthusiast.",
                "Coffee-powered developer.",
              ]}
              delay={800}
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-12"
          >
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            onClick={() => scrollToSection("work")}
            className="group px-8 py-4 border-2 border-purple-500 text-purple-600 rounded font-mono hover:bg-purple-50 transition-all w-fit shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Check out my work!</span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-500 to-rose-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.1 }}
            />
          </motion.button>
        </motion.section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-24">
          <NumberedHeading>About Me</NumberedHeading>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Hello! I'm Fadlan, a software engineer based in Jakarta,
                Indonesia. I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
              </p>

              <p>
                My interest in web development started back in 2019 when I
                decided to try editing custom themes — turns out hacking
                together a custom theme taught me a lot about HTML & CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at
                a start-up, a huge corporation, and a digital agency. My main
                focus these days is building accessible, inclusive products and
                digital experiences.
              </p>

              <p className="text-gray-600">
                Here are a few technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-purple-500"
                    >
                      ▹
                    </motion.span>
                    <span className="text-gray-700">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src="/avatar.png"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div className="absolute inset-0 bg-purple-500 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-purple-400 rounded-lg"
                animate={{
                  x: [16, 12, 16],
                  y: [16, 12, 16],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-24">
          <NumberedHeading number="02">Where I've Worked</NumberedHeading>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <FloatingCard key={exp.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors">
                      {exp.title}{" "}
                      <span className="text-purple-500">| {exp.company}</span>
                    </h3>
                  </div>

                  <p className="text-sm font-mono text-gray-600 mb-4">
                    {exp.period}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-mono cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="min-h-screen py-24">
          <NumberedHeading number="03">Some Things I've Built</NumberedHeading>

          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "grid md:grid-cols-12 gap-6 items-center",
                  index % 2 === 1 && "md:grid-flow-dense",
                )}
              >
                <motion.div
                  className={cn(
                    "md:col-span-7 relative group",
                    index % 2 === 1 && "md:col-start-6",
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-linear-to-br from-purple-500/40 to-rose-500/40 mix-blend-multiply"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                <div
                  className={cn(
                    "md:col-span-5 space-y-4",
                    index % 2 === 1
                      ? "md:col-start-1 md:row-start-1 md:text-left"
                      : "md:text-right",
                  )}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-purple-500 font-mono text-sm"
                  >
                    Featured Project
                  </motion.p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  <div
                    className={cn(
                      "flex flex-wrap gap-2 font-mono text-sm text-gray-600",
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end",
                    )}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "flex gap-4",
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end",
                    )}
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ y: -3, scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-purple-500 transition-colors"
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={project.external}
                      whileHover={{ y: -3, scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-purple-500 transition-colors"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-500 font-mono"
            >
              04. What's Next?
            </motion.p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open. I'll try
              my best to get back to you!
            </p>
            <motion.a
              href="mailto:mhmdfdln14@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              className="inline-block px-8 py-4 border-2 border-purple-500 text-purple-600 rounded font-mono hover:bg-purple-50 transition-all shadow-lg"
            >
              Say Hello
            </motion.a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 text-sm font-mono"
          >
            Warm welcome from Jakarta, Indonesia!
          </motion.p>
        </footer>
      </main>
    </div>
  );
}
