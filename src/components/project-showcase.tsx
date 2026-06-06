"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={cn(
        "project",
        `accent-${project.accent}`,
        index % 2 === 1 && "project--reverse",
      )}
    >
      <div className="project__media">
        <div className="project__number">0{index + 1}</div>
        <Image
          src={project.image}
          alt={`${project.name} website interface`}
          width={1440}
          height={900}
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </div>
      <div className="project__copy">
        <p className="project__category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project__role">{project.role}</p>
        <p className="project__description">{project.description}</p>
        <dl className="project__details">
          <div>
            <dt>Challenge</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <div className="project__tags" aria-label={`${project.name} technologies`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project__links">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit live <ArrowUpRight size={17} />
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">
              Source <Code2 size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
