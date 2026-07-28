"use client";

import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export default function SectionLink({
  targetId,
  className,
  children,
  "aria-label": ariaLabel,
}: SectionLinkProps) {
  const href = `#${targetId}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const header = document.querySelector<HTMLElement>(".site-header");
    const headerOffset = header?.offsetHeight ?? 0;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "auto",
    });
  };

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
