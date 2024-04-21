import HERO from '../assets/RydelHeadshot.webp';
import { HERO_CONTENT } from '../constants/db';
import RESUME from '../assets/NathanRydelResume.pdf';

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-6xl font-thin tracking-tight text-center lg:mt-8 lg:text-8xl">
              Nathan Rydel
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
            <p className="my-2 max-w-xl py-6 font-light text-center lg:text-start tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="size-[340px]" src={HERO} alt="Nathan Rydel" />
          </div>
          <div className='flex justify-center'>
            <a
              href="#Contact" className="my-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:bg-clip-border tracking-tight text-transparent hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded mx-8"
            >
              Work with me
            </a>
            <a download href={RESUME} className="my-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:bg-clip-border tracking-tight text-transparent hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded mx-8">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;