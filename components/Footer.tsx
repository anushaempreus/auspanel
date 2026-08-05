import Link from "next/link";
import { nav, site } from "@/lib/site";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";
import Logo from "./Logo";

function PhoneIcon() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
}
function MailIcon() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>);
}
function GlobeIcon() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
}
function PinIcon() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>);
}

const contacts = [
  { icon: <PhoneIcon />, label: site.phone, href: site.phoneHref },
  { icon: <MailIcon />, label: site.email, href: `mailto:${site.email}` },
  { icon: <GlobeIcon />, label: site.website, href: "#" },
  { icon: <PinIcon />, label: site.address, href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white bg-black"
      style={{
        backgroundImage: "url(/images/footer-bg.png)",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="aurora left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-[var(--accent)]/30" />

      <div className="container-x relative pt-24 pb-16 text-center">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.05]">
            <span className="text-gradient">Get in touch with Auspanel</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Get in touch with Auspanel to learn more about our exciting range of
            products and services tailored to meet the requirements of our clients.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <Link href="/contact-us" className="btn mt-9">
            Start a Conversation
            <Arrow className="arrow" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="card-hover flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/85"
                >
                  <span className="text-[var(--accent)]">{c.icon}</span>
                  <span className="truncate">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Logo height={30} />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container-x border-t border-white/5 py-5 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Auspanel Façades. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
