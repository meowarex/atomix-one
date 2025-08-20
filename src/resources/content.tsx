import { Logo } from "@once-ui-system/core";

type Person = {
  firstName: string;
  role: string;
  avatar: string;
  email: string;
  location: string; // IANA timezone string
  languages?: string[];
};

type RouteMeta = { path: string; label: string; title?: string; description?: string };

const person: Person = {
  firstName: "meoware.exe",
  role: "Cybersecurity Analyst",
  avatar: "/images/avatar.jpg",
  email: "info@atomix.one",
  location: "Australia/Sydney",
  languages: ["English"],
};

const home: RouteMeta = {
  path: "/",
  label: "Home",
  title: `${person.firstName}`,
  description: `Portfolio website for ${person.firstName}`,
};

const about: RouteMeta = {
  path: "/about",
  label: "About",
  title: `About – ${person.firstName}`,
  description: `About ${person.firstName}`,
};

const alkaline: RouteMeta = {
  path: "/alkaline",
  label: "Alkaline",
  title: `Alkaline – ${person.firstName}`,
  description: `Alkaline by ${person.firstName}`,
};

const ruby: RouteMeta = {
  path: "/ruby",
  label: "Ruby",
  title: `Ruby – ${person.firstName}`,
  description: `Ruby by ${person.firstName}`,
};

const sapphire: RouteMeta = {
  path: "/sapphire",
  label: "Sapphire",
  title: `Sapphire – ${person.firstName}`,
  description: `Sapphire by ${person.firstName}`,
};

const amethyst: RouteMeta = {
  path: "/amethyst",
  label: "Amethyst",
  title: `Amethyst – ${person.firstName}`,
  description: `Amethyst by ${person.firstName}`,
};

const routes: Record<string, boolean> = {
  "/": true,
  "/about": true,
  "/alkaline": true,
  "/ruby": true,
  "/sapphire": true,
  "/amethyst": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

export { person, home, about, alkaline, ruby, sapphire, amethyst, routes, display };


