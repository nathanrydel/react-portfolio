import { FaLinkedin, FaGithub } from "react-icons/fa";
import NrLogo from "../../public/NrLogoWhite.svg";
function Navbar() {
  return (
    <nav className="mb-8 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        {/* TODO: Make an SVG Logo */}
        <a className="mx-2 text-3xl" href="/">
          <img src={NrLogo} alt="Logo" width={48} height={48} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a href="https://github.com/nathanrydel">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nathan-rydel/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;