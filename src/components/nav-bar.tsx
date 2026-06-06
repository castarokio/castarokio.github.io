"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

export function NavBar() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const sections = navItems
      .map((item) => ({ item, section: document.querySelector<HTMLElement>(item.url) }))
      .filter(
        (
          entry,
        ): entry is {
          item: (typeof navItems)[number];
          section: HTMLElement;
        } => Boolean(entry.section),
      );

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + window.innerHeight * 0.36;
        const current = sections.reduce((active, entry) => {
          return entry.section.offsetTop <= marker ? entry : active;
        }, sections[0]);

        if (current) setActiveTab(current.item.name);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="site-nav-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-nav__brand" href="#home" aria-label="Castarokio home">
          <Image src="/brand-mark.svg" alt="" width={30} height={30} priority />
          <span>CASTAROKIO</span>
        </a>
        <div className="site-nav__links">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn("nav-link", isActive && "nav-link--active")}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-lamp"
                    className="nav-lamp"
                    transition={{ type: "spring", stiffness: 330, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}
        </div>
        <AnimatedThemeToggler />
      </nav>
    </header>
  );
}
