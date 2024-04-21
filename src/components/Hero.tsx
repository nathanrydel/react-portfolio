import HERO from '../assets/RydelHeadshot.webp';
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight text-center lg:mt-16 lg:text-8xl">
              Nathan Rydel
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
            <p className="my-2 max-w-xl py-6 font-light text-center lg:text-start tracking-tighter">
              I am a passionate <span className="font-bold italic">Full Stack Developer</span> with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, Flask, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="size-[340px]" src={HERO} alt="Nathan Rydel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;