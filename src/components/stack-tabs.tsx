"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { stackGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function StackTabs() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="stack-tabs">
      <div className="stack-tabs__controls" role="tablist" aria-label="Toolset groups">
        {stackGroups.map((group, index) => (
          <motion.button
            key={group.title}
            type="button"
            role="tab"
            aria-selected={selected === index}
            className={cn(
              "stack-tab",
              `accent-${group.accent}`,
              selected === index && "stack-tab--active",
            )}
            onClick={() => setSelected(index)}
            animate={{ paddingInline: selected === index ? "2rem" : "1rem" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          >
            {group.title}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={stackGroups[selected].title}
          className={`stack-panel accent-${stackGroups[selected].accent}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28 }}
          role="tabpanel"
        >
          <p>{stackGroups[selected].detail}</p>
          <div className="stack-panel__items">
            {stackGroups[selected].items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
