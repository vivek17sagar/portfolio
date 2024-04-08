import React from 'react'
import linkdin from '../assets/linkdin.gif'
import git from '../assets/git.png'
import gmail from '../assets/mail.gif'
import leet from '../assets/leet.png'

const Contact = () => {
  return (
    <div className='absolute bottom-48 flex flex-col gap-5'>
    <div className='absolute transition-all p-2 pr-8 delay-150 rounded-lg flex gap-4 overflow-hidden bg-white text-black -left-[70px] hover:left-0 duration-400 cursor-pointer'><div>Linkdin</div>  <img src={linkdin}/></div>
    <div className='absolute transition-all p-2 pr-8 delay-150 rounded-lg flex gap-4 overflow-hidden top-[3rem] bg-white text-black -left-[67px] hover:left-0 duration-400 cursor-pointer'><div>Github</div>  <img className='w-6' src={git}/></div>
    <div className='absolute transition-all p-2 pr-8 delay-150 rounded-lg flex gap-4 overflow-hidden top-[6rem] bg-white text-black -left-[60px] hover:left-0 duration-400 cursor-pointer'><div>Gmail</div>  <img className='w-6' src={gmail}/></div>
    <div className='absolute transition-all p-2 pr-8 delay-150 rounded-lg flex gap-4 overflow-hidden top-[9rem] bg-white text-black -left-[84px] hover:left-0 duration-400 cursor-pointer'><div>Leetcode</div>  <img className='w-6' src={leet}/></div>

    </div>
  )
}

export default Contact