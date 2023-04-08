import React from 'react'
import {AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4 px-4'>
        <div className='flex items-center'>
            <NavLink to="/">
                <h1 className='text-2xl sm:text-rxl lg:-4xl px-4'>
                    Game <span className='font-bold text-orange-500 '>Review</span>
                </h1>
            </NavLink>

            <div className='bg-gray-200 rounded-full flex items-center px-5 w-[400px] sm:w-[600px] lg:w-[1500px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search videogame'
                />
            </div>

            <NavLink to="/games">
                <h1 className='text-xl sm:text-rxl lg:-2xl px-4'>
                    GAMES 
                </h1>
            </NavLink>

            <NavLink to="/login">
                <h1 className='text-xl sm:text-rxl lg:-2xl px-4'>
                    LOG <span className='font-bold text-orange-500 '>IN</span>
                </h1>
            </NavLink>
            <NavLink to="/signup">
                <h1 className='text-xl sm:text-rxl lg:-4xl px-4'>
                    SIGN <span className='font-bold text-orange-500 '>UP</span>
                </h1>
            </NavLink>
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