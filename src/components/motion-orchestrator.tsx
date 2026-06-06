"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionOrchestrator({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
        return;
      }

      const mm = gsap.matchMedia();

      gsap.fromTo(
        "[data-hero]",
        { autoAlpha: 0, y: 38 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".project__media img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.08, yPercent: -2 },
          {
            scale: 1,
            yPercent: 2,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });

      mm.add("(min-width: 1024px)", () => {
        gsap.utils.toArray<HTMLElement>(".project").forEach((project) => {
          gsap.fromTo(
            project.querySelector(".project__copy"),
            { y: 70 },
            {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top 75%",
                end: "bottom 25%",
                scrub: 0.6,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
