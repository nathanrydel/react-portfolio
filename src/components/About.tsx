import { ABOUT_TEXT } from "../constants/db";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-16 text-center text-4xl">
        About <span className="text-neutral-400">Me</span>
      </h2>
      {/* <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src="" alt="Candid photo" className="rounded-2xl" />
          </div>
        </div> */}
      <div className="w-full mx-auto lg:w-1/2">
        <div className="flex justify-center text-center">
          <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
    // </div >
  );
}

export default About;