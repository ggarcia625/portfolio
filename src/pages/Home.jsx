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
          Full-Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a highly skilled Full-Stack Web Developer with 4.5 years of
          experience in designing and developing innovative web applications.
          Proven track record in leading projects, mentoring junior developers,
          and optimizing user experiences. Adept at working with MERN stack,
          React, and modern CI/CD practices.
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
