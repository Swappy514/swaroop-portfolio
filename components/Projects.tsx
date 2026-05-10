"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const filters = [
  "All",
  "Python",
  "SQL / DB",
  "JavaScript",
  "Responsive",
  "Automation",
  "In Progress",
];

const projects = [
  {
    id: 1,
    num: "001",
    name: "JavaScript 35+ Projects",
    description:
      "A collection of 35+ mini JavaScript projects — Weather App, Music Player, Quiz Game, Snake Game, Password Generator and much more. Pure JS, no frameworks, big impact.",
    tags: ["JavaScript", "ES6+", "HTML5", "CSS3", "DOM APIs"],
    github: "https://github.com/Swappy514/JavaScript-Projects",
    live: null,
    status: "complete",
    size: "hero",
    filter: ["JavaScript"],
    image: "/projects/JS-35+Projects.png",
    gradient: "linear-gradient(135deg, #1a1400, #2a2000)",
  },
  {
    id: 2,
    num: "002",
    name: "Food Munch",
    description:
      "Responsive restaurant website with landing page, menu explorer and Bootstrap modals.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive"],
    github: "https://github.com/Swappy514/food-much",
    live: null,
    status: "complete",
    size: "normal",
    filter: ["Responsive"],
    image: "/projects/Food-much-Responsive-website.png",
    gradient: "linear-gradient(135deg, #1a0a00, #2a1500)",
  },
  {
    id: 3,
    num: "003",
    name: "AI Resume Evaluator",
    description:
      "Make.com workflow that evaluates resumes using AI and delivers results via email and Telegram.",
    tags: ["Make.com", "AI Agents", "Telegram", "Automation"],
    github: null,
    live: null,
    status: "complete",
    size: "normal",
    filter: ["Automation"],
    image: "/projects/AI-Resume-Evaluator-Bot.png",
    gradient: "linear-gradient(135deg, #0a0018, #14002a)",
  },
  {
    id: 4,
    num: "004",
    name: "Flask TODO App",
    description:
      "Full-stack task manager with Flask, user authentication, CRUD ops and SQLAlchemy ORM.",
    tags: ["Python", "Flask", "SQLAlchemy", "Bootstrap"],
    github: "https://github.com/Swappy514/Flask-TODO-APP",
    live: null,
    status: "complete",
    size: "normal",
    filter: ["Python"],
    image: "/projects/Flask-TODO-app.png",
    gradient: "linear-gradient(135deg, #1a0800, #2a1000)",
  },
  {
    id: 5,
    num: "005",
    name: "SmartGrocery SQL",
    description:
      "Complete MySQL backend for hyperlocal e-commerce with schema, order tracking and analytics.",
    tags: ["MySQL", "SQL", "DBMS", "Analytics"],
    github: "https://github.com/Swappy514/SmartGrocery_SQL_Backend",
    live: null,
    status: "complete",
    size: "normal",
    filter: ["SQL / DB"],
    image: "/projects/Smart-grocery-backend.png",
    gradient: "linear-gradient(135deg, #001a08, #002a10)",
  },
  {
    id: 6,
    num: "006",
    name: "RealMart Power BI",
    description:
      "Retail analytics dashboard — $83M+ sales, 28K+ orders, geographic mapping and category breakdown.",
    tags: ["Power BI", "Analytics", "Kaggle", "DAX"],
    github: null,
    live: null,
    status: "complete",
    size: "normal",
    filter: ["SQL / DB"],
    image: "/projects/PowerBI.png",
    gradient: "linear-gradient(135deg, #000818, #001030)",
  },
  {
    id: 7,
    num: "007",
    name: "Chat Web App",
    description:
      "Real-time chat with React, live messaging and user rooms. In active development.",
    tags: ["React", "JavaScript", "CSS3"],
    github: null,
    live: null,
    status: "progress",
    size: "normal",
    filter: ["In Progress", "JavaScript"],
    image: null,
    gradient: "linear-gradient(135deg, #0a0a1a, #141428)",
  },
  {
    id: 8,
    num: "008",
    name: "Clothing MERN App",
    description:
      "Full-stack clothing store on MERN with product listings, cart and authentication.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: null,
    live: null,
    status: "progress",
    size: "normal",
    filter: ["In Progress"],
    image: null,
    gradient: "linear-gradient(135deg, #180010, #280018)",
  },
];

function HeroCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="hero-card"
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        background: project.gradient,
        height: "340px",
        cursor: "none",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "transform 0.4s, box-shadow 0.4s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 32px 64px rgba(0,0,0,0.8)"
          : "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top border animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, transparent, #ff4500, #ffb700, #ff4500, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Image */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: hovered ? 0.7 : 0.55,
            transition: "opacity 0.4s, transform 0.5s",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
          sizes="100vw"
        />
      )}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.1) 100%)",
        }}
      />

      {/* Content at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 28px",
          zIndex: 5,
        }}
      >
        <div
          className="hero-content"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Left side */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--font-inter)",
                fontSize: "8px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #ff4500, #ffb700)",
                color: "#000",
                padding: "3px 10px",
                borderRadius: "3px",
                letterSpacing: "2px",
                marginBottom: "10px",
              }}
            >
              ⭐ FEATURED PROJECT
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "6px",
                lineHeight: 1.1,
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#888",
                fontFamily: "var(--font-inter)",
                maxWidth: "500px",
                lineHeight: 1.7,
              }}
            >
              {project.description}
            </div>
          </div>

          {/* Right side */}
          <div
            className="hero-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "flex-end",
            }}
          >
            <div
              className="hero-tags"
              style={{
                display: "flex",
                gap: "6px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "9px",
                    border: "1px solid rgba(255,130,0,0.25)",
                    color: "#cc7733",
                    padding: "2px 8px",
                    borderRadius: "3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                whileHover={{ y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000",
                  background: "linear-gradient(135deg, #ff4500, #ffb700)",
                  padding: "8px 18px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  cursor: "none",
                }}
              >
                <FaGithub size={12} />
                View on GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NormalCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      style={{
        position: "relative",
        background: "#161616",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.4s, box-shadow 0.4s, border-color 0.3s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 48px rgba(0,0,0,0.8)"
          : "0 4px 16px rgba(0,0,0,0.3)",
        borderColor: hovered
          ? "rgba(255,130,0,0.25)"
          : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Top border animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, transparent, #ff4500, #ffb700, #ff4500, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Hover overlay */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,69,0,0.04), transparent 60%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}

      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "160px",
          overflow: "hidden",
          background: project.gradient,
          flexShrink: 0,
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              opacity: hovered ? 0.85 : 0.65,
              transition: "opacity 0.4s, transform 0.5s",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              opacity: 0.08,
            }}
          >
            🔨
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(to top, #161616, transparent)",
            pointerEvents: "none",
          }}
        />

        {project.status === "progress" && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontFamily: "var(--font-inter)",
              fontSize: "8px",
              fontWeight: 700,
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.4)",
              padding: "2px 8px",
              borderRadius: "3px",
              background: "rgba(34,197,94,0.08)",
              zIndex: 3,
              letterSpacing: "1px",
            }}
          >
            BUILDING
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "16px 20px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "9px",
            background: "linear-gradient(135deg, #ff4500, #ffb700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "4px",
            letterSpacing: "2px",
          }}
        >
          PROJECT {project.num}
        </div>

        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            fontWeight: 700,
            color: "#f0f0f0",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </div>

        <div
          style={{
            fontSize: "11px",
            color: "#555",
            lineHeight: 1.75,
            marginBottom: "12px",
            fontFamily: "var(--font-inter)",
            flex: 1,
          }}
        >
          {project.description}
        </div>

        <div
          style={{
            display: "flex",
            gap: "4px",
            flexWrap: "wrap",
            marginBottom: "12px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                border: "1px solid rgba(255,130,0,0.2)",
                color: "#cc7733",
                padding: "2px 7px",
                borderRadius: "3px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "7px" }}>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              whileHover={{ y: -2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                color: "#ff9944",
                background: "rgba(255,85,0,0.08)",
                border: "1px solid rgba(255,130,0,0.2)",
                padding: "5px 11px",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "none",
              }}
            >
              <FaGithub size={11} />
              GitHub
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              whileHover={{ y: -2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                color: "#ff9944",
                background: "rgba(255,85,0,0.08)",
                border: "1px solid rgba(255,130,0,0.2)",
                padding: "5px 11px",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "none",
              }}
            >
              <FaExternalLinkAlt size={10} />
              Live
            </motion.a>
          )}
          {!project.github && !project.live && (
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                color: "#333",
                fontStyle: "italic",
              }}
            >
              {project.status === "progress"
                ? "In development..."
                : "Private project"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter((p) =>
    activeFilter === "All" ? true : p.filter.includes(activeFilter),
  );

  const heroProject = filtered.find((p) => p.size === "hero");
  const normalProjects = filtered.filter((p) => p.size !== "hero");
  const visibleNormal = showAll ? normalProjects : normalProjects.slice(0, 5);

  return (
    <section
      id="projects"
      style={{ padding: "100px 48px", background: "#080808" }}
    >
      <style>{`
        .normal-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-top: 14px;
      }
      @media (max-width: 900px) {
        .normal-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 580px) {
        .normal-grid {
          grid-template-columns: 1fr;
        }
      #projects {
        padding: 60px 20px !important;
      }
      .hero-card {
        height: 460px !important;
      }
      .hero-content {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 12px !important;
      }
      .hero-right {
        align-items: flex-start !important;
        width: 100% !important;
      }
      .hero-tags {
        justify-content: flex-start !important;
      }
    }
  `}</style>

      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "10px",
            background: "linear-gradient(135deg, #ff4500, #ffb700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "4px",
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          03 / Featured Work
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(36px, 6vw, 74px)",
            fontWeight: 800,
            color: "#f0f0f0",
            lineHeight: 1,
            marginBottom: "36px",
          }}
        >
          Selected
          <br />
          Projects.
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setShowAll(false);
              }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                padding: "6px 16px",
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                background:
                  activeFilter === f
                    ? "linear-gradient(135deg, #ff4500, #ffb700)"
                    : "transparent",
                color: activeFilter === f ? "#000" : "#666",
                borderRadius: "20px",
                cursor: "none",
                transition: "all 0.2s",
                fontWeight: activeFilter === f ? 700 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Hero Project */}
        <AnimatePresence mode="wait">
          {heroProject && (
            <motion.div
              key={heroProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HeroCard project={heroProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Normal Grid */}
        <AnimatePresence mode="popLayout">
          <div className="normal-grid">
            {visibleNormal.map((project, index) => (
              <NormalCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>

        {/* View All */}
        {normalProjects.length > 5 && (
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ y: -2 }}
              style={{
                padding: "11px 32px",
                background: "transparent",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 600,
                borderRadius: "4px",
                cursor: "none",
                letterSpacing: "1px",
                color: "#ff9944",
                border: "1px solid rgba(255,130,0,0.35)",
                transition: "all 0.2s",
              }}
            >
              {showAll ? "SHOW LESS ↑" : "VIEW ALL PROJECTS ↓"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
