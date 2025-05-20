import React, { useState } from "react";
import Timeline from "../components/Timeline";

const About = () => {

  return (
    <div name="about" className="w-full h-screen p-8 bg-[#151729] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold">
              <span className="border-b-4 border-rose-400">About</span>
            </p>
          </div>
        </div>
        <div className="sm:text-right text-3xl font-bold">
          <p>Hi I am Greg, nice to meet you. Pleae Take a look around and explore my timeline</p>
        </div>
        <div className="max-w-[1000px] h-full p-4 flex flex-col items-center justify-center">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
