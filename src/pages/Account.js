import React from "react";
import Navbar from "../components/Navbar.jsx";
import { NavLink } from 'react-router-dom';


function Account(){
    return (
        <>
        <div className="">
            <Navbar></Navbar>
            <div className='ml-56 p-4'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  '>My <span className='text-orange-500'>account</span></h1>
            </div>
            <div className="max-w-[1400px] mx-auto">
                <NavLink to="/user/games">
                    <h1 className='absolute ml-6 my-80 text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white '><span className='text-orange-500'>Games</span></h1>
                    <img className='w-full max-h-[450px] object-cover' src="https://media.rawg.io/media/resize/1920/-/screenshots/74e/74e29808dd23446aae1ab61bb5a429fc.jpg" alt="/" />
                </NavLink>
            </div>
            <div className="max-w-[1400px] mx-auto grid grid-cols-2">
                <div className="mr-2 mt-4">
                    <NavLink to="/user/reviews">
                        <h1 className='absolute ml-6 my-72 text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white '><span className='text-orange-500'>Reviews</span></h1>
                        <img className='w-full max-h-[375px] object-cover' src="https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg" alt="/" />
                    </NavLink>
                </div>
                <div className="ml-2 mt-4">
                    <NavLink to="/user/info">
                        <h1 className='absolute ml-6 my-72 text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white '><span className='text-orange-500'>Info</span></h1>
                        <img className='w-full max-h-[375px] object-cover' src="https://media.rawg.io/media/games/589/589fc47c5ae34160d65c4682e21fed66.jpg" alt="/" />
                    </NavLink>
                </div>
            </div>
        </div>  
        </>
    );
}

export default Account;