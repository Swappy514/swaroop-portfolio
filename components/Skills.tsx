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
