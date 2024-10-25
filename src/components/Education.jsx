import React from 'react'

const Education = () => {
    const education=[{
        level: "SEE",
        name:"English preparatory school",
        location:"Minbhuwan, Kathmandu",
        year:"2074 or 2017",
        grades:"3.70"
    },
    {
        level:"Grade 12",
        name:"Unigliobe Higher Secondary School",
        location:"Kamladi, Kathmandu",
        year:"2076 or 2020",
        grades:"3.19"
    },
    {
        level:"Bachelors (Bhc (hons) Computing)",
        name:"Softwarica College of IT & E-commerce",
        location:"Maitidevi, Kathmandu",
        year:"2080 or 2024",
        grades:"Upper Second class"
    }
]
  return (
    <div className='card p-5 mt-10'>
        <div className='items-center text-center'>
            <h1 className='font-mono font-bold text-3xl'>Education</h1>
        </div>
        <div className='w-full mx-5 mt-4'>
            {education.map((edu,index)=>
                <div className='w-[70%] border border-black mx-auto mb-7 rounded-md shadow-xl bg-gradient-to-b from-gray-800 to-black lg:text-center hover:scale-105'> 
                    <h1 className='mx-3 font-serif capitalize text-red-300'>{edu.level}</h1>
                    <h1 className='mx-3 font-serif capitalize text-white'>{edu.name}</h1>
                    <h1 className='mx-3 font-serif text-orange-500'>{edu.year}</h1>
                    <h1 className='mx-3 font-serif text-white'>{edu.grades}</h1>
                    <h1 className='mx-3 font-serif text-white'>{edu.location}</h1>

            </div>
            )}
            
        </div>
        
    </div>
  )
}

export default Education