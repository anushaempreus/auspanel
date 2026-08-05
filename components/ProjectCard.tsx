import { Arrow } from "./Icons";

export default function ProjectCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <figure className="group relative mb-3.5 break-inside-avoid overflow-hidden rounded-lg border border-white/5 bg-[#0d0f11]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title ?? ""}
        loading="lazy"
        className="block w-full h-auto transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
      />

      {/* gradient wash */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          title
            ? "bg-gradient-to-t from-black via-black/25 to-transparent opacity-90 group-hover:opacity-100"
            : "bg-black/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* corner arrow badge */}
      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[var(--accent)] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <Arrow />
      </div>

      {title && (
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <span className="mb-3 block h-[2px] w-9 origin-left scale-x-100 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-[1.8]" />
          <h3 className="text-[17px] font-bold leading-snug text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm font-semibold text-[var(--accent-2)]">
              {subtitle}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
