import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"; 
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const Nav=[
        {
            name:"Home",
            path:""

        },
        {
            name:"Experience",
            path:"experience"
        },
        {   name:"Education",
            path:"education"
        },
        {
            name:"Contact Me",
            path:"contact"
        }
    ]

    const [menu,setMenu]=useState(false);
    const toggleMenu=()=>{
        setMenu(!menu)
    }
  return (
    <div className='flex mx-auto justify-between border-b shadow-xl'>
        {/* left part */}
        <div className='p-5 font-mono font-bold ml-9'>
            <h1 className='text-2xl lg:text-3xl'>Bibek. B</h1>
        </div>
        {/* {right part} */}
        <div className='p-5 mr-10'>
        <ul className='md:flex gap-5 hidden'>
            {Nav.map((n,index)=>
                
                <li className='font-mono font-bold hover:text-gray-500 scale-x-95 cursor-pointer'>
                    <NavLink to={n.path} className={({isActive})=>isActive? "text-blue-400":""}>{n.name}</NavLink>
                    
                </li>
            
            )}
        </ul>
            
        </div>

        <div className='p-5 md:hidden'>
            {!menu?<CiMenuBurger className='w-20 h-7' onClick={toggleMenu} />:<IoMdClose className='w-20 h-7' onClick={toggleMenu} />} 
        </div>

        {/* for small screen */}

        <div className={menu?'p-5 left-0 top-0 fixed w-1/2 border-r border-black bg-slate-300 h-full ease-in-out duration-500':"left-[-100%] fixed"}>
            <ul className='mt-20 '>
                {Nav.map((n,index)=>
                    
                    <li className='font-mono font-bold hover:text-gray-500 scale-x-95 cursor-pointer mt-10 border-b border-gray-500'>
                        <NavLink to={n.path} className={({isActive})=>isActive? "text-blue-400":""}onClick={() => setMenu(false)}>{n.name}</NavLink>
                        
                        
                    </li>
                
                )}
            </ul>
            
        </div>


    </div>
  )
}

export default Navbar