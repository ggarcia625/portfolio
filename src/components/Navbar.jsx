import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";

// import { BsFillPersionLinesFill } from 'react-icons/bs'
import { BsPersonVcard } from "react-icons/bs";
import logo from "../assets/logo.png";
import resume from "../assets/Gregory.Garcia.Resume.pdf";
const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const handleMobileNav = () => {
    setNavMobile(!navMobile);
  };
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = 'greggarcia426@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setIsCopied(true);

    // Reset the "Copied" status after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#151729] text-gray-300">
      <div>
        <img src={logo} alt="Logo Iamge" style={{ width: "50px" }} />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleMobileNav} className="md:hidden z-10 cursor-pointer">
        {navMobile ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          navMobile
            ? "absolute top-0 left-0 w-full h-screen bg-[#151729] flex flex-col justify-center items-center "
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleMobileNav}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleMobileNav}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleMobileNav}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleMobileNav}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleMobileNav}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[7%] left-3">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6f7ed4]">
            <a
              href={resume}
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsPersonVcard size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cadcf8] text-[#c71610]">
            <button
              className="flex justify-between items-center w-full text-slate-900"
              onClick={handleCopyToClipboard}
            >
              {isCopied ? 'Copied!' : <span>Copy <br/>Email</span>} <BiLogoGmail style={{ color: "#c71610" }} size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            <a
              href="https://www.linkedin.com/in/gregory-garcia-42a160156/"
              className="flex justify-between items-center w-full text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]">
            <a
              href="https://github.com/ggarcia625"
              className="flex justify-between items-center w-full text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
