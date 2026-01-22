import {
  Github,
  Mail,
  ExternalLink,
  Linkedin,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind", "ApexCharts"],
    github: "https://github.com/Indrawasthere/spkmb",
    external: "#",
  },
  {
    id: 2,
    title: "ProveIT",
    description:
      "Multi-layer approval workflow system with Google Drive integration, real-time notifications, and comprehensive document management.",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80",
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
  { id: "about", label: "About", number: "" },
  { id: "experience", label: "Experience", number: "" },
  { id: "work", label: "Work", number: "" },
  { id: "contact", label: "Contact", number: "" },
];

// --- Components ---

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
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-linear-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent"
        >
          F.
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600",
              )}
            >
              <span className="text-purple-500 mr-1">{item.number}.</span>
              {item.label}
            </motion.button>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 border-2 border-purple-500 text-purple-600 rounded hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <span className="text-purple-500 mr-2">{item.number}.</span>
                  {item.label}
                </button>
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
  number: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-800 mb-12">
      <span className="text-purple-500 font-mono text-xl">{number}.</span>
      <span>{children}</span>
      <div className="flex-1 h-px bg-linear-to-r from-gray-300 to-transparent ml-4" />
    </h2>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-rose-50 to-blue-50 text-gray-800">
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
          { icon: <Mail size={20} />, href: "#", label: "Email" },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ y: -3, scale: 1.1 }}
            className="text-gray-600 hover:text-purple-500 transition-colors"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-px h-24 bg-linear-to-b from-gray-400 to-transparent" />
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
            Muhammad Fadlan.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-2xl lg:text-5xl font-bold mb-8 text-gray-600"
          >
            Just a guy who addicted with code.
          </motion.h2>

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
              boxShadow: "0 10px 40px rgba(168, 85, 247, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("work")}
            className="px-8 py-4 border-2 border-purple-500 text-purple-600 rounded font-mono hover:bg-purple-50 transition-all w-fit shadow-lg"
          >
            Check out my work!
          </motion.button>
        </motion.section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-24">
          <NumberedHeading number="">About Me</NumberedHeading>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
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
                ].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-purple-500">▹</span>
                    <span className="text-gray-700">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src="/avatar.png"
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-purple-500 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
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
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors">
                    {exp.title}{" "}
                    <span className="text-purple-500"> | {exp.company}</span>
                  </h3>
                </div>

                <p className="text-sm font-mono text-gray-600 mb-4">
                  {exp.period}
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "grid md:grid-cols-12 gap-6 items-center",
                  index % 2 === 1 && "md:grid-flow-dense",
                )}
              >
                <div
                  className={cn(
                    "md:col-span-7 relative group",
                    index % 2 === 1 && "md:col-start-6",
                  )}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/40 to-rose-500/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                </div>

                <div
                  className={cn(
                    "md:col-span-5 space-y-4",
                    index % 2 === 1
                      ? "md:col-start-1 md:row-start-1 md:text-left"
                      : "md:text-right",
                  )}
                >
                  <p className="text-purple-500 font-mono text-sm">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

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
                      whileHover={{ y: -3 }}
                      className="text-gray-600 hover:text-purple-500 transition-colors"
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={project.external}
                      whileHover={{ y: -3 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center space-y-8"
          >
            <p className="text-purple-500 font-mono">04. What's Next?</p>
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
                boxShadow: "0 10px 40px rgba(168, 85, 247, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-purple-500 text-purple-600 rounded font-mono hover:bg-purple-50 transition-all shadow-lg"
            >
              Say Hello
            </motion.a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-gray-600 text-sm font-mono">
            Designed & Built by Muhammad Fadlan Hafiz
          </p>
        </footer>
      </main>
    </div>
  );
}
