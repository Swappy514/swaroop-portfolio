"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      setRing({ x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    };

    const handleHoverIn = () => setHovering(true);
    const handleHoverOut = () => setHovering(false);

    const interactives = document.querySelectorAll(
      "a, button, .pbox, .hbox, .sk, .blog-card",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    animateRing();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: clicking ? "8px" : hovering ? "16px" : "10px",
          height: clicking ? "8px" : hovering ? "16px" : "10px",
          background: "linear-gradient(135deg, #ff4500, #ffb700)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(255,85,0,0.7)",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      {/* Ring */}
      <div
        style={{
          position: "fixed",
          left: ring.x,
          top: ring.y,
          width: hovering ? "44px" : "32px",
          height: hovering ? "44px" : "32px",
          border: "1px solid rgba(255,130,0,0.45)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
