export const site = {
  name: "Auspanel Façades",
  phone: "+61 7 3822 2065",
  phoneHref: "tel:+61738222065",
  email: "info@auspanel.com.au",
  website: "www.auspanel.com.au",
  address: "20/6 Maunder Street, Slacks Creek 4127",
  addressLong: "20/6 Maunder Street, Slacks Creek QLD 4127",
  tagline: "Queensland's leading design and construct facade specialists",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];

// Homepage masonry gallery — exact order from live site (some items have no caption)
export const homeGallery: { image: string; title?: string; subtitle?: string }[] = [
  { image: "/images/one-earle-lane.jpg" },
  { image: "/images/proj-rdo-toowoomba.png", title: "RDO Toowoomba" },
  { image: "/images/proj-rdo-emerald.png", title: "RDO Emerald" },
  { image: "/images/proj-terminal-interior.jpg" },
  {
    image: "/images/proj-soho.jpeg",
    title: "SOHO Apartments Brisbane",
    subtitle: "contract value $250,000",
  },
  {
    image: "/images/proj-q1.jpg",
    title: "Q1 Surfers Paradise (sunland group): 13,800m2 of Alpolic.",
  },
  { image: "/images/proj-toyota.jpeg", title: "Toyota" },
  { image: "/images/proj-southside5.jpg" },
  {
    image: "/images/img-2048.jpg",
    title:
      "Mackay Airport Hotel/IBIS (Woollam): Facade solutions for a key airport hotel.",
  },
  {
    image: "/images/proj-mazda.jpg",
    title: "Mazda Southport: Facade Intsallation",
  },
  { image: "/images/proj-downtown-toyota.jpg", title: "Downtown Toyota" },
  {
    image: "/images/proj-maroochydore.jpg",
    title: "Maroochydore Private Hospital",
  },
];

// Homepage featured gallery
export const featured = [
  { title: "RDO Toowoomba", image: "/images/proj-rdo-toowoomba.png" },
  { title: "RDO Emerald", image: "/images/proj-rdo-emerald.png" },
  {
    title: "SOHO Apartments Brisbane",
    subtitle: "contract Value $250,000",
    image: "/images/proj-soho.jpeg",
  },
  {
    title: "Q1 Surfers Paradise (Sunland Group): 13,800m2 Of Alpolic.",
    image: "/images/proj-q1.jpg",
  },
  { title: "Toyota", image: "/images/proj-toyota.jpeg" },
  {
    title:
      "Mackay Airport Hotel/IBIS (Woollam): Facade Solutions For A Key Airport Hotel.",
    image: "/images/img-2048.jpg",
  },
  { title: "Mazda Southport: Facade Intsallation", image: "/images/proj-mazda.jpg" },
  { title: "Downtown Toyota", image: "/images/proj-downtown-toyota.jpg" },
  { title: "Maroochydore Private Hospital", image: "/images/proj-maroochydore.jpg" },
];

// Projects page
export const projects = [
  {
    title: "Toowoomba Courthouse Refurbishment (FKG): Comprehensive facade work",
    image: "/images/proj-courthouse.jpg",
  },
  {
    title: "Southside Sporting Club Stage 6 (Rubicon) Facade enhancements",
    image: "/images/proj-southside-club.jpg",
  },
  {
    title:
      "Swiss-Bel Hotel/Peak Apartments South Brisbane (Constructions Group): Major facade project",
    image: "/images/proj-swissbel.jpg",
  },
  {
    title:
      "Toowoomba City Hall Extension (Northbuild): Facade enhancements for an iconic building.",
    image: "/images/services-hero.jpg",
  },
  {
    title: "Frasers CTI-GMK Yatala (CIP): Complete Facade installation",
    image: "/images/img-2048.jpg",
  },
  {
    title:
      "More than 40 Fuel Stations (BP/United/Puma /Metro/Caltex /Mobil/Pearl Energy): Facade Solutions across multiple locations.",
    image: "/images/proj-fuel-stations.jpg",
  },
];

// About page — capabilities
export const capabilities = [
  { title: "DESIGN & CONSULTING", text: "Facade design, detailing, and project planning" },
  { title: "CNC MANUFACTURING", text: "Precision fabrication using CNC routers in our factory" },
  { title: "INSTALLATION", text: "Start to finish facade installation across commercial builds" },
  { title: "REMEDIATION", text: "Recladding and Facade testing" },
  {
    title: "FACADE ENGINEERING",
    text: "Technical design and system integration to ensure performance, compliance, and durability across all projects.",
  },
  {
    title: "PROJECT MANAGEMENT",
    text: "Coordinated delivery from concept to completion, ensuring timelines, budgets, and quality standards are met.",
  },
  {
    title: "CUSTOM FABRICATION",
    text: "Tailored façade solutions designed and manufactured to meet unique architectural and project requirements.",
  },
  {
    title: "CLADDING SYSTEMS",
    text: "Supply and Installation of Aluminium Cassette Panel and Glazing Systems and for residential and commercial projects",
  },
];

// About page — products
export const products = [
  "Decorative Metal Mesh products",
  "Aluminium Composite Panel",
  "Solid Aluminium Sunscreens – perforated and lasercut",
  "Aluminium Honeycomb Panel",
  "Stainless Steel architectural mesh products – interior and exterior",
];

// About page — why choose us
export const whyChooseUs = [
  {
    title: "Tailored Solutions",
    text: "Customised facade systems designed to meet the specific requirements and vision of each client.",
  },
  {
    title: "On-Time and On-Budget",
    text: "A proven track record of completing projects within agreed timelines and budgets, ensuring client satisfaction.",
  },
  {
    title: "Nationwide Service",
    text: "Comprehensive design, manufacturing, and installation services available throughout Australia.",
  },
];
