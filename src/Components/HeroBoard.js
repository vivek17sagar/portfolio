import React from "react";
import About from "./About";
import Design from "../Design/Design";

const HeroBoard = () => {
  return (
    <div className="flex h-screen items-center text-white z-50">
        <Design />

      <div className="basis-1/2 pl-10">
        <h1 className="font-bold text-7xl opacity-80 mb-5 text-yellow-400">Hii!! Vivek Sagar</h1>
        <h3 className="tracking-widest">
          With one year of experience as a Frontend Developer at Track Four
          Infotech Pvt Ltd, I've specialized in crafting dynamic web interfaces
          using technologies like JavaScript and ReactJS. My role involved
          seamlessly integrating third-party APIs and maintaining high coding
          standards for scalable solutions. Working collaboratively in Track
          Four's dynamic environment, I've honed my skills in delivering
          captivating user experiences. I look forward to continuing my
          contributions to innovative projects in the frontend development
          domain at Track Four Infotech.
        </h3>
        <button className="bg-yellow-400 px-5 py-3 rounded-lg mt-5 font-semibold">Hire Me</button>
      </div>

      <div className="basis-1/2 flex justify-center ">
        <div>
        <img src="https://th.bing.com/th/id/OIP._noPCytLEn5Qb3pirfg2YwHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="profileImgae" className="rounded-full w-96 z-30"/>

        </div>
        {/* <div className="w-36 h-0 border-r-[900px] border-r-transparent border-b-[250px] border-b-transparent bg-yellow-500 border-t-[100px] border-t-transparent">

        <h1 className="font-extrabold text-[5rem]">Javascript<br/>Developer</h1>
        </div> */}
      </div>
      
      </div>
     

  );
};

export default HeroBoard;
