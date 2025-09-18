"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub size={24} />, href: "https://github.com/ClaudineiLima" },
  {
    icon: <FaLinkedin size={24} />,
    href: "https://www.linkedin.com/in/claudinei-lima/",
  },
  {
    icon: <FaInstagram size={24} />,
    href: "https://www.instagram.com/claudinei.lima/",
  },
  {
    icon: <FaBehance size={24} />,
    href: "https://www.behance.net/ClaudineiLima",
  },
];

export default function SocialMediaAside() {
  return (
    <motion.aside
      className="fixed top-0 left-3 h-screen flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Linha vertical contínua atrás dos ícones */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-screen w-px bg-gray-300" />

      {/* Ícones */}
      {socialLinks.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.4 }}
          className="relative z-10"
        >
          <Link href={item.href} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center p-2 rounded-full bg-gray-600 hover:bg-black hover:text-white transition-all duration-300">
              {item.icon}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.aside>
  );
}
