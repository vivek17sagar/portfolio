import React, { useState } from "react";
import bgImage2 from "../assets/bgImage2.png";
import Chart from "../Design/Chart";
import programming_icon from "../assets/programmig_icon.png";
import tech_icon from "../assets/tech_icon.png";
import core_icon from "../assets/core_icon.png";
import tools_icon from "../assets/tools_icon.png";
import skill_icon from "../assets/skill_icon.png";

const About = () => {
  const [activeSkill, setActiveSkill] = useState("programming");

  const dataSet = {
    technical: [
      {
        name: "React-JS",
        color: "bg-blue-500",
        percentage: "80%",
      },
      {
        name: "JavaScript",
        color: "dark:bg-yellow-500",
        percentage: "90%",
      },
      {
        name: "CSS",
        color: "dark:bg-green-500",
        percentage: "85%",
      },
      {
        name: "HTML",
        color: "dark:bg-orange-500",
        percentage: "80%",
      },
      {
        name: "Bootstrap",
        color: "dark:bg-[#7912f9]",
        percentage: "75%",
      },
      {
        name: "Java",
        color: "dark:bg-red-500",
        percentage: "70%",
      },
    ],
    programming: [
      {
        name: "Javascript",
        color: "bg-yellow-400",
        percentage: "80%",
      },
      {
        name: "Java",
        color: "dark:bg-orange-400",
        percentage: "70%",
      },
    ],
    Technologies: [
      {
        name: "React-Js",
        color: "bg-blue-500",
        percentage: "90%",
      },
      {
        name: "Bootstrap",
        color: "dark:bg-[#7912f9]",
        percentage: "70%",
      },
      {
        name: "Material-UI",
        color: "dark:bg-[#007fff]",
        percentage: "75%",
      },
      {
        name: "Ant-UI",
        color: "dark:bg-red-600",
        percentage: "75%",
      },
      {
        name: "Tailwind Css",
        color: "dark:bg-[#07a2d2]",
        percentage: "70%",
      },
    ],
    Core: [
      {
        name: "React-Js",
        color: "dark:bg-[#0f43a4]",
        percentage: "90%",
      },
      {
        name: "Material-UI",
        color: "dark:bg-[#007fff]",
        percentage: "75%",
      },
      {
        name: "Bootstrap",
        color: "dark:bg-[#7912f9]",
        percentage: "70%",
      },
    ],
    tools: [
      {
        name: "Figma",
        color: "dark:bg-[#0f43a4]",
        percentage: "80%",
      },
      {
        name: "Git",
        color: "dark:bg-orange-500",
        percentage: "85%",
      },
      {
        name: "Chrome",
        color: "dark:bg-green-500",
        percentage: "70%",
      },
      {
        name: "Canva",
        color: "dark:bg-blue-500",
        percentage: "87%",
      },
      {
        name: "Chatgpt",
        color: "dark:bg-green-300",
        percentage: "65%",
      },
    ],
  };



  return (
    <div>
      <div className="z-50">
        <h1 className="text-yellow-400 text-center text-[3rem] underline tracking-widest z-50">
          ABOUT
        </h1>
        <div className="text-center flex justify-center z-50 ">
          <img
            src={bgImage2}
            style={{ position: "absolute", zIndex: "0", opacity: "0.7" }}
            alt="backgroundImage"
          ></img>
          <p className="w-3/4 tracking-[0.2rem] text-white leading-10 text-[1.2rem] z-50">
            {" "}
            With one year of experience as a{" "}
            <span className="text-[#687EFF]">Frontend Developer</span> at Track
            Four Infotech Pvt Ltd, I've specialized in crafting dynamic web
            interfaces using technologies like JavaScript and ReactJS. My role
            involved seamlessly integrating third-party APIs and maintaining
            high coding standards for scalable solutions. Working
            collaboratively in Track Four's dynamic environment, I've honed my
            skills in delivering captivating user experiences. I look forward to
            continuing my contributions to innovative projects in the frontend
            development domain at Track Four Infotech.
          </p>
        </div>
        <div className=" p-16 flex justify-between">
          <div
            className="border-solid w-1/4 bg-yellow-400/50 p-[5rem] flex flex-col gap-5 flex"
            style={{
              background: " rgba(0, 0, 0,0.2)",
              borderRadius: "16px",
              boxShadow: "0 0px 25px 2px #facc15",
              backdropFilter: "blur(2px)",
              // -webkit-backdrop-filter: blur(3px);
              border: "1px solid rgba(255, 255, 255, 0.49)",
            }}>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white ${
                activeSkill == "technical" ? "bg-[#687EFF]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("technical")}
            >
              <div>
                <img
                  src={skill_icon}
                  alt="programming-Icon"
                  className="w-6"
                />
              </div>
              <div>Technical Skills</div>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white ${
                activeSkill == "programming" ? "bg-[#687EFF]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("programming")}
            >
              <div>
                <img
                  src={programming_icon}
                  alt="programming-Icon"
                  className="w-6"
                />
              </div>
              <div>Programming</div>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white ${
                activeSkill == "Technologies" ? "bg-[#687EFF]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("Technologies")}
            >
              <div>
                <img src={tech_icon} alt="tech-Icon" className="w-6" />
              </div>
              <div>Technologies</div>
            </div>

            {/* <div
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2"
              onClick={() => setActiveSkill("Core")}
            >
              <div>
                <img src={core_icon} alt="core-Icon" className="w-6" />
              </div>
              <div>Core CS</div>
            </div> */}
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white ${
                activeSkill == "tools" ? "bg-[#687EFF]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("tools")}
            >
              <div>
                <img src={tools_icon} alt="tools-Icon" className="w-6" />
              </div>
              <div>Tools</div>
            </div>
          </div>
          <div
            className="border-solid w-2/4 bg-yellow-400/50 p-[5rem] flex flex-col gap-5 flex min-h-[600px]"
            style={{
              background: " rgba(0, 0, 0,0.2)",
              borderRadius: "16px",
              boxShadow: "0 0px 25px 2px #facc15",
              backdropFilter: "blur(3px)",
              // -webkit-backdrop-filter: blur(3px);
              border: "1px solid rgba(255, 255, 255, 0.49)",
            }}
          >
            <Chart dataSet={dataSet} activeSkill={activeSkill} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
