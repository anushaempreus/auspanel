export default function WordReveal({
  text,
  className = "",
  wordClassName = "",
  start = 150,
  step = 75,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  start?: number;
  step?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className={`word mr-[0.28em] ${wordClassName}`}
          style={{ animationDelay: `${start + i * step}ms` }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
