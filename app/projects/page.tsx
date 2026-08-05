import type { Metadata } from "next";
import { projects } from "@/lib/site";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of commercial façade projects delivered by Auspanel across Queensland and Australia.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Banner title="Projects" watermark="WORK" />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="aurora -right-24 top-20 h-72 w-72 bg-[var(--accent)]/12" />
        <div className="container-x relative">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              index="01 — Selected Work"
              title="Recent Projects"
              gradient
              description="From courthouses and hotels to more than 40 fuel stations, Auspanel delivers façade solutions across a broad range of commercial projects."
            />
            <Reveal delay={120} className="hidden sm:block">
              <div className="text-right">
                <div className="display text-5xl text-[var(--accent)]">
                  {String(projects.length).padStart(2, "0")}
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  Featured builds
                </p>
              </div>
            </Reveal>
          </div>

          <div className="[column-gap:14px] columns-1 sm:columns-2 lg:columns-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <ProjectCard image={p.image} title={p.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
