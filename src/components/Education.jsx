import React from 'react'
import {motion} from "framer-motion"

const Education = () => {
    const education=[{
        level: "SEE",
        name:"English preparatory school",
        location:"Minbhuwan, Kathmandu",
        year:"2074 B.S (2017 AD)",
        grades:"3.70"
    },
    {
        level:"Grade 12",
        name:"Unigliobe Higher Secondary School",
        location:"Kamladi, Kathmandu",
        year:"2076 B.S (2020 AD)",
        grades:"3.19"
    },
    {
        level:"Bachelors (Bhc (hons) Computing)",
        name:"Softwarica College of IT & E-commerce",
        location:"Maitidevi, Kathmandu",
        year:"2080 B.S (2024 AD)",
        grades:"Upper Second class"
    }
]
  return (
    <div className='card p-5 mt-3'>
        <div className='items-center'>
            <motion.h1 initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}} className='font-mono font-bold text-3xl text-white'>Education</motion.h1>
        </div>
        <div className='max-w-[1200px] mx-auto mt-8 '>
            {education.map((edu,index)=>

                <div key={index} className='mb-8 flex flex-wrap justify-center lg:justify-center mx-10'>
                    <motion.div initial={{x:-100, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2}} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400 font-bold'>{edu.year}</p>
                    </motion.div>
                    <motion.div initial={{x:100, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2}} className='w-full max-w-xl lg:w-3/4 text-white'>
                       <h6 className='mb-2 font-semibold'>{edu.level}</h6>
                       <p className='text-neutral-400 mb-4'>{edu.name}</p>
                       <p className='text-neutral-400 mb-4'>{edu.grades}</p>
                       <p className='text-neutral-400 mb-4'>{edu.location}</p>

                    </motion.div>
                </div>
            //     <div key={index} className='w-[70%] border border-black mx-auto mb-7 rounded-md shadow-xl bg-gradient-to-b from-gray-800 to-black lg:text-center hover:scale-105'> 
            //         <h1 className='mx-3 font-serif capitalize text-red-300'>{edu.level}</h1>
            //         <h1 className='mx-3 font-serif capitalize text-white'>{edu.name}</h1>
            //         <h1 className='mx-3 font-serif text-orange-500'>{edu.year}</h1>
            //         <h1 className='mx-3 font-serif text-white'>{edu.grades}</h1>
            //         <h1 className='mx-3 font-serif text-white'>{edu.location}</h1>

            // </div>
            )}
            
        </div>
        
    </div>
  )
}

export default Education