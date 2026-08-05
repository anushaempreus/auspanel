import Link from "next/link";
import { homeGallery, capabilities, site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProjectCard from "@/components/ProjectCard";
import { Arrow, CapIcon } from "@/components/Icons";

const stats = [
  { node: <Counter to={25} suffix="+" />, label: "Years of experience" },
  { node: <Counter to={30} prefix="$" suffix="M+" />, label: "In completed projects" },
  { node: <Counter to={40} suffix="+" />, label: "Fuel stations delivered" },
  { node: <>AUS</>, label: "Nationwide service" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <div
          className="kenburns absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero-bg.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="aurora -left-20 top-1/3 h-80 w-80 bg-[var(--accent)]/40" />

        {/* corner frame detail */}
        <div className="pointer-events-none absolute inset-6 hidden border border-white/10 md:block" />
        <div className="pointer-events-none absolute left-6 top-6 hidden h-6 w-6 border-l-2 border-t-2 border-[var(--accent)] md:block" />
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-6 w-6 border-b-2 border-r-2 border-[var(--accent)] md:block" />

        <div className="container-x relative pt-28 pb-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4 text-[13px] uppercase tracking-[0.25em] text-white/50">
              <span className="text-[var(--accent)]">Est. Queensland</span>
              <span className="h-px w-10 bg-white/25" />
              <span>Commercial Façades</span>
            </div>
            <h1 className="display text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-[100px]">
              <span className="text-gradient">Auspanel Façades</span>
            </h1>
            <Reveal delay={450}>
              <p className="mt-7 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-white md:text-[32px]">
                {site.tagline}
              </p>
            </Reveal>
            <Reveal delay={620}>
              <p className="mt-6 max-w-xl text-lg text-white/60">
                Over 25 years delivering innovative, high-quality commercial façade
                solutions — design, manufacture and installation, Australia-wide.
              </p>
            </Reveal>
            <Reveal delay={760}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="btn">
                  View Our Work <Arrow className="arrow" />
                </Link>
                <Link href="/contact-us" className="btn btn-ghost">
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* oversized watermark */}
        <span className="pointer-events-none absolute -bottom-[2vw] left-0 hidden select-none whitespace-nowrap font-[family-name:var(--font-display)] text-[15vw] font-bold leading-none text-white/[0.035] md:block">
          FAÇADES
        </span>

        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <div className="bob flex h-11 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
            <span className="h-2 w-1 rounded-full bg-white/80" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-[#0c0d0f]">
        <div className="container-x grid grid-cols-2 gap-y-10 py-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 90} className="text-center">
              <div className="display text-4xl md:text-6xl font-semibold text-[var(--accent)]">
                {s.node}
              </div>
              <p className="mt-3 text-sm text-white/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="relative py-24 md:py-28">
        <div className="container-x">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal><span className="section-index">01 — What We Do</span></Reveal>
              <Reveal delay={100}>
                <h2 className="display mt-4 text-4xl md:text-6xl text-white">
                  Design. Manufacture. Install.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link href="/services" className="link-underline text-sm font-medium text-white/80">
                All services →
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.slice(0, 8).map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <div className="card-hover group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                    <CapIcon name={c.title} />
                  </div>
                  <h3 className="text-sm font-bold tracking-wide">{c.title}</h3>
                  <p className="mt-3 text-sm text-white/55">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative border-t border-white/10 py-24 md:py-32">
        <div className="container-x">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <span className="section-index">02 — Selected Work</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display mt-4 text-4xl md:text-6xl text-white">
                  Featured Projects
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link
                href="/projects"
                className="link-underline text-sm font-medium text-white/80"
              >
                View all projects →
              </Link>
            </Reveal>
          </div>

          <div className="[column-gap:14px] columns-1 sm:columns-2 lg:columns-3">
            {homeGallery.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <ProjectCard image={item.image} title={item.title} subtitle={item.subtitle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
