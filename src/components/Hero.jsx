import React from 'react'
import profile from "../assets/profile.jfif"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <section className='py-3 mt-1 md:h-[89vh] max-w-[1200px] mx-auto text-white'>
        <div  className='md:flex mx-auto md:justify-between items-center mt-20'>
            {/* text part */}
            <div className='text-center mt-9 mx-auto w-full md:w-1/2 md:text-left md:mx-10'>
                
                    <motion.p initial={{x:-50, opacity:0}} animate={{x:0, opacity:1
        }} transition={{duration:1}} className='text-2xl'>Hello,</motion.p>
                    <motion.h1 initial={{x:-100, opacity:0}} animate={{x:0, opacity:1
        }} transition={{duration:1}} className='font-bold text-3xl mt-4 lg:text-4xl'>I'm <span className='font-bold text-yellow-300 text-3xl lg:text-4xl'>Bibek Bista</span> </motion.h1>
                    <motion.p initial={{x:-100, opacity:0}} animate={{x:0, opacity:1
        }} transition={{duration:1,delay:0.5}}  className='font-bold text-3xl mt-8 lg:text-4xl'>Frontend Developer</motion.p>
                    <motion.p initial={{x:-100, opacity:0}} animate={{x:0, opacity:1
        }} transition={{duration:1,delay:0.7}} className='font-serif w-[90%] mx-auto mt-9 mb-7 md:w-[100%]'>I am a skilled and passionate web designer with 
                        qualification and experience in creating visually 
                        appealing and user-friendly websites</motion.p>
                    {/* <div className='mt-4 px-3 py-3 w-32 bg-yellow-300 mx-auto rounded-lg cursor-pointer md:mx-0 text-red-600 shadow-xl font-mono hover:scale-105'>Download CV</div> */}
                    <motion.a initial={{x:-100, opacity:0}} animate={{x:0, opacity:1
        }} transition={{duration:3,delay:1}} whileHover={{scale:2}} href="/cv.pdf" 
                        download="My_CV.pdf" 
                        className="px-3 py-3 w-32 bg-yellow-300 mx-auto rounded-lg cursor-pointer md:mx-0 text-red-600 shadow-xl font-mono hover:scale-105">
                         Download CV
                    </motion.a>
                
            </div>
            {/* image part */}
            <div className='w-[90%] h-auto mx-8 mt-8 md:w-1/2 justify-center'>
                <motion.img initial={{y:-10}} animate={{y:[0,-15,0,-15],opacity:1}} transition={{
                    duration:4,
                    repeat:Infinity,
                    repeatType: "reverse",
                    
                }} className='mx-auto md:w-[80%] rounded-full shadow-md' src={profile}></motion.img>

            </div>

        </div>
       

    </section>
  )
}

export default Hero