import React from "react";
import { FaReact, FaGithubSquare } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import css from "../assets/css.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#151729] text-gray-300 w-full h-screen">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-rose-400">Skills</p>
          <p className="py-4">Technologies I am familiar with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center px-8 gap-6 w-full">
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <BiLogoJavascript
              className="text-[#F0DB4F] w-[80px] h-[80px] mx-auto"
            />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <FaReact className="text-[#61DBFB] w-[80px] h-[80px] mx-auto" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <img src={html} className="text-[#61DBFB] w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <img src={css} className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <img src={tailwind} className="w-20 mx-auto" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <img src={node} className="w-20 mx-auto" />
            <p>Node JS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <FaGithubSquare className="w-[80px] h-[80px] mx-auto" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-125 duration-500">
            <img src={mongo} className="w-20 mx-auto " />
            <p>Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
