import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#151729] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold">
              <span className="border-b-4 border-rose-400">About</span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="sm:text-right text-4xl font-bold">
          <p>Hi I am Greg, nice to meet you. Pleae Take a look around</p>
        </div>
        <div className="max-w-[1000px] w-full pt-4">
          <div>
            <p className="p-4">
              In my dynamic four-year trajectory as a software developer, I
              embarked on a transformative journey, starting at Lam Research as
              a Frontend Web Developer. There, I engineered a real-time
              semiconductor manufacturing progress application for the Pilot
              Group, laying the foundation for my technical prowess.
            </p>
            <p className="p-4">
              Transitioning to Premiere Digital, I assumed the role of Lead
              Frontend Developer, orchestrating the ground-up reconstruction of
              their streaming content management application.
            </p>
            <p className="p-4">
              Despite a brief layoff, this setback led me to Los Alamos National
              Laboratory, where I thrived as a Full Stack Web Developer. In
              addition to leading the development of an intricate
              e-commerce-like purchasing application, I took on the role of
              mentor, guiding junior developers through the complexities of our
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
