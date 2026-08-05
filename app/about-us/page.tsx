import Image from "next/image";
import type { Metadata } from "next";
import { capabilities, products, whyChooseUs } from "@/lib/site";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { CapIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us - Auspanel Façades",
  description:
    "Auspanel has over 25 years experience in the facade industry and is renowned for its innovative facade solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Banner title="About Us" watermark="STORY" />

      {/* Who we are */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          backgroundImage: "url(/images/about-bg.png)",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="group relative">
              <div className="absolute -inset-3 -z-10 rounded-xl border border-[var(--accent)]/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/img-2048.jpg"
                  alt="Auspanel commercial facade installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 570px"
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="section-index">01 — Who We Are</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-4 text-4xl text-white md:text-5xl lg:text-6xl">
                Who we are.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-white/70">
                Auspanel has over 25 years experience in the facade industry and is
                renowned for its innovative facade solutions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-white/70">
                Our experienced team has installed Commercial Facades to major
                projects for more than 15 years including Brisbane West Wellcamp
                Airport, Mackay Airport Hotel, the Gold Coast Convention Centre
                (Multiplex), Queensland Museum and Millennium projects Southbank
                (Bovis L/L) and Mitchell Centre Darwin (Rendezzo), to name just a
                few.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Our Mission",
                  d: "Our true passion for high quality façades and commitment to excellence ensures that every project meets the highest standards of quality and performance.",
                },
                {
                  t: "Our Vision",
                  d: "Auspanel has a state of the art factory with the latest CNC routers and CAD software.",
                },
              ].map((b, i) => (
                <Reveal key={b.t} delay={280 + i * 100}>
                  <div className="card-hover h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                    <h3 className="text-lg font-semibold">{b.t}</h3>
                    <p className="mt-2 text-sm text-white/60">{b.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-[#0c0d0f]">
        <div className="container-x grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4">
          {[
            { n: <Counter to={25} suffix="+" />, l: "Years in the industry" },
            { n: <Counter to={15} suffix="+" />, l: "Years installing façades" },
            { n: <Counter to={30} prefix="$" suffix="M+" />, l: "In completed projects" },
            { n: <Counter to={40} suffix="+" />, l: "Fuel stations delivered" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 90} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)]">{s.n}</div>
              <p className="mt-2 text-sm text-white/55">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            className="mb-16"
            index="02 — What We Do"
            title="Our Capabilities"
            gradient
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

      {/* Products */}
      <section className="border-t border-white/10 bg-[#0c0d0f] py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <span className="section-index">03 — Products</span>
            <h2 className="display mt-4 text-3xl text-white md:text-4xl lg:text-5xl">
              Commercial Facades – Fabrication and Installation including;
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 80}>
                <div className="card-hover flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--accent)]/15 text-xs font-bold text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/80">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mx-auto mt-12 max-w-2xl space-y-4 text-center text-white/60">
            <p>We focus on Client satisfaction by delivering Commercial Façade solutions on time and on budget.</p>
            <p>We look forward to discussing your next project and offering cost-effective, quality solutions for your consideration.</p>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#151515] py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal><span className="section-index">04 — Why Auspanel</span></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-4 text-4xl text-white md:text-5xl lg:text-6xl">
                Why choose Us
              </h2>
            </Reveal>
            <div className="mt-10 space-y-8">
              {whyChooseUs.map((w, i) => (
                <Reveal key={w.title} delay={160 + i * 100}>
                  <div className="group flex gap-5">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--accent)]/40 font-bold text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{w.title}</h3>
                      <p className="mt-1 text-[#8a8a8a]">{w.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/bp-charlton.jpg"
                alt="Auspanel façade project"
                fill
                sizes="(max-width: 1024px) 100vw, 505px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
