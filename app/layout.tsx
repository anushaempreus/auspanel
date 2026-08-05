import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const display = Archivo({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://auspanel.com.au";
const DESCRIPTION =
  "Auspanel has over 25 years experience in the facade industry and is renowned for its innovative facade solutions. Queensland's leading design and construct commercial facade specialists — design, manufacture and installation, Australia-wide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auspanel Façades — QLD Commercial Facade Specialists",
    template: "%s — Auspanel Façades",
  },
  description: DESCRIPTION,
  applicationName: "Auspanel Façades",
  authors: [{ name: "Auspanel Façades" }],
  creator: "Empreus IT Support",
  keywords: [
    "commercial facades",
    "facade specialists",
    "aluminium composite panel",
    "cladding systems",
    "facade installation",
    "CNC manufacturing",
    "recladding",
    "facade engineering",
    "Queensland",
    "Brisbane",
    "Slacks Creek",
    "Auspanel",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Auspanel Façades",
    title: "Auspanel Façades — QLD Commercial Facade Specialists",
    description: DESCRIPTION,
    locale: "en_AU",
    images: [
      { url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: "Auspanel Façades" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auspanel Façades — QLD Commercial Facade Specialists",
    description: DESCRIPTION,
    images: ["/images/hero-bg.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#organization`,
  name: "Auspanel Façades",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-bg.jpeg`,
  description: DESCRIPTION,
  telephone: "+61738222065",
  email: "info@auspanel.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20/6 Maunder Street",
    addressLocality: "Slacks Creek",
    addressRegion: "QLD",
    postalCode: "4127",
    addressCountry: "AU",
  },
  areaServed: { "@type": "Country", name: "Australia" },
  foundingDate: "1999",
  slogan: "Queensland's leading design and construct facade specialists",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
