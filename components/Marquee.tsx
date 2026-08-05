const partners = [
  "Multiplex",
  "Bovis Lend Lease",
  "Woollam Constructions",
  "Northbuild",
  "FKG Group",
  "Sunland Group",
  "Constructions Group",
  "Rubicon",
  "BP",
  "Caltex",
  "Puma Energy",
  "Toyota",
  "Mazda",
];

export default function Marquee() {
  return (
    <section className="border-y border-white/10 bg-[#0b0c0e] py-8">
      <div className="container-x mb-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/40">
          Trusted on projects for leading builders &amp; brands
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {partners.map((p) => (
                <li
                  key={`${dup}-${p}`}
                  className="flex items-center whitespace-nowrap px-9 font-display text-xl font-medium text-white/45 transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p}
                  <span className="ml-9 text-[var(--accent)]/50">/</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
