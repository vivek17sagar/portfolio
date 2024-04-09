import React from "react";
import layer_full_img from "../assets/layer-full-img.jpeg";
import layer_img1 from "../assets/layer-img1.jpeg";
import layer_img2 from "../assets/layer-img2.jpeg";
import layer_img3 from "../assets/layer-img3.jpeg";
import layer_img4 from "../assets/layer-img4.jpeg";
import layer_img5 from "../assets/layer-img5.jpeg";

import spotify_full_img from "../assets/spotify-full-img.jpeg";
import spotify_img1 from "../assets/spotify-img1.jpeg";
import spotify_img2 from "../assets/spotify-img2.jpeg";
import spotify_img3 from "../assets/spotify-img3.jpeg";
import spotify_img4 from "../assets/spotify-img4.jpeg";
import spotify_img5 from "../assets/spotify-img5.jpeg";
import spotify_img6 from "../assets/spotify-img6.jpeg";

import netflix_full_img from "../assets/netflix-full-img.jpeg";
import netflix_img1 from "../assets/netflix-img1.jpeg";
import netflix_img2 from "../assets/netflix-img2.jpeg";
import netflix_img3 from "../assets/netflix-img3.jpeg";
import netflix_img4 from "../assets/netflix-img4.jpeg";
import netflix_img5 from "../assets/netflix-img5.jpeg";
import netflix_img6 from "../assets/netflix-img6.jpeg";

const Projects = () => {
  return (
    <div className="h-46 mt-20 flex flex-col gap-10" id="projects">
      <h1 className="Projects_title text-yellow-400 text-center text-[3rem] underline tracking-widest z-50">
        Projects
      </h1>
      <div className="flex justify-between">
        <div className="flex gap-4 p-10">
          <div>
            <div>
              <img src={layer_full_img} alt="layer-full-img" className="w-44 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <img src={layer_img1} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={layer_img2} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={layer_img3} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
            <div className="flex gap-2">
              <img src={layer_img4} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={layer_img5} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={layer_img3} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
        <div className="p-10 text-white">
          <div>
            <h1 className="text-white text-[2rem] pb-2">Layers-Skin</h1>
          </div>
          <li>
            User can Search, Navigate, Add items to cart, remove item from cart.
          </li>
          <li>
            Individual Navigation way for different mobile brands User Friendly
            website.
          </li>
          <li> Login (Demo username:- layer and password:- 123456)</li>
          <h2 className="mt-5">
            {" "}
            This Website Layer create using React JS and Javascript. It is a
            website in which user can Search Products,
            <br /> Navigate individual Brands, Access cart.
          </h2>
          <div className="flex gap-5 mt-5">
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open("https://647e7d4ea3156c3d4d08857e--stupendous-stardust-176183.netlify.app/")
              }
            >
              Hosted URL
            </button>
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open(
                  "  https://github.com/vivek17sagar/Layers-Skin"
                
                )
              }
            >
              Code URL
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      <div className="flex">
        <div className="p-10 text-white">
        <div>
            <h1 className="text-white text-[2rem] pb-2">Spotify</h1>
          </div>
          <li>
          User can play song and add his favourite songs to Liked Song list and remove songs from liked song and one<br/> thing user can play song from anywhere like from liked song ,from create playlist, from search.
          </li>
          <li>
          User also Search Songs and user can see dynamic color effect on website. and experience better UI here.
          </li>
          <li>It has also a signup and login option. User only can play songs and enjoy functionality of webpage after login into it.<br/> (Demo username:- spotify and password:- 123456)</li>
          <h2 className="mt-5">
          This app Spotify is a digital music, podcast,  that gives you access to millions of songs. Basic functions such as<br/> playing music, you can Search music, you can store your favourite songs in liked song list.


          </h2>
          <div className="flex gap-5 mt-5">
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open("https://rainbow-melba-be891f.netlify.app/")
              }
            >
              Hosted URL
            </button>
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open(
                  "https://github.com/vivek17sagar/Spotify-Clone"
                )
              }
            >
              Code URL
            </button>
          </div>
        
        </div>
        <div className="flex gap-4 ">
        <div>
            <div>
              <img src={spotify_full_img} alt="layer-full-img" className="w-44 h-80 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <img src={spotify_img1} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={spotify_img2} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={spotify_img3} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
            <div className="flex gap-2">
              <img src={spotify_img4} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={spotify_img5} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={spotify_img6} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
      </div>
      
      {/* ---------------------------------------------------------------- */}
      <div className="flex">
        <div className="flex gap-4 p-10">
          <div>
            <div>
              <img src={netflix_full_img} alt="layer-full-img" className="w-44 h-72 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <img src={netflix_img1} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={netflix_img3} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={netflix_img4} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
            <div className="flex gap-2">
              <img src={netflix_img2} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={netflix_img5} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
              <img src={netflix_img6} alt="layer-full-img" className="w-60 hover:scale-125 cursor-pointer duration-200" />
            </div>
          </div>
        </div>
        <div className="p-10 text-white">
          <div>
            <h1 className="text-white text-[2rem] pb-2">Netflix</h1>
          </div>
          <li>
          User Friendly Functional Webpage You Can Play Videos.
          </li>
          <li>
          Responsive Website.
          </li>
          <li> Login (Demo username:- layer and password:- 123456)</li>
          <h2 className="mt-5">
            {" "}
            This Website create using HTML,CSS and Javascript. It is a Landing page of Netflix and The main page<br/> where you can play the videos by clicking on that.
          </h2>
          <div className="flex gap-5 mt-5">
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open("https://dancing-dasik-600ef6.netlify.app/")
              }
            >
              Hosted URL
            </button>
            <button
              className="bg-transparent hover:bg-yellow-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded"
              onClick={() =>
                window.open(
                  "https://github.com/vivek17sagar/NETFLIX-Clone"
                
                )
              }
            >
              Code URL
            </button>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      
      {/* ---------------------------------------------------------------- */}
    </div>
  );
};

export default Projects;
