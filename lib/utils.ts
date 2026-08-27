import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const SITE = {
  name: "Alysium Builds",
  description:
    "Premium Minecraft builds, custom maps, and original creations built to elevate your server and community.",
  url: "https://alysiumbuilds.com",
  discord: "https://discord.gg/alysiumbuilds",
  email: "hello@alysiumbuilds.com",
  builtByBit: "https://builtbybit.com/resources/authors/alysiumbuilds.0",
  socials: {
    discord: "https://discord.gg/alysiumbuilds",
    instagram: "https://instagram.com/alysiumbuilds",
    twitter: "https://twitter.com/alysiumbuilds",
    youtube: "https://youtube.com/@alysiumbuilds",
    tiktok: "https://tiktok.com/@alysiumbuilds",
  },
};
