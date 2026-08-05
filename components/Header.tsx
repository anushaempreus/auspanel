"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Arrow } from "./Icons";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0b0c]/90 backdrop-blur-md border-b border-white/10 py-0"
          : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[68px]" : "h-[88px]"
        }`}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center leading-none transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Logo height={scrolled ? 30 : 36} className="transition-all duration-500" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`link-underline text-[15px] transition-colors hover:text-white ${
                  active ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={site.phoneHref} className="btn !py-2.5 !px-5 text-sm">
            {site.phone}
            <Arrow className="arrow" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden overflow-hidden bg-[#0a0b0c]/95 backdrop-blur-md transition-[max-height] duration-500 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="container-x flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[15px] border-b border-white/5 ${
                pathname === item.href ? "text-[var(--accent)]" : "text-white/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="btn mt-4 justify-center">
            {site.phone}
          </a>
        </div>
      </nav>
    </header>
  );
}
