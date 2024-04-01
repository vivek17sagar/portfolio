import React, { useEffect } from 'react'
import './styles.css'
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";


const Design = () => {
       
    useEffect(()=>{
      
        async function loadParticles(options) {
          await loadAll(tsParticles);
      
    
          await tsParticles.load({ id: "tsparticles", options });
        }
        
        const configs = {
          particles: {
            number: {
              value: 90
            },
            color: {
              value: "#facc15"
            },
            // links: {
            //   enable: true,
            //   distance: 0
            // },
            shape: {
              type: "triangle"
            },
            opacity: {
              value: 0.5
            },
          
            // size: {
            //   value: {
            //     min: 5,
            //     max: 2
            //   }
            // },
          

            move: {
              enable: true,
              speed: 2
            }
          },
         
        //   background: {
        //     color: "transparent"
        //   },
        //   poisson: {
        //     enable: true
        //   }
        };
        
        loadParticles(configs);
        
    },[])
  return (
   <div class="github" >
    {/* <a class="btn btn-link" href="https://github.com/matteobruni/tsparticles" title="Find more info on GitHub">
        <img class="img-fluid" id="gh-mark" src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt=""/>
    </a> */}
 
  </div>
  )
}

export default Design
