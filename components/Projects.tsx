"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
    name: "SmartGrocery SQL Backend",
    description:
      "A complete MySQL backend for a hyperlocal e-commerce platform. Includes scalable schema design, order tracking, inventory management and customer analytics queries — built as a real-world database blueprint.",
    tags: ["MySQL", "SQL", "DBMS", "Schema Design", "Analytics"],
    github: "https://github.com/Swappy514/SmartGrocery_SQL_Backend",
    live: null,
    status: "complete",
    featured: true,
    filter: ["SQL / DB"],
  },
  {
    id: 2,
    num: "002",
    name: "Flask TODO App",
    description:
      "A full-stack task manager built with Flask featuring user authentication, complete CRUD operations, user profiles and a responsive UI. Built with modular Blueprint architecture and SQLAlchemy ORM.",
    tags: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Bootstrap"],
    github: "https://github.com/Swappy514/Flask-TODO-APP",
    live: null,
    status: "complete",
    featured: false,
    filter: ["Python"],
  },
  {
    id: 3,
    num: "003",
    name: "JavaScript 35+ Projects",
    description:
      "A collection of 35+ mini JavaScript projects covering DOM manipulation, APIs, animations, games and utilities. Demonstrates consistency, breadth and hands-on ES6+ mastery.",
    tags: ["JavaScript", "ES6+", "HTML5", "CSS3", "DOM APIs"],
    github: "https://github.com/Swappy514/JavaScript-Projects",
    live: null,
    status: "complete",
    featured: false,
    filter: ["JavaScript"],
  },
  {
    id: 4,
    num: "004",
    name: "Food Munch — Responsive Website",
    description:
      "A fully responsive restaurant website built with Bootstrap 4.5. Features gradient UI, modular section design, Bootstrap modal popups and a complete menu showcase — built as a capstone front-end project.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    github: "https://github.com/Swappy514/food-much",
    live: null,
    status: "complete",
    featured: false,
    filter: ["Responsive"],
  },
  {
    id: 5,
    num: "005",
    name: "AI Resume Evaluator Bot",
    description:
      "An intelligent automation bot that evaluates resumes against job descriptions using AI. Built with Make.com workflows and AI APIs — cuts manual screening time significantly.",
    tags: ["Make.com", "AI APIs", "Automation", "Prompt Engineering"],
    github: null,
    live: null,
    status: "complete",
    featured: false,
    filter: ["Automation"],
  },
  {
    id: 6,
    num: "006",
    name: "Chatting Web App",
    description:
      "Real-time chat application using React with live messaging, user rooms and a clean modern interface. Currently in active development.",
    tags: ["React", "JavaScript", "CSS3"],
    github: null,
    live: null,
    status: "progress",
    featured: false,
    filter: ["In Progress", "JavaScript"],
  },
  {
    id: 7,
    num: "007",
    name: "Clothing Website — MERN",
    description:
      "Full-stack clothing e-commerce platform built on the MERN stack with product listings, cart system and user authentication. Active development.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: null,
    live: null,
    status: "progress",
    featured: false,
    filter: ["In Progress"],
  },
  {
    id: 8,
    num: "008",
    name: "Myntra Clone",
    description:
      "A JavaScript clone of Myntra's frontend with product grid, filters and cart UI. Currently ongoing.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: null,
    live: null,
    status: "progress",
    featured: false,
    filter: ["In Progress", "JavaScript"],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter((p) =>
    activeFilter === "All" ? true : p.filter.includes(activeFilter),
  );

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 48px",
        background: "#080808",
      }}
    >
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
            marginBottom: "36px",
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

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.06 }}
                style={{
                  gridColumn: project.featured ? "span 2" : "span 1",
                  position: "relative",
                  background: project.featured
                    ? "linear-gradient(135deg, #181008, #161616)"
                    : "#161616",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "28px",
                  overflow: "hidden",
                  cursor: "none",
                  transition: "all 0.4s",
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(255,130,0,0.35)",
                  boxShadow:
                    "0 28px 56px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,100,0,0.1)",
                }}
              >
                {/* Corner accents */}
                <div
                  className="corner-tl"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "0px",
                    height: "0px",
                    borderTop: "2px solid transparent",
                    borderLeft: "2px solid transparent",
                    borderRadius: "14px 0 0 0",
                    transition: "all 0.4s",
                  }}
                />
                <div
                  className="corner-br"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "0px",
                    height: "0px",
                    borderBottom: "2px solid transparent",
                    borderRight: "2px solid transparent",
                    borderRadius: "0 0 14px 0",
                    transition: "all 0.4s",
                  }}
                />

                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "-30px",
                    width: "110px",
                    height: "110px",
                    background:
                      "radial-gradient(circle, rgba(255,100,0,0.1), transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Featured badge */}
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "8px",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #ff4500, #ffb700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      border: "1px solid rgba(255,130,0,0.4)",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      letterSpacing: "1px",
                    }}
                  >
                    FEATURED
                  </div>
                )}

                {/* In Progress badge */}
                {project.status === "progress" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "8px",
                      fontWeight: 700,
                      color: "#22c55e",
                      border: "1px solid rgba(34,197,94,0.4)",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      letterSpacing: "1px",
                      background: "rgba(34,197,94,0.06)",
                    }}
                  >
                    BUILDING
                  </div>
                )}

                {/* Project number */}
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "9px",
                    background: "linear-gradient(135deg, #ff4500, #ffb700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "10px",
                    letterSpacing: "2px",
                    opacity: 0.7,
                  }}
                >
                  PROJECT {project.num}
                </div>

                {/* Name */}
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(16px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "#f0f0f0",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: "12px",
                    color: "#4a4a4a",
                    lineHeight: 1.8,
                    marginBottom: "14px",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {project.description}
                </div>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    marginBottom: "14px",
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
                        padding: "2px 8px",
                        borderRadius: "3px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "8px" }}>
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
                        fontSize: "10px",
                        color: "#ff9944",
                        background: "rgba(255,85,0,0.08)",
                        border: "1px solid rgba(255,130,0,0.2)",
                        padding: "5px 12px",
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
                        gap: "6px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "10px",
                        color: "#ff9944",
                        background: "rgba(255,85,0,0.08)",
                        border: "1px solid rgba(255,130,0,0.2)",
                        padding: "5px 12px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        cursor: "none",
                      }}
                    >
                      <FaExternalLinkAlt size={10} />
                      Live Demo
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {filtered.length > 5 && (
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
