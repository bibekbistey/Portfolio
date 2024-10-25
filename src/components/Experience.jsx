import React from 'react'
import html from "../assets/html.webp"
import css from "../assets/Css.png"
import react from "../assets/React.png"
import flutter from "../assets/flutter.png"
import nodejs from "../assets/nodejs.png"
import tailwind from "../assets/tailwind css.png"

const Experience = () => {
    const logo=[{
        img:html,
        name:"HTML",
        style:"shadow-color-orange"
    },
    {
        img:css,
        name:"CSS",
        style:"shadow-color-orange"
    },
    {
        img:react,
        name:"REACT",
        style:"shadow-color-orange"
    },
    {
        img:tailwind,
        name:"TAILWIND CSS",
        style:"shadow-color-orange"
    },
    {
        img:flutter,
        name:"FLUTTER",
        style:"shadow-color-orange"
    },
    {
        img:nodejs,
        name:"NODE JS",
        style:"shadow-color-orange"
    },
    
]
  return (
    <div className=' items-center max-w-[1200px] mx-auto bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='Font-bold '>
            <h1 className='text-3xl border-b border-white w-40 text-center mx-auto md:mx-5 font-mono'>Experience</h1>
        </div>
        <div className='mt-4 flex '>
            <h1 className='text-center mx-auto md:mx-5 font-mono'>These are the technologies I've worked for</h1>
        </div>
        {/* logos */}
        <div className='border-black h-full mb-5 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {logo.map((m,index)=>
                <div className='w-1/2 h-80 md:h-60 border mx-auto shadow shadow-orange-400 hover:scale-105 mt-2 mb-2'>
                <img className='w-3/4 h-[80%] md:h-[70%] mx-auto mt-5 object-cover' src={m.img}></img>
                <h1 className='text-center font-bold mt-4'>{m.name}</h1>
            </div>
            )}
            

        </div>
    </div>
  )
}

export default Experience