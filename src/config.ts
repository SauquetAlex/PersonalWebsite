/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  // email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "Alexandre Sauquet",
  title: "CS @ Purdue '27",
  description:
      `I'm a third year student at Purdue University studying Computer Science, Artificial Intelligence, Statistics, and Mathematics. ` +
      `I'm particularly interested in machine learning and algorithms, with a focus on optimization methods and their real-world applications. ` +
      `I am currently working with <a href="https://ruizhezhang.com/" target="_blank" rel="noopener noreferrer" class="link link-primary">Ruizhe Zhang</a> on extending proofs for the Edge of Stability to determine convergence improvements when using momentum.\n\n` +
      `Between research, classes, and internships, I enjoy training my own models and implementing techniques from research papers. ` +
      `I am also involved in <a href="https://ml-purdue.github.io/" target="_blank" rel="noopener noreferrer" class="link link-primary">ML@Purdue</a> where I oversee project managers and give presentations on SOTA papers in our reading group.`,
  avatar: "../assets/portrait.png",
  // avatar: "",
  location: "🇺🇸 USA, CA",
  // email: "sauquetalex@gmail.com",
  socialLinks: {
    github: "https://github.com/SauquetAlex",
    linkedin: "https://www.linkedin.com/in/alexandre-sauquet/",
    email: "mailto:sauquetalex@gmail.com",
    // twitter: "https://twitter.com/leowg",
    // bluesky: "https://bsky.app/profile/lauroguedes.bsky.social",
    // instagram: "https://instagram.com/lauroguedes.dev",
    // youTube: "https://youtube.com/leowgweb",
    // codetips: "https://codetips.cloud/u/lauroguedes",
  },
  enableThemeSelector: false,
  extraLinks: {
    enable: false,
    links: [
      // {
      //   link: "/blog/guides/bloomfolio-complete-guide",
      //   icon: Flower2,
      //   label: "Bloomfolio Guide",
      // },
      // {
      //   link: "/blog/guides/content-collections-guide",
      //   icon: BookOpen,
      //   label: "Content Guide",
      // },
      // {
      //   link: "/blog/guides/markdown-guide",
      //   icon: FileText,
      //   label: "Markdown Guide",
      // },
      // {
      //   link: "https://github.com/lauroguedes/bloomfolio",
      //   icon: CodeXml,
      //   label: "GitHub Repo",
      // },
    ],
  },
  sections: {
    about: false,
    projects: true,
    blog: false,
    work: true,
    education: false,
    hackathons: false,
    contact: false,
  },
};
