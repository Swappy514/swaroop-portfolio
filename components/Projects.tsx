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
    size: "large",
    filter: ["JavaScript"],
    image: "/projects/JS-35+Projects.png",
    gradient: "linear-gradient(135deg, #1a1400, #2a2000)",
  },
  {
    id: 2,
    num: "002",
    name: "Food Munch — Responsive Website",
    description:
      "Fully responsive restaurant website with landing page, menu explorer, delivery & payment section and Bootstrap modal popups.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    github: "https://github.com/Swappy514/food-much",
    live: null,
    status: "complete",
    size: "small",
    filter: ["Responsive"],
    image: "/projects/Food-much-Responsive-website.png",
    gradient: "linear-gradient(135deg, #1a0a00, #2a1500)",
  },
  {
    id: 3,
    num: "003",
    name: "AI Resume Evaluator Bot",
    description:
      "Make.com automation that parses resumes via Google Docs, evaluates using AI and delivers results via email and Telegram Bot.",
    tags: ["Make.com", "AI Agents", "Telegram", "Automation"],
    github: null,
    live: null,
    status: "complete",
    size: "small",
    filter: ["Automation"],
    image: "/projects/AI-Resume-Evaluator-Bot.png",
    gradient: "linear-gradient(135deg, #0a0018, #14002a)",
  },
  {
    id: 4,
    num: "004",
    name: "Flask TODO App",
    description:
      "Full-stack task manager built with Flask featuring user authentication, complete CRUD operations, user profiles and a responsive UI. Built with modular Blueprint architecture and SQLAlchemy ORM.",
    tags: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Bootstrap"],
    github: "https://github.com/Swappy514/Flask-TODO-APP",
    live: null,
    status: "complete",
    size: "large",
    filter: ["Python"],
    image: "/projects/Flask-TODO-app.png",
    gradient: "linear-gradient(135deg, #1a0800, #2a1000)",
  },
  {
    id: 5,
    num: "005",
    name: "SmartGrocery SQL Backend",
    description:
      "Complete MySQL backend for a hyperlocal e-commerce platform with scalable schema, order tracking and customer analytics.",
    tags: ["MySQL", "SQL", "DBMS", "Schema Design"],
    github: "https://github.com/Swappy514/SmartGrocery_SQL_Backend",
    live: null,
    status: "complete",
    size: "small",
    filter: ["SQL / DB"],
    image: "/projects/Smart-grocery-backend.png",
    gradient: "linear-gradient(135deg, #001a08, #002a10)",
  },
  {
    id: 6,
    num: "006",
    name: "RealMart Power BI Dashboard",
    description:
      "Retail analytics dashboard analyzing $83M+ in sales across 28K+ orders with geographic mapping and category breakdown.",
    tags: ["Power BI", "Data Analytics", "Kaggle", "DAX"],
    github: null,
    live: null,
    status: "complete",
    size: "small",
    filter: ["SQL / DB"],
    image: "/projects/PowerBI.png",
    gradient: "linear-gradient(135deg, #000818, #001030)",
  },
  {
    id: 7,
    num: "007",
    name: "Chatting Web App",
    description:
      "Real-time chat application using React with live messaging and user rooms. Currently in active development.",
    tags: ["React", "JavaScript", "CSS3"],
    github: null,
    live: null,
    status: "progress",
    size: "small",
    filter: ["In Progress", "JavaScript"],
    image: null,
    gradient: "linear-gradient(135deg, #0a0a1a, #141428)",
  },
  {
    id: 8,
    num: "008",
    name: "Clothing Website — MERN",
    description:
      "Full-stack clothing e-commerce on MERN stack with product listings, cart system and user authentication.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: null,
    live: null,
    status: "progress",
    size: "small",
    filter: ["In Progress"],
    image: null,
    gradient: "linear-gradient(135deg, #180010, #280018)",
  },
];

function ProjectCard({
  project,
  isLarge,
}: {
  project: (typeof projects)[0];
  isLarge: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "#161616",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 28px 56px rgba(0,0,0,0.8)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Animated top border — draws from center outward */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 10,
          overflow: "hidden",
          borderRadius: "14px 14px 0 0",
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(to right, transparent 0%, #ff4500 25%, #ffb700 50%, #ff4500 75%, transparent 100%)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Side glow effect when hovered */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,69,0,0.04), transparent 60%)",
            pointerEvents: "none",
            zIndex: 1,
            borderRadius: "14px",
            border: "1px solid rgba(255,130,0,0.2)",
          }}
        />
      )}

      {/* Image Area */}
      <div
        style={{
          position: "relative",
          height: isLarge ? "220px" : "150px",
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
              opacity: hovered ? 0.85 : 0.7,
              transition: "opacity 0.4s, transform 0.5s",
              transform: hovered ? "scale(1.04)" : "scale(1)",
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
              fontSize: "52px",
              opacity: 0.1,
            }}
          >
            🔨
          </div>
        )}

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "65%",
            background: "linear-gradient(to top, #161616 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* FEATURED badge */}
        {isLarge && project.status === "complete" && (
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
              zIndex: 3,
            }}
          >
            FEATURED
          </div>
        )}

        {/* BUILDING badge */}
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
              zIndex: 3,
            }}
          >
            BUILDING
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "18px 22px 22px",
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
            marginBottom: "5px",
            letterSpacing: "2px",
          }}
        >
          PROJECT {project.num}
        </div>

        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: isLarge
              ? "clamp(16px, 1.8vw, 22px)"
              : "clamp(14px, 1.4vw, 18px)",
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
            lineHeight: 1.8,
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
            gap: "5px",
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
                padding: "2px 8px",
                borderRadius: "3px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

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
  );
}
