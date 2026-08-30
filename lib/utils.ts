import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const SITE = {
  name: "Alysium Builds",
  description:
    "Builds Minecraft premium, maps sur mesure et créations originales pour sublimer ton serveur et ta communauté.",
  // TODO: swap for your real domain once you have one (e.g. alysiumbuilds.com) — Vercel's URL works fine until then.
  url: "https://alysium-builds.vercel.app",
  discord: "https://discord.gg/4xK79z5HxS",
  email: "hello@alysiumbuilds.com",
  builtByBit: "https://builtbybit.com/resources/authors/alysiumbuilds.0",
  socials: {
    discord: "https://discord.gg/4xK79z5HxS",
    instagram: "https://instagram.com/alysiumbuilds",
    twitter: "https://twitter.com/alysiumbuilds",
    youtube: "https://youtube.com/@alysiumbuilds",
    tiktok: "https://tiktok.com/@alysiumbuilds",
  },
};
