import React from 'react'
import {AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4 px-4'>
        <div className='flex items-center'>

            <h1 className='text-2xl sm:text-rxl lg:-4xl px-4'>
                Game <span className='font-bold text-orange-500 '>Review</span>
            </h1>

            <div className='bg-gray-200 rounded-full flex items-center px-5 w-[400px] sm:w-[600px] lg:w-[1500px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search videogame'
                />
            </div>
            
        </div>

        <NavLink to="/login">
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <CgProfile size={30} className='mr-2' />
            </button>
        </NavLink>
        

    
    </div>
  );
}

export default Navbar