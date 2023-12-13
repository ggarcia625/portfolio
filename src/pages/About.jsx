import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#151729] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-rose-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
                  Hi I am Greg, nice to meet you. Pleae Take a look around</p>
          </div>
          <div>
            <p>
            I am a dynamic Full-Stack Web Developer committed to crafting applications that captivate and delight users. 
            With a robust background spanning four years in Front-End development and over a year as a seasoned 
            Full-Stack developer, I bring a wealth of expertise to every project I undertake. 
            My passion for creating seamless, user-centric experiences drives my commitment to 
            excellence in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
