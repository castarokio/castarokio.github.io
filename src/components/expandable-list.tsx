"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import type { Capability } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ExpandableCapabilities({ items }: { items: Capability[] }) {
  const [selected, setSelected] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(rootRef as React.RefObject<HTMLElement>, () => setSelected(0));

  return (
    <div className="capability-list" ref={rootRef}>
      {items.map((item, index) => {
        const isSelected = selected === index;
        return (
          <motion.button
            type="button"
            key={item.title}
            className={cn(
              "capability-row",
              `accent-${item.accent}`,
              isSelected && "capability-row--active",
            )}
            onClick={() => setSelected(index)}
            animate={{ paddingInline: isSelected ? "clamp(1.5rem, 4vw, 4rem)" : "1rem" }}
            transition={{ type: "spring", bounce: 0, duration: 0.55 }}
            aria-expanded={isSelected}
          >
            <span className="capability-row__label">{item.label}</span>
            <span className="capability-row__title">{item.title}</span>
            <AnimatePresence initial={false}>
              {isSelected ? (
                <motion.span
                  className="capability-row__description"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {item.description}
                </motion.span>
              ) : null}
            </AnimatePresence>
            <span className="capability-row__mark" aria-hidden="true">
              {isSelected ? "−" : "+"}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
