import React from 'react'
import profile from "../assets/profile.jfif"

const Hero = () => {
  return (
    <section className='bg-gradient-to-b from-gray-800 to-black py-3 mt-1 md:h-[89vh] max-w-[1200px] mx-auto text-white'>
        <div className='md:flex mx-auto md:justify-between items-center mt-20'>
            {/* text part */}
            <div className='text-center mt-9 mx-auto w-full md:w-1/2 md:text-left md:mx-10'>
                
                    <p className='text-2xl'>Hello,</p>
                    <h1 className='font-bold text-3xl mt-4 lg:text-4xl'>I'm <span className='font-bold text-yellow-300 text-3xl lg:text-4xl'>Bibek Bista</span> </h1>
                    <p className='font-bold text-3xl mt-8 lg:text-4xl'>Frontend Developer</p>
                    <p className='font-serif w-[90%] mx-auto mt-9 mb-7 md:w-[100%]'>I am a skilled and passionate web designer with 
                        qualification and experience in creating visually 
                        appealing and user-friendly websites</p>
                    {/* <div className='mt-4 px-3 py-3 w-32 bg-yellow-300 mx-auto rounded-lg cursor-pointer md:mx-0 text-red-600 shadow-xl font-mono hover:scale-105'>Download CV</div> */}
                    <a href="/cv.pdf" 
                        download="My_CV.pdf" 
                        className="px-3 py-3 w-32 bg-yellow-300 mx-auto rounded-lg cursor-pointer md:mx-0 text-red-600 shadow-xl font-mono hover:scale-105">
                         Download CV
                    </a>
                
            </div>
            {/* image part */}
            <div className='w-[90%] h-auto mx-8 mt-8 md:w-1/2 justify-center'>
                <img className='md:w-1/2 mx-auto' src={profile}></img>

            </div>

        </div>
       

    </section>
  )
}

export default Hero