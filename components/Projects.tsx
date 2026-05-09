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
      "A collection of 35+ mini JavaScript projects — Weather App, Music Player, Quiz Game, Snake Game, Password Generator, Image Gallery and much more. Pure JS, no frameworks, big impact.",
    tags: ["JavaScript", "ES6+", "HTML5", "CSS3", "DOM APIs"],
    github: "https://github.com/Swappy514/JavaScript-Projects",
    live: null,
    status: "complete",
    featured: true,
    filter: ["JavaScript"],
    image: "/projects/JS-35+Projects.png",
    gradient: "linear-gradient(135deg, #1a1400, #2a2000)",
  },
  {
    id: 2,
    num: "002",
    name: "Food Munch — Responsive Website",
    description:
      "A fully responsive restaurant website with landing page, menu explorer, delivery & payment section and Bootstrap modal popups. Clean UI, smooth experience across all devices.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "JavaScript"],
    github: "https://github.com/Swappy514/food-much",
    live: null,
    status: "complete",
    featured: false,
    filter: ["Responsive"],
    image: "/projects/Food-much-Responsive-website.png",
    gradient: "linear-gradient(135deg, #1a0a00, #2a1500)",
  },
  {
    id: 3,
    num: "003",
    name: "AI Resume Evaluator Bot",
    description:
      "Make.com automation workflow that parses resume content via Google Docs, evaluates it using AI and delivers results via email and Telegram. Zero backend code — pure automation.",
    tags: [
      "Make.com",
      "AI Agents",
      "Telegram Bot",
      "Google Docs",
      "Automation",
    ],
    github: null,
    live: null,
    status: "complete",
    featured: false,
    filter: ["Automation"],
    image: "/projects/AI-Resume-Evaluator-Bot.png",
    gradient: "linear-gradient(135deg, #0a0018, #14002a)",
  },
  {
    id: 4,
    num: "004",
    name: "SmartGrocery SQL Backend",
    description:
      "Complete MySQL backend for a hyperlocal e-commerce platform. Scalable schema design, order tracking, inventory management and customer analytics — built as a real-world database blueprint.",
    tags: ["MySQL", "SQL", "DBMS", "Schema Design", "Analytics"],
    github: "https://github.com/Swappy514/SmartGrocery_SQL_Backend",
    live: null,
    status: "complete",
    featured: false,
    filter: ["SQL / DB"],
    image: "/projects/Smart-grocery-backend.png",
    gradient: "linear-gradient(135deg, #001a08, #002a10)",
  },
  {
    id: 5,
    num: "005",
    name: "Flask TODO App",
    description:
      "Full-stack task manager built with Flask featuring user authentication, complete CRUD operations, user profiles and a responsive UI. Built with modular Blueprint architecture and SQLAlchemy ORM.",
    tags: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Bootstrap"],
    github: "https://github.com/Swappy514/Flask-TODO-APP",
    live: null,
    status: "complete",
    featured: false,
    filter: ["Python"],
    image: "/projects/Flask-TODO-app.png",
    gradient: "linear-gradient(135deg, #1a0800, #2a1000)",
  },
  {
    id: 6,
    num: "006",
    name: "RealMart Power BI Dashboard",
    description:
      "Retail analytics dashboard analyzing $83M+ in sales across 28K+ orders. Features geographic sales mapping, category-wise breakdown, payment mode analysis and time-series trends.",
    tags: ["Power BI", "Data Analytics", "Kaggle", "DAX", "Visualization"],
    github: null,
    live: null,
    status: "complete",
    featured: false,
    filter: ["SQL / DB"],
    image: "/projects/PowerBI.png",
    gradient: "linear-gradient(135deg, #000818, #001030)",
  },
  {
    id: 7,
    num: "007",
    name: "Chatting Web App",
    description:
      "Real-time chat application using React with live messaging, user rooms and a clean modern interface. Currently in active development.",
    tags: ["React", "JavaScript", "CSS3"],
    github: null,
    live: null,
    status: "progress",
    featured: false,
    filter: ["In Progress", "JavaScript"],
    image: null,
    gradient: "linear-gradient(135deg, #0a0a1a, #141428)",
  },
  {
    id: 8,
    num: "008",
    name: "Clothing Website — MERN",
    description:
      "Full-stack clothing e-commerce platform on the MERN stack with product listings, cart system and user authentication. Active development.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: null,
    live: null,
    status: "progress",
    featured: false,
    filter: ["In Progress"],
    image: null,
    gradient: "linear-gradient(135deg, #180010, #280018)",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects.filter((p) =>
    activeFilter === "All" ? true : p.filter.includes(activeFilter),
  );

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="projects"
      style={{ padding: "100px 48px", background: "#080808" }}
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
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 28px 56px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,100,0,0.2)",
                }}
                style={{
                  gridColumn: project.featured ? "span 2" : "span 1",
                  position: "relative",
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "none",
                  transition: "border-color 0.3s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Area */}
                <div
                  style={{
                    position: "relative",
                    height: project.featured ? "220px" : "160px",
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
                        opacity: 0.75,
                        transition: "opacity 0.3s, transform 0.5s",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                        opacity: 0.15,
                      }}
                    >
                      🔨
                    </div>
                  )}

                  {/* Gradient fade bottom */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "70%",
                      background:
                        "linear-gradient(to top, #161616 0%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "8px",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #ff4500, #ffb700)",
                        color: "#000",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        letterSpacing: "1px",
                        zIndex: 2,
                      }}
                    >
                      FEATURED
                    </div>
                  )}

                  {/* Building badge */}
                  {project.status === "progress" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "8px",
                        fontWeight: 700,
                        color: "#22c55e",
                        border: "1px solid rgba(34,197,94,0.5)",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        letterSpacing: "1px",
                        background: "rgba(34,197,94,0.1)",
                        zIndex: 2,
                      }}
                    >
                      BUILDING
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div
                  style={{
                    padding: "20px 24px 24px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* Project number */}
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "9px",
                      background: "linear-gradient(135deg, #ff4500, #ffb700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "6px",
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
                      fontSize: "clamp(15px, 1.8vw, 20px)",
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
                      fontSize: "11px",
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: "14px",
                      fontFamily: "var(--font-inter)",
                      flex: 1,
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {filtered.length > 6 && (
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
