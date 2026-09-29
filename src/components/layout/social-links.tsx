import type { IconType } from "react-icons";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socialLinks: { name: string; href: string; icon: IconType }[] = [
  { name: "GitHub", href: "https://github.com/cfrdlima", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/claudinei-de-lima-690b4021a/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/claudineidelima2/",
    icon: FaInstagram,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/cfrdlxava50c0",
    icon: FaBehance,
  },
];
