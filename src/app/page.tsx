import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { ExpandableCapabilities } from "@/components/expandable-list";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import { NavBar } from "@/components/nav-bar";
import { ProjectShowcase } from "@/components/project-showcase";
import { StackTabs } from "@/components/stack-tabs";
import { capabilities, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <MotionOrchestrator>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content">
        <section id="home" className="hero section-shell">
          <div className="hero__texture texture-one" aria-hidden="true" />
          <div className="hero__copy">
            <div className="hero__meta" data-hero>
              <span>Next.js developer</span>
              <span>Tizi-Ouzou, Algeria</span>
            </div>
            <h1 data-hero>
              I build <span className="ink-blue">fast, polished</span> web apps with{" "}
              <span className="ink-coral">clear UX</span>, sharp branding, and{" "}
              <span className="ink-cyan">real product flow.</span>
            </h1>
            <p className="hero__intro" data-hero>
              I work across frontend engineering, interface design, branding, and product
              execution, from booking flows and storefronts to dashboards, payments, and
              client-ready handoff.
            </p>
            <div className="hero__actions" data-hero>
              <a className="button button--primary" href="#projects">
                View case studies <ArrowDown size={18} />
              </a>
              <a
                className="button button--secondary"
                href="https://wa.me/213540211250"
                target="_blank"
                rel="noreferrer"
              >
                Discuss a build <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="hero__availability" data-hero>
              Available for focused freelance builds and product collaborations.
            </p>
          </div>
          <div className="hero__portrait-wrap" data-hero>
            <div className="hero__portrait-frame">
              <Image
                src="/profile.jpg"
                alt="Hamid Ait Medjber"
                fill
                priority
                sizes="(max-width: 800px) 75vw, 34vw"
              />
            </div>
            <div className="hero__nameplate">
              <span>Hamid Ait Medjber</span>
              <strong>Developer, designer-minded.</strong>
            </div>
            <span className="hero__shape hero__shape--yellow" aria-hidden="true" />
            <span className="hero__shape hero__shape--cyan" aria-hidden="true" />
          </div>
          <a className="hero__scroll" href="#capabilities" aria-label="Scroll to capabilities">
            Scroll to explore <ArrowDown size={16} />
          </a>
        </section>

        <section id="capabilities" className="section-shell section-block capabilities">
          <header className="section-heading" data-reveal>
            <p>What I bring</p>
            <h2>
              I handle both the build and the layer people{" "}
              <span className="ink-coral">actually feel.</span>
            </h2>
            <div>
              Product logic, motion, visual identity, and implementation should speak the
              same language.
            </div>
          </header>
          <div data-reveal>
            <ExpandableCapabilities items={capabilities} />
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-shell">
            <header className="section-heading section-heading--projects" data-reveal>
              <p>Selected work</p>
              <h2>
                Live work with the role, stack, and{" "}
                <span className="ink-blue">product decisions visible.</span>
              </h2>
              <div>
                Four different business problems, each treated as a product rather than a
                decorated page.
              </div>
            </header>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={project.name} data-reveal>
                  <ProjectShowcase project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell section-block stack-section">
          <header className="section-heading" data-reveal>
            <p>Toolset</p>
            <h2>
              A modern stack, used with <span className="ink-cyan">intention.</span>
            </h2>
            <div>
              Design is not decoration, and the backend is not an afterthought. Each layer
              supports the same product experience.
            </div>
          </header>
          <div data-reveal>
            <StackTabs />
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact__texture texture-two" aria-hidden="true" />
          <div className="section-shell contact__inner">
            <div data-reveal>
              <p className="contact__label">Start a conversation</p>
              <h2>Good work comes from clear thinking and careful execution.</h2>
            </div>
            <div className="contact__grid" data-reveal>
              <div className="contact__copy">
                <p>
                  I&apos;m open to focused freelance builds, product collaborations, and
                  selective client work where design quality and execution both matter.
                </p>
                <span>Tizi-Ouzou, Algeria</span>
              </div>
              <div className="contact__actions">
                <a
                  className="contact-link contact-link--primary"
                  href="https://wa.me/213540211250"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <ArrowUpRight />
                </a>
                <a className="contact-link" href="mailto:castarokio@gmail.com">
                  Email <Mail />
                </a>
              </div>
            </div>
            <footer className="footer">
              <a className="footer__brand" href="#home">
                CASTAROKIO
              </a>
              <p>Built with Next.js, motion, and a bias toward usable product work.</p>
              <div className="footer__socials">
                <a href="https://github.com/castarokio" target="_blank" rel="noreferrer" aria-label="GitHub">
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/hamid-ait-5766172b2"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  LI
                </a>
                <a
                  href="https://www.instagram.com/castarokio/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  IG
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </MotionOrchestrator>
  );
}
