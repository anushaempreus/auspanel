// Renders the official Auspanel wordmark (white text on black) from the site's
// logo asset, cropped to the text bounds and with the black dropped via
// mix-blend-mode so only the wordmark shows on the dark UI.
const TEXT_AR = 985 / 269; // cropped text region aspect ratio

export default function Logo({
  height = 34,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label="Auspanel Façades"
      className={className}
      style={{
        display: "inline-block",
        height,
        width: height * TEXT_AR,
        backgroundImage: "url(/images/logo.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "155.9% auto",
        backgroundPosition: "49.9% 49.5%",
        mixBlendMode: "screen",
      }}
    />
  );
}
