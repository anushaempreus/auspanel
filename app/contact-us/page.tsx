import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Auspanel to learn more about our exciting range of products and services tailored to meet the requirements of our clients.",
  alternates: { canonical: "/contact-us" },
};

const DARK = "#0d1615";

const socials = [
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Twitter", href: "#", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
  { label: "YouTube", href: "#", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02v-6.5l5.75 3.25z" },
  { label: "Instagram", href: "#", path: "M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33 0 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0 8.33 0 8.74 0 12s0 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98C24 15.67 24 15.26 24 12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67 0 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" },
];

const details = [
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Website", value: site.website, href: "#" },
  { label: "Address", value: site.addressLong, href: "#" },
];

export default function ContactPage() {
  return (
    <div className="text-white" style={{ backgroundColor: DARK }}>
      <Banner title="Contact Us" crumb="Contact" watermark="REACH" />

      {/* Info + form */}
      <section className="relative overflow-hidden" style={{ backgroundColor: DARK }}>
        <div className="aurora -left-24 top-10 h-72 w-72 bg-[var(--accent)]/15" />
        <div className="container-x relative grid gap-14 py-24 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <Reveal><span className="section-index">01 — Contact</span></Reveal>
            <Reveal delay={100}>
              <h2 className="display mt-4 text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
                <span className="text-gradient">Have question? Get in touch</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-white/60">
                Get in touch with AUSPANEL to learn more about our exciting range of
                products and services tailored to meet the requirements of our
                clients.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={200 + i * 80}>
                  <a
                    href={d.href}
                    className="card-hover block rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/40">{d.label}</p>
                    <p className="mt-1 text-white">{d.value}</p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320}>
              <div className="mt-8 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let&rsquo;s Discuss Business Together
              </h2>
              <p className="mt-3 mb-8 text-sm text-white/55">
                Tell us about your project — scope, timeline and requirements — and
                our team will get back to you with tailored advice and a competitive
                quote.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="container-x pb-24">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Auspanel Façades location"
              src="https://www.google.com/maps?q=20/6%20Maunder%20Street,%20Slacks%20Creek%20QLD%204127&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                filter:
                  "invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.9) grayscale(0.25)",
              }}
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
