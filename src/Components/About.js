import React from "react";
import bgImage2 from '../assets/bgImage2.png'
import Chart from '../Design/Chart'
const About = () => {
  return (
    <div>

      <div className="z-50">
        <h1 className="text-yellow-400 text-center text-[3rem] underline tracking-widest z-50">
          ABOUT
        </h1>
        <div className="text-center flex justify-center z-50 ">
      <img src={bgImage2} style={{position:"absolute",zIndex:"0",opacity:"0.7"}}></img>
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
              background: " rgba(255, 244, 85,0.50)",
              borderRadius: "16px",
              boxShadow: "0 0px 25px 2px #facc15",
              backdropFilter: "blur(3px)",
              // -webkit-backdrop-filter: blur(3px);
              border: "1px solid rgba(255, 255, 255, 0.49)",

            }}
          >

              <div className="text-white bg-[#687EFF] text-center p-5 rounded-md font-bold text-[1.3rem]">Programming</div>
              <div className="text-white border text-center p-5 rounded-md font-bold text-[1.3rem]">Technologies</div>
            
              <div className="text-white border text-center p-5 rounded-md font-bold text-[1.3rem]">Core CS</div>
              <div className="text-white border text-center p-5 rounded-md font-bold text-[1.3rem]">Tools</div>
          </div>
          <div  className="border-solid w-2/4 bg-yellow-400/50 p-[5rem] flex flex-col gap-5 flex"
            style={{
              background: " rgba(255, 244, 85,0.50)",
              borderRadius: "16px",
              boxShadow: "0 0px 25px 2px #facc15",
              backdropFilter: "blur(3px)",
              // -webkit-backdrop-filter: blur(3px);
              border: "1px solid rgba(255, 255, 255, 0.49)",

            }}>
              <Chart/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
