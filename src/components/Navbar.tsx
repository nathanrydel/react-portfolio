import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <span className="text-4xl">
          Nathan Rydel
        </span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
}

export default Navbar;