"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={22} color="#E34F26" />, level: 90 },
      {
        name: "CSS3",
        icon: <FaCss3Alt size={22} color="#1572B6" />,
        level: 88,
      },
      {
        name: "JavaScript",
        icon: <FaJs size={22} color="#F7DF1E" />,
        level: 85,
      },
      {
        name: "React.js",
        icon: <FaReact size={22} color="#61DAFB" />,
        level: 82,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={22} color="#38BDF8" />,
        level: 80,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={22} color="#7952B3" />,
        level: 85,
      },
    ],
  },
  {
    label: "Backend",
    color: "#68A063",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={22} color="#68A063" />,
        level: 78,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={22} color="#fff" />,
        level: 76,
      },
      {
        name: "Python",
        icon: <FaPython size={22} color="#FFD43B" />,
        level: 75,
      },
      {
        name: "REST APIs",
        icon: <SiPostman size={22} color="#FF6C37" />,
        level: 80,
      },
    ],
  },
  {
    label: "Database",
    color: "#4DB33D",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={22} color="#4DB33D" />,
        level: 78,
      },
      { name: "MySQL", icon: <SiMysql size={22} color="#4479A1" />, level: 80 },
      {
        name: "SQL / DBMS",
        icon: <FaDatabase size={22} color="#336791" />,
        level: 82,
      },
    ],
  },
  {
    label: "Tools & Cloud",
    color: "#FF9900",
    skills: [
      { name: "AWS", icon: <FaAws size={22} color="#FF9900" />, level: 65 },
      {
        name: "Git / GitHub",
        icon: <FaGitAlt size={22} color="#F05032" />,
        level: 85,
      },
      {
        name: "Automation",
        icon: <FaRobot size={22} color="#cc7733" />,
        level: 72,
      },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCategory = skillCategories.find((c) => c.label === activeTab)!;

  return (
    <section
      id="skills"
      style={{
        background: "#f2ede4",
        padding: "100px 48px 60px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
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
          04 / The Arsenal
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
            color: "#1a1a1a",
            lineHeight: 1,
            marginBottom: "48px",
          }}
        >
          Skills &<br />
          Technologies.
        </motion.h2>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 600,
                padding: "8px 20px",
                borderRadius: "8px",
                cursor: "none",
                transition: "all 0.25s",
                border: "none",
                background:
                  activeTab === cat.label
                    ? "linear-gradient(135deg, #ff4500, #ffb700)"
                    : "#fff",
                color: activeTab === cat.label ? "#000" : "#888",
                boxShadow:
                  activeTab === cat.label
                    ? "0 4px 20px rgba(255,85,0,0.25)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "12px",
            marginBottom: "60px",
          }}
        >
          {activeCategory.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                background: "#fff",
                border:
                  hoveredSkill === skill.name
                    ? "1px solid rgba(255,130,0,0.35)"
                    : "1px solid #e8e2d8",
                borderRadius: "12px",
                padding: "20px 16px",
                textAlign: "center",
                cursor: "none",
                transition: "all 0.25s",
                transform:
                  hoveredSkill === skill.name
                    ? "translateY(-5px) scale(1.03)"
                    : "translateY(0) scale(1)",
                boxShadow:
                  hoveredSkill === skill.name
                    ? "0 12px 32px rgba(255,85,0,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top border on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    hoveredSkill === skill.name
                      ? "linear-gradient(to right, transparent, #ff4500, #ffb700, transparent)"
                      : "transparent",
                  transition: "background 0.3s",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  transition: "transform 0.3s",
                  transform:
                    hoveredSkill === skill.name ? "scale(1.15)" : "scale(1)",
                }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: hoveredSkill === skill.name ? "#ff6600" : "#444",
                  marginBottom: "10px",
                  transition: "color 0.3s",
                }}
              >
                {skill.name}
              </div>

              {/* Level bar */}
              <div
                style={{
                  height: "3px",
                  background: "#f0ebe2",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(to right, #ff4500, #ffb700)",
                    borderRadius: "2px",
                  }}
                />
              </div>

              {/* Level number on hover */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "9px",
                    color: "#ff6600",
                    marginTop: "5px",
                    fontWeight: 600,
                  }}
                >
                  {skill.level}%
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
