import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.webp"
import insta from "../assets/instagram.webp"
import github from "../assets/github1.png"
import {motion} from "framer-motion"


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
    <section className='text-white'>
        <div className='max-w-[1200px] mx-auto h-[20vh] mt-10 lg:mt-40'>
        <div className='text-center'>
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.4}} className='text-center font-mono font-bold text-2xl'>Connect with me</motion.h1>
        </div>
        <div className='mt-4 gap-5 lg:gap-2 items-center md:grid grid-cols-2 lg:grid-cols-4 '>
            {social.map((media,index)=>
            <motion.div 
                initial= {{ opacity: 0, y: 20 }}
                animate= { {opacity: 1, y: 0 }}
                // transition: {delayChildren: 0.2, staggerChildren: 0.3 }
                transition={{ duration: 0.5, delay: index * 0.3 }}
           
             className='w-12 h-12 rounded-full flex mx-auto mb-10 lg:w-20 lg:h-20 shadow-xl hover:bg-slate-300 hover:scale-105 '>
                
                
                <a            
            href={media.link} target='_blank'>
                    <img className='h-full object-cover' src={media.logo}></img>
                    <h1 className='font-mono'>{media.name}</h1>
                </a>
                

            </motion.div>
            )}

        </div>
        
        
        </div>
    </section>
    
  )
}

export default Contact