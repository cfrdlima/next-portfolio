"use client";
import { motion } from "framer-motion";

export default function Start() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen gap-6 overflow-hidden text-center from-gray-50 to-gray-100">
      {/* Título */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-8xl"
      >
        Olá, meu nome é Claudinei.
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-medium text-4xl"
      >
        E eu sou desenvolvedor!
      </motion.p>

      {/* Linha animada */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="h-1 bg-blue-600 mt-4"
      />
    </section>
  );
}
