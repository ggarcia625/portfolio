import React from "react";
import { data } from '../data/data'

const Work = () => {
      const projects = data;
  return (
    <div name="work" className="bg-[#151729] text-gray-300 h-screen w-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-400">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {projects.map((project, index) => (
          <div 
           key={index}
           style={{ backgroundImage: `url(${project.image})`}} 
          className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
              </span>
              <div className="pt-8 text-center">
                <a href={project.live} rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">Demo</button>
                </a>
                <a href={project.github} rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
