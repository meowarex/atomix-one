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

const kintsugi: RouteMeta = {
  path: "/kintsugi",
  label: "Kintsugi",
  title: `Kintsugi – ${person.firstName}`,
  description: `Kintsugi by ${person.firstName}`,
};

const soon: RouteMeta = {
  path: "/soon",
  label: "Soon",
  title: `Coming Soon – ${person.firstName}`,
  description: "Coming Soon",
};

const sapphire: RouteMeta = {
  path: "/sapphire",
  label: "Sapphire",
  title: `Sapphire – ${person.firstName}`,
  description: `Sapphire by ${person.firstName}`,
};

const tidalluna_plugins: RouteMeta = {
  path: "/tidalluna-plugins",
  label: "Tidal Plugins",
  title: `Tidalluna Plugins – ${person.firstName}`,
  description: `Tidalluna Plugins by ${person.firstName}`,
};

const routes: Record<string, boolean> = {
  "/": true,
  "/about": true,
  "/kintsugi": true,
  "/soon": false,
  "/sapphire": true,
  "/tidalluna-plugins": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

export { person, home, about, kintsugi, soon, sapphire, tidalluna_plugins, routes, display };


