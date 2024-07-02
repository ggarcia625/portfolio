import * as React from "react";
import runner from "../assets/runner.svg";
import nuclear from "../assets/nuclear.svg";
import chemistry from "../assets/chemistry.svg";
import computer from "../assets/computer_chip.svg";
import boot from "../assets/boot.svg";
import streaming from "../assets/streaming.svg";
import compliance from "../assets/compliance.svg";
import { useState } from "react";

export default function Timeline() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const timelineItems = [
    {
      desc: "I competed in cross country and track & field from middle school through college, culminating in qualifying for Nationals in Track & Field.",
      img: runner,
      title: "Collegiate Runner",
    },
    {
      desc: "At Southern Oregon University, I studied chemistry and got my first exposure to coding by working out quantum mechanical kinetic averages in Python.",
      img: chemistry,
      title: "B.S. Chemistry",
    },
    {
      desc: "After graduating, I got a role in nuclear weapons manufacturing at Los Alamos National Laboratory (LANL).",
      img: nuclear,
      title: "LANL",
    },
    {
      desc: "During my time at Los Alamos, I realized chemistry wasn't for me as a career, so I decided to attend a bootcamp.",
      img: boot,
      title: "Bootcamp",
    },
    {
      desc: "I got a frontend developer role at Lam Research, building out intern dashboards and projected completion dates for manufacturing.",
      img: computer,
      title: "Lam Research",
    },
    {
      desc: "After 2.5 years, I moved on to a lead frontend developer role at Premiere Digital, rebuilding their customer-facing streaming content placement platform.",
      img: streaming,
      title: "Premiere Digital",
    },
    {
      desc: "I was laid off from Premiere and found myself back at Los Alamos, building full-stack nuclear compliance apps using the MERN tech stack.",
      img: compliance,
      title: "LANL Full-Stack",
    },
  ];

  const handleItemClick = (i) => {
    setSelectedItemIndex(selectedItemIndex === i ? null : i);
  };

  return (
    <>
      {timelineItems.map((event, i) => (
        <>
          <img
            onClick={() => handleItemClick(i)}
            src={event.img}
            className="shadow-md hover:scale-125 duration-500"
            style={{ width: "60px", height: "60px" }}
          />
          {i + 1 !== timelineItems.length && (
            <span
              style={selectedItemIndex === i ? { display: "none" } : null}
              className="border-l-2 h-12 my-[5px] mx-4 border-gray-300"
            ></span>
          )}
          <div
            className={`relative ${
              (i + 1) % 2 !== 0 ? "right" : "left"
            }-1/4 flex items-center w-[50%]`}
          >
            {selectedItemIndex === i && (
              <>
                {(i + 1) % 2 === 0 && (
                  <div className="flex items-center">
                    <span className="text-center w-[75px]">{event.title}</span>
                    <span className="border-t-2 w-20 my-[5px] mx-4 grow-0 border-gray-300"></span>
                  </div>
                )}
                <p className="border rounded-md p-2 border-gray-300">
                  {event.desc}
                </p>

                {(i + 1) % 2 !== 0 && (
                  <div className="flex items-center">
                    <span className="border-t-2 w-20 my-[5px] mx-4 grow-0 border-gray-300"></span>
                    <span className="text-center w-[75px]">{event.title}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      ))}
    </>
  );
}
