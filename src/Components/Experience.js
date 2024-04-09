import React from "react";
import Stepper from "../Design/Stepper";

const Experience = () => {
  return (
    <>
    <div className="m-2" id="experience">
      <div>
        <h1 className="Experince_title text-yellow-400 text-center text-[3rem] underline tracking-widest z-50">
          Experience
        </h1>
      </div>
      <div className="flex mt-24">
        <div className="w-96 h-46 rotate-90"><Stepper/></div>
        <div className="flex flex-col h-96 gap-10">
        <div className=" text-white p-3">
            <h2>Newton School - (Intern)</h2>
            <div>
                <li>
                Full Stack Web Development with D.S.A till (Queue and Stack).
                </li>
                <li>
                Technical Stack Learned: Java, HTML, CSS, JavaScript, React.
                </li>
                <li>
                Participated in various coding contest organized by Newton School.
                </li>
                <li>
                Done various projects based on web technologies like Responsive websites, Making website clones of Netflix and Facebook etc.
                </li>
              
            </div>
        </div>
        <div className=" text-white p-3">
            <h2>Track Four Infotech - eOxegen (Software Developer)</h2>
            <div>
                <li>
                As a software developer at Track Four Infotech Pvt Ltd, I specialized in JavaScript and ReactJS technologies.Specialized in JavaScript & ReactJS for dynamic frontend solutions.
                </li>
                <li>
                Integrated third-party & internal APIs for seamless data exchange
                </li>
                <li>
                Ensured coding standards for scalability and maintainability.
                </li>
                <li>
                Collaborated cross-functionally to enhance application architecture.
                </li>
                <li>
                Proficient in troubleshooting & debugging to ensure reliability.
                </li>
                <li>
                Stayed updated with the latest JavaScript & ReactJS trends.
                </li>
                <li>
                Contributed to delivering high-quality and innovative solutions.
                </li>
              
            </div>
        </div>
        
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </>
  );
};

export default Experience;
