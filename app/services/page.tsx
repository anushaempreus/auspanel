import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { capabilities } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { CapIcon, Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services - Auspanel Façades",
  description:
    "AUSPANEL are leaders in the commercial facades industry Australia wide, and can design, manufacture and provide installation services to commercial clients.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black">
        <div
          className="kenburns absolute inset-0"
          style={{
            backgroundImage: "url(/images/services-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="aurora -right-16 top-1/4 h-80 w-80 bg-[var(--accent)]/35" />

        <div className="container-x relative pt-28 pb-20">
          <div className="max-w-3xl">
            <Reveal><span className="eyebrow">Services</span></Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.03]">
                <span className="text-gradient">Explore what services we&rsquo;re offering</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 max-w-xl space-y-4 text-white/70">
                <p>
                  AUSPANEL are leaders in the commercial facades industry Australia
                  wide, and can design, manufacture and provide installation
                  services to commercial clients.
                </p>
                <p>
                  Our services are tailored to meet the requirements of our clients
                  and we work closely with you to ensure that your project runs
                  smoothly and is on time and on budget.
                </p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact-us" className="btn">
                  Get a Quote <Arrow className="arrow" />
                </Link>
                <Link href="/projects" className="btn btn-ghost">View Projects</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-28">
        <div className="aurora -left-24 top-10 h-72 w-72 bg-[var(--accent)]/15" />
        <div className="container-x relative">
          <SectionHeading
            className="mb-16"
            index="01 — What We Offer"
            title="End-to-end façade services"
            gradient
            description="Get in touch with AUSPANEL and learn more about our range of products and services."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <div className="card-hover group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                    <CapIcon name={c.title} />
                  </div>
                  <h3 className="text-sm font-bold tracking-wide">{c.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose our services */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0c0d0f] py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/services-southside.jpg"
                alt="Auspanel commercial façade in Alpolic"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal><span className="section-index">02 — Why Choose Us</span></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-4 text-4xl text-white md:text-5xl lg:text-6xl">
                Building Solutions Tailored to Your Needs
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-white/70">
                We pride ourselves on delivering outstanding client satisfaction
                through timely and budget conscious solutions.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-white/60">
                From concept and engineering through fabrication and on-site
                installation, we manage every stage in-house — giving you a single
                accountable partner and a façade delivered on time, on budget and
                built to last.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="card-hover mt-8 flex items-center gap-5 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.06] p-7">
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent)]">
                  <Counter to={30} prefix="$" suffix="M+" />
                </div>
                <p className="text-white/70">in completed projects and counting.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
