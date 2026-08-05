import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  description,
  gradient = false,
  center = false,
  className = "",
}: {
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  gradient?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {index && (
        <Reveal>
          <span className="section-index">{index}</span>
        </Reveal>
      )}
      <Reveal delay={index ? 100 : 0}>
        <h2 className={`display mt-4 text-4xl md:text-5xl lg:text-6xl ${gradient ? "" : "text-white"}`}>
          {gradient ? <span className="text-gradient">{title}</span> : title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={180}>
          <p className="mt-5 text-white/60">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
