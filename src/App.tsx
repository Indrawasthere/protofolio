import { Github, Twitter, Mail, ArrowUpRight, Code2, Cpu, Globe, Layers, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ParticleBackground from './components/ParticleBackground';

const AVATAR_URL = "https://codebanana-1308581983.cos.na-siliconvalley.myqcloud.com/generated_images/20251218/192038/img_20251218192018_93368.png";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data --- 

const WORKS = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "AI-powered analytics platform for SaaS growth.",
    tech: ["Next.js", "Tailwind", "OpenAI"],
    link: "#",
    icon: <Layers size={20} />,
    color: "bg-indigo-500/10 text-indigo-400",
    image: "https://codebanana-1308581983.cos.na-siliconvalley.myqcloud.com/generated_images/20251218/193019/img_20251218193011_56201.png"
  },
  {
    id: 2,
    title: "Zenith UI Kit",
    description: "A comprehensive React component library for enterprise.",
    tech: ["React", "TypeScript", "Storybook"],
    link: "#",
    icon: <Code2 size={20} />,
    color: "bg-emerald-500/10 text-emerald-400",
    image: "https://codebanana-1308581983.cos.na-siliconvalley.myqcloud.com/generated_images/20251218/193036/img_20251218193019_2578.png"
  },
  {
    id: 3,
    title: "CryptoWatch",
    description: "Real-time cryptocurrency tracking mobile application.",
    tech: ["React Native", "GraphQL"],
    link: "#",
    icon: <Cpu size={20} />,
    color: "bg-amber-500/10 text-amber-400",
    image: "https://codebanana-1308581983.cos.na-siliconvalley.myqcloud.com/generated_images/20251218/193045/img_20251218193036_15374.png"
  },
  {
    id: 4,
    title: "Global Reach",
    description: "Localization engine for static site generators.",
    tech: ["Rust", "WASM"],
    link: "#",
    icon: <Globe size={20} />,
    color: "bg-rose-500/10 text-rose-400",
    image: "https://codebanana-1308581983.cos.na-siliconvalley.myqcloud.com/generated_images/20251218/193054/img_20251218193046_19567.png"
  }
];

const POSTS = [
  {
    id: 1,
    title: "The Art of Invisible Design",
    date: "2025-12-12",
    excerpt: "Why the best interfaces are the ones you don't notice. Exploring the psychology behind seamless user interactions.",
    tags: ["Design", "UX"]
  },
  {
    id: 2,
    title: "Modern State Management",
    date: "2025-11-28",
    excerpt: "Moving beyond Redux. A look at Zustand, Jotai, and React Context in 2025.",
    tags: ["Dev", "React"]
  },
  {
    id: 3,
    title: "Why I Chose TypeScript",
    date: "2025-11-15",
    excerpt: "A deep dive into type safety and how it dramatically improves developer velocity in large teams.",
    tags: ["TypeScript"]
  }
];

// --- Components ---

export default function App() {
  return (
    <div className="h-screen w-full bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Fixed Header/Nav (Optional) */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
        <span className="font-bold text-xl tracking-tighter text-slate-200">AM.</span>
        <div className="flex gap-4 pointer-events-auto">
          <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
        </div>
      </nav>

      {/* 1. Hero Section */}
      <PageSection>
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full flex flex-col-reverse md:flex-row gap-12 items-center md:items-start justify-between"
        >
          <div className="space-y-8 max-w-lg text-center md:text-left">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Open to work
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Alex Morgan
              </h1>
              <p className="text-xl text-slate-400 font-medium">
                Design Engineer & <br/> Creative Developer
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              Crafting digital experiences at the intersection of 
              <span className="text-indigo-400 font-medium"> art</span> and 
              <span className="text-emerald-400 font-medium"> code</span>.
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
                Contact Me
              </button>
              <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors">
                View Work
              </button>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-48 h-48 md:w-64 md:h-64 shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-emerald-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img
              src={AVATAR_URL}
              alt="Alex Morgan"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-900/50 shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <ChevronDown />
        </motion.div>
      </PageSection>

      {/* 2. Works Section */}
      <PageSection>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full space-y-12"
        >
          <SectionTitle>Selected Works</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKS.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <WorkCard work={work} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* 3. Writing Section */}
      <PageSection>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: false }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl w-full space-y-12"
        >
          <SectionTitle>Recent Thoughts</SectionTitle>
          <div className="space-y-8">
            {POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ArticleCard post={post} />
              </motion.div>
            ))}
          </div>
          <div className="pt-8 flex justify-center">
             <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                Read Archive <ArrowUpRight size={16} />
             </a>
          </div>
        </motion.div>
      </PageSection>

      {/* 4. Contact/Footer Section */}
      <PageSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full text-center space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's build something <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                extraordinary
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              I'm currently available for freelance projects and open source collaborations.
            </p>
          </div>
          
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105"
          >
            <Mail className="text-indigo-600" />
            Say Hello
          </a>

          <footer className="pt-24 flex flex-col gap-4 items-center text-slate-600 text-sm">
             <div className="flex gap-8">
               <FooterLink href="#">Twitter</FooterLink>
               <FooterLink href="#">LinkedIn</FooterLink>
               <FooterLink href="#">GitHub</FooterLink>
             </div>
             <p>© 2025 Alex Morgan. Crafted with ❤️ and CodeBanana.</p>
          </footer>
        </motion.div>
      </PageSection>
    </div>
  );
}

// --- Helper Components ---

function PageSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-10 min-h-screen w-full flex items-center justify-center p-6 md:p-12 snap-start">
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-3">
      <span className="w-8 h-[2px] rounded-full bg-indigo-500" />
      {children}
    </h2>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-indigo-400 transition-colors font-medium">
      {children}
    </a>
  );
}

function WorkCard({ work }: { work: typeof WORKS[0] }) {
  return (
    <a 
      href={work.link}
      className="group block rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm overflow-hidden"
    >
      <div className="aspect-video w-full overflow-hidden border-b border-slate-800/50">
        <img 
          src={work.image} 
          alt={work.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={cn("p-2 rounded-lg bg-slate-800/50 text-slate-400", work.color.split(' ')[1])}>
            {work.icon}
          </div>
          <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
        </div>
        <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-2">
          {work.title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm mb-4">
          {work.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {work.tech.map(t => (
            <span key={t} className="text-xs font-medium text-slate-500 bg-slate-950/50 px-3 py-1.5 rounded-full border border-slate-800">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function ArticleCard({ post }: { post: typeof POSTS[0] }) {
  return (
    <article className="group cursor-pointer p-6 rounded-2xl border border-transparent hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-3">
        <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>
        <time className="text-sm text-slate-500 font-mono tabular-nums shrink-0 px-3 py-1 rounded-full bg-slate-900/50">
          {post.date}
        </time>
      </div>
      <p className="text-slate-400 leading-relaxed text-lg mb-4 max-w-2xl">
        {post.excerpt}
      </p>
      <div className="flex gap-3">
        {post.tags.map(tag => (
          <span key={tag} className="text-sm text-indigo-400/80 font-medium hover:text-indigo-300">#{tag}</span>
        ))}
      </div>
    </article>
  );
}