import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#151729]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bottom-5">
        <p className="text-rose-400">Hi, my name is</p>
        <h1 className="text-4xl  sm:text-7xl font-bold text-[#ccd6f6]">
          Greg Garcia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full-Stack web developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a dynamic Full-Stack Web Developer committed to crafting
          applications that captivate and delight users. With a robust
          background spanning four years in Front-End development and over a
          year as a seasoned Full-Stack developer, I bring a wealth of expertise
          to every project I undertake. My passion for creating seamless,
          user-centric experiences drives my commitment to excellence in the
          ever-evolving world of web development.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-400">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
