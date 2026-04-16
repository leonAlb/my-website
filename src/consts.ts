import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "leon's page",
  FULL_NAME: "Leon Albert",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My personal website where I share my work experience, projects, and publications.",
};

export const WORK: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const IMPRESSUM: Metadata = {
  TITLE: "Impressum",
  DESCRIPTION: "Legal notice with provider information for this website.",
};

export const PRIVACY_POLICY: Metadata = {
  TITLE: "Datenschutzerklaerung",
  DESCRIPTION: "Informationen darueber, wie personenbezogene Daten auf dieser Website verarbeitet werden.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/leonAlb"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/leon-albert-33721a229/",
  }
];
