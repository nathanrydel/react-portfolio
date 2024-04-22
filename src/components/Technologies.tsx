import { BiLogoPostgresql, BiLogoFlask, BiLogoWordpress } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiShopify, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandWebflow } from "react-icons/tb";

import { motion } from "framer-motion";

const iconVariants = (delay: number) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.65)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoFlask className="text-7xl text-cyan-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiShopify className="text-7xl text-lime-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.85)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoWordpress className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandWebflow className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;