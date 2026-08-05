import Link from "next/link";
import Reveal from "./Reveal";

export default function Banner({
  title,
  crumb,
  watermark,
  image = "/images/texture.png",
}: {
  title: string;
  crumb?: string;
  watermark?: string;
  image?: string;
}) {
  return (
    <section
      className="relative flex min-h-[52vh] items-center overflow-hidden bg-black pt-32 pb-16 text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      <div className="aurora left-1/2 top-1/4 h-72 w-96 -translate-x-1/2 bg-[var(--accent)]/25" />

      {/* watermark */}
      <span className="watermark absolute inset-x-0 bottom-[-3vw] hidden text-[18vw] md:block">
        {watermark ?? title}
      </span>

      <div className="container-x relative">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/30">—</span>
            <span className="text-[var(--accent)]">{crumb ?? title}</span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl">
            <span className="text-gradient">{title}</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
