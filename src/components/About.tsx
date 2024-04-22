import { ABOUT_TEXT } from "../constants/db";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0, scale: 0.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="mt-16 text-center text-4xl"
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 1.4 }}
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src="" alt="Candid photo" className="rounded-2xl" />
          </div>
        </motion.div> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 1.4 }}
          className="w-full mx-auto lg:w-1/2">
          <div className="flex justify-center text-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div >
  );
}

export default About;