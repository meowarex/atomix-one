import { Logo } from "@once-ui-system/core";

type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: string; // IANA timezone string
  languages?: string[];
};

type RouteMeta = { path: string; label: string; title?: string; description?: string };

const person: Person = {
  firstName: "Atomix",
  lastName: "One",
  name: "Atomix One",
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "info@atomix.one",
  location: "Asia/Jakarta",
  languages: ["English"],
};

const home: RouteMeta = {
  path: "/",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website for ${person.name}`,
};

const about: RouteMeta = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name}`,
};

const blog: RouteMeta = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Writing by ${person.name}`,
};

const work: RouteMeta = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const gallery: RouteMeta = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Photos by ${person.name}`,
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


