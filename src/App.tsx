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
import { useState, useEffect, useRef, useCallback } from "react";
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
    period: "Aug 2025 — Present",
    location: "Jakarta, Indonesia",
    description:
      "Managing IT operations with 99% uptime. Built a real-time recruitment dashboard with React & Node.js, improved asset tracking efficiency by 40%, and delivered end-to-end technical support with 98% employee satisfaction.",
    skills: ["React", "Node.js", "TypeScript", "Metabase"],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "PT Rupa Aestetika Teknologi Aktual (RATA)",
    period: "Aug 2024 — Aug 2025",
    location: "Jakarta, Indonesia",
    description:
      "Developed dental clinic management systems that cut admin work by 30%. Optimized IT infrastructure across two clinics, boosting uptime by 45%, and led secure system migration projects on time and within budget.",
    skills: ["React", "PostgreSQL", "App Script", "Supabase"],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "PT Wahana Datarindo Sempurna",
    period: "Oct 2023 — Aug 2024",
    location: "Jakarta, Indonesia",
    description:
      "Built Warehouse Management System (WMS) with RFID integration, improving inventory accuracy by 65%. Configured barcode/RFID hardware and delivered complete hardware+software solutions for enterprise clients.",
    skills: ["Laravel", "React", "MySQL", "Hardware Integration"],
  },
  {
    id: 4,
    title: "IT Support Intern",
    company: "Ultra Voucher",
    period: "2022 — 2023",
    location: "Jakarta, Indonesia",
    description:
      "Set up office networks and automated voucher sales systems with JavaScript & Python, reducing errors by 40-60%. Provided technical support and collaborated with dev teams on system improvements.",
    skills: ["Networking", "JavaScript", "Technical Support"],
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
    image: "hyrabanner.png",
    tags: ["React", "FastAPI", "MongoDB", "Ollama"],
    github: "https://github.com/Indrawasthere/hyra",
    external: "#",
  },
  {
    id: 4,
    title: "Orca POS",
    description:
      "Enterprise-grade POS system with kitchen display, multi-role support, and AI-enhanced development using Claude Sonnet 4.",
    image: "orcabanner.png",
    tags: ["React", "Golang", "TanStack", "PostgreSQL"],
    github: "https://github.com/Indrawasthere/pointsale",
    external: "#",
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
  isScrolling,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isScrolling: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // threshold lebih kecil
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 supports-backdrop-blur:bg-white/80",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          className="relative group"
        >
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-br from-purple-600 to-rose-500 group-hover:w-full transition-all duration-300" />
        </motion.button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "text-sm font-medium transition-colors relative px-1 py-2",
                activeSection === item.id
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600",
              )}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-full bg-purple-100 rounded-lg z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  aria-hidden="true"
                />
              )}
            </motion.button>
          ))}

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsResumeHovered(true)}
            onMouseLeave={() => setIsResumeHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2.5 border border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2 overflow-hidden group"
            aria-label="Download resume (PDF)"
          >
            <motion.div
              animate={{ rotate: isResumeHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FileText size={16} />
            </motion.div>
            <span className="font-medium">Resume</span>

            <motion.span
              animate={{ y: isResumeHovered ? [0, 4, 0] : 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ↓
            </motion.span>

            {/* Hover Effect */}
            <span className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
          >
            <nav className="px-6 py-6 space-y-3" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "block w-full text-left text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-lg hover:bg-gray-50",
                    activeSection === item.id && "bg-purple-50 text-purple-600",
                  )}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                    {item.label}
                  </div>
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="block w-full text-center px-4 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium mt-4"
              >
                <div className="flex items-center justify-center gap-2">
                  <FileText size={18} />
                  Download Resume
                </div>
              </motion.a>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center gap-4 mb-12"
    >
      {number && (
        <motion.span
          className="text-purple-500 font-mono text-xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {number}.
        </motion.span>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        {children}
      </h2>
      <div className="flex-1 h-px bg-linear-to-br from-gray-300 via-gray-200 to-transparent ml-4" />
    </motion.div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["hero", "about", "experience", "work", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Scroll detection untuk isScrolling state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-rose-50/50 to-blue-50 text-gray-800 cursor-none md:cursor-auto overflow-x-hidden">
      <CustomCursor />
      <GradientOrbs />
      <Snowfall
        color="#e9d5ff"
        snowflakeCount={30}
        speed={[0.5, 1.5]}
        wind={[-0.5, 0.5]}
      />
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolling={isScrolling}
      />

      {/* Side Navigation with Labels - Enhanced */}
      <nav className="hidden xl:flex fixed left-8 2xl:left-12 top-0 bottom-0 items-center z-40">
        <div className="space-y-8">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-4"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to ${item.label} section`}
            >
              <motion.div
                className={cn(
                  "h-0.5 rounded-full transition-all duration-300 relative",
                  activeSection === item.id
                    ? "bg-linear-to-r from-purple-500 to-rose-500 w-20"
                    : "bg-gray-400 w-12 group-hover:bg-purple-400 group-hover:w-16",
                )}
              >
                {/* Active indicator dot */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="sideNavDot"
                    className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-purple-500"
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </motion.div>
              <motion.span
                className={cn(
                  "text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap",
                  activeSection === item.id
                    ? "text-purple-600 opacity-100 font-semibold"
                    : "text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-gray-700",
                )}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: activeSection === item.id ? 1 : 0,
                  x: activeSection === item.id ? 0 : -10,
                }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Social Links - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="hidden lg:flex fixed right-8 2xl:right-12 bottom-0 flex-col items-center gap-6 pb-8 z-40"
      >
        {[
          {
            icon: <Github size={20} />,
            href: "https://github.com/Indrawasthere",
            label: "GitHub",
            color: "hover:text-gray-900",
          },
          {
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/muhammadfadlanh/",
            label: "LinkedIn",
            color: "hover:text-blue-600",
          },
          {
            icon: <Mail size={20} />,
            href: "mailto:mhmdfdln14@gmail.com",
            label: "Email",
            color: "hover:text-rose-600",
          },
        ].map((social, index) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.2,
                transition: { type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-600 ${social.color} transition-colors relative p-2 group`}
              aria-label={social.label}
            >
              {social.icon}
              {/* Tooltip on hover */}
              <span className="absolute -left-24 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.label}
              </span>
            </motion.a>
          </motion.div>
        ))}
        <motion.div
          className="w-px h-24 bg-linear-to-b from-gray-400 via-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <motion.section className="min-h-screen flex flex-col justify-center pt-20 bg-linear-to-b from-white/30 to-transparent">
          <motion.p className="text-purple-500/80 font-mono mb-6 text-sm md:text-base">
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4
                                bg-linear-to-r from-gray-800/90 to-gray-700/90 bg-clip-text text-transparent"
          >
            Muhammad Fadlan
          </motion.h1>

          <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold mb-8 text-gray-700/80">
            <RotatingTypewriter
              texts={[
                "A guy who's addicted to code.",
                "Just regular developer.",
                "Ctrl+Z is my best friend.",
                "Expert Googler with panda eyes.",
                "Coffee-powered developer.",
              ]}
              delay={800}
            />
          </h2>

          <motion.p className="text-lg text-gray-600/90 max-w-2xl leading-relaxed mb-12">
            My finale chapter of life is{" "}
            <motion.code
              whileHover={{
                scale: 1.02,
                y: -3,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="px-4 py-3 bg-white/30 backdrop-blur-md rounded-xl font-mono
                         text-sm border border-white/40 shadow-sm
                         group relative overflow-hidden cursor-pointer transition-all duration-300
                         hover:bg-white/50 hover:border-purple-200/60 hover:shadow-lg"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-100/30 to-rose-100/30"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-0.5 bg-linear-to-r from-purple-400/20 to-rose-400/20 rounded-xl blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10">
                <motion.span
                  className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ color: "#4f46e5" }} // indigo-600
                >
                  git commit -m
                </motion.span>{" "}
                <motion.span
                  className="text-purple-600/80 group-hover:text-purple-700 transition-colors duration-300"
                  whileHover={{
                    color: "#7c3aed", // purple-600
                    textShadow: "0 0 8px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  "mom, i finally did it!"
                </motion.span>
              </span>

              {/* Terminal cursor blink */}
              <motion.span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500/70"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                whileHover={{ opacity: 0 }}
              >
                |
              </motion.span>
            </motion.code>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              rotateX: 5,
              boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("work")}
            className="group px-8 py-4 bg-white border-2 border-purple-500 text-purple-600 rounded-xl font-mono hover:bg-purple-50 transition-all w-fit shadow-2xl relative overflow-hidden transform-gpu"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="font-semibold">Check out my work!</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-purple-500"
              >
                →
              </motion.div>
            </div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />

            {/* 3D depth effect */}
            <div className="absolute inset-0 bg-linear-to-b from-white/50 to-transparent rounded-xl" />
          </motion.button>
        </motion.section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-24 scroll-mt-24">
          <NumberedHeading number="">About Me</NumberedHeading>{" "}
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Hello! I'm Fadlan, a software engineer based in Jakarta,
                Indonesia. I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
              </p>

              <p>
                My tech journey started in 2016 when I discovered programming
                through Java phones and internet cafes. That curiosity led me to
                web development, and by 9th grade I was already building my
                school’s enrollment website and helping set up exam servers — my
                first real taste of IT responsibility.
              </p>

              <p>
                Fast-forward to today, and I've worked with the Ministry of
                Agriculture as a freelance developer, then moved through
                startups, agencies, and corporate roles — building everything
                from RFID-integrated warehouse systems to real-time dashboards.
              </p>

              <p>
                Currently, I'm studying Information Systems while exploring AI
                and full-stack development, focused on creating solutions that
                bridge software, hardware, and impact.
              </p>

              <p className="text-gray-600 font-medium">
                Here are a few technologies I've been working with recently:
              </p>

              {/* TECH STACK - Improved */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                ].map((tech) => (
                  <motion.div
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.03,
                      color: "#7c3aed",
                    }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2,
                      }}
                      className="text-purple-500 text-lg"
                    >
                      ▸
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors font-mono text-sm">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* PROFILE IMAGE - Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.03,
                rotate: 2,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <div className="aspect-square">
                  <img
                    src="/avatar.png"
                    alt="Muhammad Fadlan - Software Engineer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>

                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-purple-600/20 via-transparent to-transparent"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Border */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/50 rounded-xl"
                animate={{
                  x: [0, 8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-24 scroll-mt-24">
          <NumberedHeading number="02">Where I've Worked</NumberedHeading>

          <div className="space-y-8 md:space-y-12">
            {" "}
            {/* Responsive spacing */}
            {EXPERIENCES.map((exp, index) => (
              <FloatingCard key={exp.id} delay={index * 0.1}>
                <motion.article //
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm
                             shadow-lg hover:shadow-2xl transition-all
                             border border-white/30"
                >
                  {/* HEADER */}
                  <header
                    className="flex flex-col md:flex-row md:items-center
                                   justify-between gap-3 mb-4"
                  >
                    <div>
                      <h3
                        className="text-xl font-bold text-gray-900
                                   group-hover:text-purple-600 transition-colors"
                      >
                        {exp.title}{" "}
                        <span className="text-purple-600">
                          - {exp.company}
                        </span>{" "}
                      </h3>
                    </div>

                    <p
                      className="text-sm font-mono text-gray-600 bg-gray-100
                                px-3 py-1 rounded-full inline-block w-fit"
                    >
                      {exp.period}
                    </p>
                  </header>

                  {/* DESCRIPTION */}
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* SKILLS/TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          delay: i * 0.03,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#7c3aed",
                          color: "white",
                        }}
                        className="px-3 py-1 bg-purple-100 text-purple-700
                                 rounded-full text-sm font-medium cursor-pointer
                                 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
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
          className="min-h-screen flex items-center justify-center py-24 scroll-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center space-y-8 px-6"
          >
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-purple-500 font-mono text-sm md:text-base tracking-wider"
            >
              04. What's Next?
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            >
              Let's get in touch
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto"
            >
              I'm currently exploring new opportunities in software development
              and related fields. Whether you have an exciting project, a job
              opportunity, or just want to chat about tech — my inbox is always
              open. I'll do my best to get back to you!
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href="mailto:mhmdfdln14@gmail.com"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
                  backgroundColor: "#7c3aed",
                  color: "white",
                  borderColor: "#7c3aed",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-500
                           text-purple-600 rounded-lg font-mono text-lg font-semibold
                           hover:bg-purple-500 hover:text-white transition-all duration-300
                           shadow-xl hover:shadow-2xl group"
              >
                <span>👋</span>
                Say Hello
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Optional Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-6 pt-12"
            >
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/Indrawasthere",
                  icon: <Github size={30} />,
                },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/in/muhammadfadlanh",
                  icon: <Linkedin size={30} />,
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-100 hover:bg-purple-100
                             text-gray-700 hover:text-purple-600 transition-all
                             border border-gray-200 hover:border-purple-300
                             text-xl shadow-sm hover:shadow-md"
                  aria-label={`Visit my ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-16 text-center border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              className="text-gray-600 text-sm font-mono"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="inline-block animate-pulse">
                Warm welcome from Jakarta, Indonesia!
              </span>
            </motion.p>

            <p className="text-gray-500 text-xs font-mono max-w-md mx-auto px-4">
              Powered by coffee, debugged with tears.
              <br />
              <code className="text-gray-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </code>
            </p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
