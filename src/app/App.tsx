import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Stack", "Projects", "Contact"];

const TECH = [
  { name: "React.js", short: "⚛", color: "#61DAFB", desc: "UI Library" },
  { name: "Vite", short: "⚡", color: "#646CFF", desc: "Build Tool" },
  { name: "C#", short: "C#", color: "#B06AE6", desc: "Backend Language" },
  { name: ".NET Ecosystem", short: ".NET", color: "#7C3AED", desc: "App Framework" },
  { name: "Entity Framework", short: "EF", color: "#5C2DC4", desc: "ORM" },
  { name: "LINQ", short: "</>", color: "#06B6D4", desc: "Query Layer" },
  { name: "Bootstrap", short: "B", color: "#8B5CF6", desc: "CSS Framework" },
  { name: "D3.js", short: "D3", color: "#F59E0B", desc: "Data Visualization" },
];

const PROJECTS = [
  {
    id: 1,
    index: "01",
    name: "CareFlow",
    tagline: "Hospital Management System",
    description:
      "A comprehensive healthcare platform engineered with a highly modular architecture. Handles complex clinical workflows — from dynamic patient intake to doctor scheduling and full encounter documentation — with clean separation of concerns at every layer.",
    modules: [
      "Dynamic Patient Dashboards",
      "Doctor Schedule Management",
      "Clinical Encounters & Records",
    ],
    tags: ["React", "C#", ".NET 8", "EF Core", "LINQ", "SQL Server"],
    primaryColor: "#7C3AED",
    accentColor: "#06B6D4",
  },
  {
    id: 2,
    index: "02",
    name: "ConvertX",
    tagline: "High-Conversion E-Commerce Platform",
    description:
      "A performance-first e-commerce platform built for maximum conversion rates. Features optimized multi-step checkout flows, real-time cart state, dynamic product filtering, and a component architecture that keeps bundle size tight and load times fast.",
    modules: [
      "Optimized Checkout Flow",
      "Dynamic Product Catalog",
      "Real-Time Cart & Inventory",
    ],
    tags: ["React", "Bootstrap 5", "Node.js", "REST API", "JWT Auth"],
    primaryColor: "#06B6D4",
    accentColor: "#7C3AED",
  },
];

// ─── Hero Orb ────────────────────────────────────────────────────────────────

function HeroOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute w-72 h-72 md:w-[460px] md:h-[460px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #7c3aed 0%, #06b6d4 55%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orbit ring 1 — purple */}
      <motion.div
        className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border"
        style={{ borderColor: "rgba(124,58,237,0.45)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{
            backgroundColor: "#7c3aed",
            boxShadow: "0 0 14px #7c3aed, 0 0 28px rgba(124,58,237,0.5)",
          }}
        />
      </motion.div>

      {/* Orbit ring 2 — cyan, reverse, dashed */}
      <motion.div
        className="absolute w-72 h-72 md:w-[380px] md:h-[380px] rounded-full"
        style={{ border: "1px dashed rgba(6,182,212,0.3)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute top-2 right-6 w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: "#06b6d4",
            boxShadow: "0 0 10px #06b6d4, 0 0 20px rgba(6,182,212,0.4)",
          }}
        />
      </motion.div>

      {/* Orbit ring 3 — violet, small */}
      <motion.div
        className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border"
        style={{ borderColor: "rgba(167,139,250,0.4)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute bottom-1 right-3 w-2 h-2 rounded-full"
          style={{
            backgroundColor: "#a78bfa",
            boxShadow: "0 0 8px #a78bfa",
          }}
        />
      </motion.div>

      {/* Central sphere */}
      <div
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full z-10 flex-shrink-0"
        style={{
          background:
            "radial-gradient(circle at 33% 28%, #c4b5fd, #7c3aed 42%, #3b1d8f 72%, #0d0720 95%)",
          boxShadow:
            "0 0 28px rgba(124,58,237,0.9), 0 0 56px rgba(124,58,237,0.4), 0 0 90px rgba(124,58,237,0.15)",
        }}
      >
        {/* Highlight shimmer */}
        <div
          className="absolute top-2.5 left-3 w-5 h-2.5 rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Floating tech labels */}
      {[
        { label: "React.js", x: "4%", y: "18%", c: "#61DAFB" },
        { label: ".NET 8", x: "68%", y: "10%", c: "#7C3AED" },
        { label: "C#", x: "82%", y: "52%", c: "#B06AE6" },
        { label: "D3.js", x: "2%", y: "66%", c: "#F59E0B" },
        { label: "EF Core", x: "60%", y: "80%", c: "#06B6D4" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg z-20"
          style={{
            left: item.x,
            top: item.y,
            color: item.c,
            border: `1px solid ${item.c}30`,
            background: `${item.c}12`,
            backdropFilter: "blur(8px)",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.2 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* Floating stat chips */}
      <motion.div
        className="absolute top-6 right-4 md:right-6 z-20 px-4 py-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[10px] text-white/40 font-mono uppercase tracking-wider">
          Projects
        </div>
        <div
          className="text-2xl font-bold text-white mt-0.5"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          20+
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-2 z-20 px-4 py-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-[10px] text-white/40 font-mono uppercase tracking-wider">
          Experience
        </div>
        <div
          className="text-2xl font-bold text-white mt-0.5"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          3+ Yrs
        </div>
      </motion.div>
    </div>
  );
}

// ─── Tech Card ────────────────────────────────────────────────────────────────

function TechCard({
  name,
  short,
  color,
  desc,
}: {
  name: string;
  short: string;
  color: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default select-none"
      style={{
        background: hovered ? `${color}0c` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `${color}45` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 24px ${color}22, 0 8px 32px rgba(0,0,0,0.5)`
          : "0 2px 16px rgba(0,0,0,0.3)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -5 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top glow line on hover */}
      {hovered && (
        <div
          className="absolute top-0 left-4 right-4 h-px rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
      )}

      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold font-mono leading-none"
        style={{
          background: `${color}18`,
          color: color,
          border: `1px solid ${color}35`,
          boxShadow: hovered ? `0 0 18px ${color}45` : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        {short}
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-white/90 leading-tight">
          {name}
        </div>
        <div className="text-xs text-white/38 font-mono mt-1">{desc}</div>
      </div>

      {/* Float animation indicator */}
      <div
        className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full opacity-40"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 4px ${color}`,
        }}
      />
    </motion.div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  reversed,
}: {
  project: (typeof PROJECTS)[number];
  reversed?: boolean;
}) {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${cardHovered ? `${project.primaryColor}35` : "rgba(255,255,255,0.07)"}`,
        boxShadow: cardHovered
          ? `0 0 40px ${project.primaryColor}18, 0 20px 60px rgba(0,0,0,0.6)`
          : "0 4px 40px rgba(0,0,0,0.4)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${project.primaryColor}80 50%, transparent 100%)`,
          opacity: cardHovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />

      <div
        className={`flex flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Visual panel */}
        <div
          className="lg:w-5/12 min-h-[220px] md:min-h-[280px] relative overflow-hidden flex items-center justify-center p-8"
          style={{
            background: `radial-gradient(ellipse at center, ${project.primaryColor}18 0%, transparent 70%)`,
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Big index number */}
          <div
            className="absolute -bottom-4 -right-4 text-[120px] font-extrabold font-mono leading-none select-none pointer-events-none"
            style={{
              color: `${project.primaryColor}12`,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {project.index}
          </div>

          {/* Central icon */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: `${project.primaryColor}22`,
                border: `1px solid ${project.primaryColor}50`,
              }}
              animate={{
                boxShadow: [
                  `0 0 16px ${project.primaryColor}25`,
                  `0 0 36px ${project.primaryColor}55`,
                  `0 0 16px ${project.primaryColor}25`,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code2
                className="w-7 h-7"
                style={{ color: project.primaryColor }}
              />
            </motion.div>

            {/* Mini tag preview */}
            <div className="flex flex-wrap gap-1.5 justify-center max-w-[200px]">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: `${project.accentColor}15`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className="lg:w-7/12 p-8 md:p-10 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span
                  className="text-[11px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: project.primaryColor }}
                >
                  Project {project.index}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-extrabold text-white mt-1 leading-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {project.name}
                </h3>
                <p className="text-sm text-white/45 font-mono mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 flex-shrink-0 mt-1">
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  title="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  title="View Code"
                >
                  <Github className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-sm text-white/55 leading-relaxed">
              {project.description}
            </p>

            {/* Modules */}
            <div className="mt-5 space-y-2.5">
              {project.modules.map((mod) => (
                <div key={mod} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: project.accentColor,
                      boxShadow: `0 0 6px ${project.accentColor}`,
                    }}
                  />
                  <span className="text-sm text-white/68">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.48)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#07070e",
        color: "#e2e8f0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
          background: scrolled ? "rgba(7,7,14,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("about")}
            className="flex items-center gap-2.5"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
              }}
            >
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span
              className="font-bold text-white text-lg tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              devcraft.
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                boxShadow: "0 0 22px rgba(124,58,237,0.45)",
              }}
            >
              Hire Me
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              className="md:hidden transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mx-6 mt-3 rounded-2xl p-4 space-y-1"
            style={{
              background: "rgba(15,15,26,0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all hover:bg-white/5 hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="w-full mt-2 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)" }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative min-h-screen flex items-center pt-28 pb-20"
      >
        {/* Background radials */}
        <div
          className="absolute top-10 left-0 w-[560px] h-[560px] rounded-full opacity-[0.18] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full opacity-[0.13] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center w-full">
          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-8"
              style={{
                border: "1px solid rgba(124,58,237,0.4)",
                background: "rgba(124,58,237,0.1)",
                color: "#a78bfa",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#7c3aed" }}
              />
              Available for Freelance Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Building{" "}
              <span
                style={{
                  background:
                    "linear-gradient(130deg, #c4b5fd 0%, #7c3aed 45%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Scalable,
              </span>
              <br />
              High-Performance
              <br />
              <span style={{ color: "rgba(255,255,255,0.75)" }}>
                Web Experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-[500px]"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              Full-stack freelance engineer specializing in React frontends and
              .NET backends. I turn complex requirements into clean,
              maintainable, production-grade systems that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  boxShadow: "0 0 32px rgba(124,58,237,0.5)",
                }}
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Let's Chat
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { label: "Projects Shipped", value: "20+" },
                { label: "Client Satisfaction", value: "100%" },
                { label: "Years Active", value: "3+" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[440px] md:h-[520px] lg:h-[560px]"
          >
            <HeroOrb />
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────────────────── */}
      <section id="stack" className="py-28 relative">
        <div
          className="absolute inset-x-0 top-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.7), rgba(6,182,212,0.7), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span
              className="text-xs font-mono tracking-[0.2em] uppercase mb-3 block"
              style={{ color: "#7c3aed" }}
            >
              Core Technologies
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              My Tech Stack
            </h2>
            <p
              className="mt-4 max-w-md text-sm md:text-base"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              A curated set of battle-tested technologies I use to ship
              robust, scalable products on time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {TECH.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.065 }}
              >
                <TechCard {...tech} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 relative">
        <div
          className="absolute inset-x-0 top-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.7), rgba(124,58,237,0.7), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span
              className="text-xs font-mono tracking-[0.2em] uppercase mb-3 block"
              style={{ color: "#06b6d4" }}
            >
              Featured Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Selected Projects
            </h2>
            <p
              className="mt-4 max-w-md text-sm md:text-base"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              Real-world systems built for scale, performance, and long-term
              maintainability.
            </p>
          </motion.div>

          <div className="space-y-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / Contact ────────────────────────────────────────────── */}
      <footer id="contact" className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.09] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="text-xs font-mono tracking-[0.2em] uppercase mb-5 block"
              style={{ color: "#7c3aed" }}
            >
              Get In Touch
            </span>

            <h2
              className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Let&apos;s work{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a78bfa, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                together.
              </span>
            </h2>

            <p
              className="text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              Have a project in mind? I'd love to discuss how we can build
              something exceptional — on time and on budget.
            </p>

            <a
              href="mailto:hello@devcraft.io"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-semibold text-white text-base md:text-lg mb-16 transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                boxShadow: "0 0 40px rgba(124,58,237,0.5)",
              }}
            >
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mb-14">
              {[
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Mail, label: "Email", href: "mailto:hello@devcraft.io" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div
              className="h-px w-full max-w-2xl mx-auto mb-8"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  }}
                >
                  <Code2 className="w-3 h-3 text-white" />
                </div>
                <span
                  className="text-sm font-bold text-white/80"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  devcraft.
                </span>
              </div>
              <p
                className="text-xs font-mono"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                © 2024 devcraft. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
