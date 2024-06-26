import React, { useState } from "react";
import bgImage2 from "../assets/bgImage2.png";
import './styles.css'
import Chart from "../Design/Chart";
import programming_icon from "../assets/programmig_icon.png";
import tech_icon from "../assets/tech_icon.png";
import core_icon from "../assets/core_icon.png";
import tools_icon from "../assets/tools_icon.png";
import skill_icon from "../assets/skill_icon.png";
import dataSet from '../Data/SkillData'

const About = () => {
  const [activeSkill, setActiveSkill] = useState("technical");

  return (
    <div id="about">
      <div className="">
        <h1 className="About_title text-yellow-400 text-center text-[3rem] underline tracking-widest z-40">
          ABOUT
        </h1>
        <div className="text-center flex justify-center z-40 ">
          {/* <img
            src={bgImage2}
            style={{ position: "absolute", zIndex: "0", opacity: "0.7" }}
          ></img> */}
          <p className="w-3/4 tracking-[0.2rem] text-white leading-10 text-[1.2rem] z-40">
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
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white ${
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
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white ${
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
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white ${
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
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-white ${
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
            className="border-solid w-2/4 bg-yellow-400/50 p-[5rem] flex flex-col gap-5 flex min-h-[700px]"
            style={{
              background: " rgba(0, 0, 0,0.2)",
              borderRadius: "16px",
              boxShadow: "0 0px 25px 2px #facc15",
              backdropFilter: "blur(3px)",
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
