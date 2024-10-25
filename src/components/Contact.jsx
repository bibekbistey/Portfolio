import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.webp"
import insta from "../assets/instagram.webp"
import github from "../assets/github1.png"


const Contact = () => {
    const social=[{
        name:"Linkedin",
        logo:linkedin,
        link:"https://www.linkedin.com/in/bibek-bista-025a92292/"

    },
    {
        name:"Facebook",
        logo:facebook,
        link:"https://www.linkedin.com/in/bibek-bista-025a92292/"

    },
    {
        name:"Instagram",
        logo:insta,
        link:"https://www.instagram.com/bibek_bistey/"

    },
    {
        name:"Github",
        logo:github,
        link:"https://github.com/bibekbistey"

    }
]
    
  return (
    <section className=''>
        <div className='max-w-[1200px] mx-auto h-[20vh] mt-10 lg:mt-40'>
        <div className='text-center'>
            <h1 className='text-center font-mono font-bold text-2xl'>Connect with me</h1>
        </div>
        <div className='mt-4 gap-5 lg:gap-2 items-center md:grid grid-cols-2 lg:grid-cols-4 '>
            {social.map((media,index)=>
            <div className='w-12 h-12 rounded-full flex mx-auto mb-10 lg:w-20 lg:h-20 shadow-xl hover:bg-slate-300 hover:scale-105 '>
                <a href={media.link}>
                    <img className='h-full object-cover' src={media.logo}></img>
                    <h1 className='font-mono'>{media.name}</h1>
                </a>
                

            </div>
            )}

        </div>
        
        
        </div>
    </section>
    
  )
}

export default Contact