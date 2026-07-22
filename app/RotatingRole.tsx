"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Applied AI Engineer",
  "Product-Minded Developer",
];

export default function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characters, setCharacters] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const currentRole = roles[roleIndex];
    const finishedTyping = characters === currentRole.length;
    const finishedDeleting = characters === 0;
    const delay = finishedTyping && !deleting ? 1450 : deleting ? 44 : 76;

    const timer = window.setTimeout(() => {
      if (finishedTyping && !deleting) {
        setDeleting(true);
        return;
      }

      if (finishedDeleting && deleting) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setCharacters((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characters, deleting, roleIndex]);

  return (
    <span className="rotating-role" aria-live="polite">
      {roles[roleIndex].slice(0, characters)}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}
