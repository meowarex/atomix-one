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

const blog: RouteMeta = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.firstName}`,
  description: `Writing by ${person.firstName}`,
};

const work: RouteMeta = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName}`,
  description: `Projects by ${person.firstName}`,
};

const gallery: RouteMeta = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.firstName}`,
  description: `Photos by ${person.firstName}`,
};

const routes: Record<string, boolean> = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

export { person, home, about, blog, work, gallery, routes, display };


