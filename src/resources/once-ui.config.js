// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate
  brand:"pink", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  // Per-card accent/brand scheme overrides (use with data-accent / data-brand)
  card1color1: "pink",    // accent scheme for card 1
  card1color2: "magenta", // brand scheme for card 1
  card2color1: "violet",  // accent scheme for card 2
  card2color2: "indigo",  // brand scheme for card 2
  card3color1: "red",     // accent scheme for card 3
  card3color2: "orange",  // brand scheme for card 3
  card4color1: "aqua",    // accent scheme for card 4
  card4color2: "blue",    // brand scheme for card 4
  solid: "color", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "110", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 30,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 20,
    height: 15,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 100,
  },
  dots: {
    display: false,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: true,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "var(--static-space-32)",
    height: "var(--static-space-32)",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Atomix",
    description:
      "Home to meoware.exe",
    image: "/images/og/home.png",
    canonical: "https://atomix.one",
    robots: "index,follow",
    alternates: [{ href: "https://atomix.one", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Atomix",
  description: meta.home.description,
  email: "infoi@atomix.one",
};

// social links
const social = {
  github: "https://github.com/meowarex",
  email: "info@atomix.one",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
