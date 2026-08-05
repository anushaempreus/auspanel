import Link from "next/link";

export default function PageBanner({
  title,
  image = "/images/about-bg.png",
  crumb,
}: {
  title: string;
  image?: string;
  crumb?: string;
}) {
  return (
    <section
      className="relative bg-[#131313] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.62), rgba(10,10,10,0.62)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-x py-24 md:py-32 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-medium">{title}</h1>
        <p className="mt-4 text-white/70 text-sm">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-[var(--accent)]">{crumb ?? title}</span>
        </p>
      </div>
    </section>
  );
}
