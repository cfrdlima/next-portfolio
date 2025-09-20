"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Start() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen gap-6 overflow-hidden text-center from-gray-50 to-gray-100">
      {/* Título com efeito de digitação */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-8xl"
      >
        <TypeAnimation
          sequence={[
            "Olá, meu nome é Claudinei.", // texto
            1000, // espera 1s
          ]}
          speed={50} // velocidade de digitação
          wrapper="span"
          repeat={0} // não repete
          cursor={true} // mostra o cursor piscando
        />
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="font-medium text-4xl"
      >
        E eu sou desenvolvedor!
      </motion.p>

      {/* Linha animada */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1, delay: 2 }}
        className="h-1 bg-blue-600 mt-4"
      />
    </section>
  );
}
