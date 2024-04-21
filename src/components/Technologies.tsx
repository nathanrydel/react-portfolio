import { BiLogoPostgresql, BiLogoFlask, BiLogoWordpress } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiShopify, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandWebflow } from "react-icons/tb";


function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <h2 className="my-16 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4"><RiReactjsLine className="text-7xl text-cyan-400" /></div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-sky-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoFlask className="text-7xl text-cyan-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiShopify className="text-7xl text-lime-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoWordpress className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandWebflow className="text-7xl text-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;