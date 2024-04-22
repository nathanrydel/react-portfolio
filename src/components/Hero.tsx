import HERO from '../assets/RydelHeadshot.webp';
import { HERO_CONTENT } from '../constants/db';
import RESUME from '../assets/NathanRydelResume.pdf';
import { motion } from "framer-motion";
import { ltor, rtor } from '../utils/animations';

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={ltor(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight text-center lg:mt-8 lg:text-8xl">
              Nathan Rydel
            </motion.h1>
            <motion.span
              variants={ltor(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={ltor(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-center lg:text-start tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={rtor(1)}
              initial="hidden"
              animate="visible"
              className="size-[340px]" src={HERO} alt="Nathan Rydel" />
          </div>
          <div className='flex justify-center'>
            <motion.a
              variants={rtor(1.2)}
              initial="hidden"
              animate="visible"
              href="#Contact"
              className="my-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:bg-clip-border tracking-tight text-transparent hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded mx-8"
            >
              Work with me
            </motion.a>
            <motion.a
              download
              variants={rtor(1.2)}
              initial="hidden"
              animate="visible"
              href={RESUME}
              className="my-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:bg-clip-border tracking-tight text-transparent hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded mx-8">Resume</motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;