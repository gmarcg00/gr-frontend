import {React, useState} from 'react'
import {AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
import axios from "axios";
import SearchResult from './SearchResult';
import Cookies from "universal-cookie";

const cookie = new Cookies();


function Navbar () {

    const [data,setData] = useState([]);
    const [isSession,setIsSession] = useState(cookie.get("isSession"));

    console.log(cookie.get("isSession"))

    

    const handlerChange = input =>{
        console.log(input.target.value);
        if(input.target.value != ""){
            axios({
                method: 'GET',
                url: `http://localhost:8081/game/search/${input.target.value}`
            }).then(response => {
                console.log(response.data)
                setData(response.data)
            })
        }else{
            setData([])
        }
    }

    const accountHandler = () => {
        cookie.remove("userId");
        cookie.remove("email")
        cookie.remove("userName")
        cookie.set("isSession",false,{path: '/'})
        setIsSession(false)
    }
    
    if(isSession == "true"){
        return (
            <>
                <div className='bg-black'>
                    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4 px-4 text-white'>
                        <div className='flex items-center'>
                            <NavLink to="/">
                                <h1 className='text-2xl sm:text-rxl lg:-4xl px-4'>
                                    Game <span className='font-bold text-orange-500 '>Review</span>
                                </h1>
                            </NavLink>
                
                            <div className='bg-gray-200 rounded-full flex items-center px-5 w-[400px] sm:w-[600px] lg:w-[1200px]'>
                                <AiOutlineSearch size={20} />
                                <input
                                    className='bg-transparent p-2 w-full focus:outline-none'
                                    type='text'
                                    placeholder='Search videogame'
                                    onChange={handlerChange}
                                />
                            </div>
                            <NavLink to="/games">
                                <h1 className='text-xl sm:text-rxl lg:-2xl px-4'>
                                    GAMES 
                                </h1>
                            </NavLink>

                            <NavLink to="/user/account">
                            <h1 className='text-xl sm:text-rxl lg:-2xl px-4'>
                                {cookie.get("userName")}
                            </h1>
                            </NavLink>
                            
                        </div>
                
                        <button onClick={accountHandler} className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                                <CgProfile size={30} className='mr-2' />
                        </button>
                        
                    </div>
                        
                    <div className="max-w-[1640px] ml-56 mt-0 grid grid-cols-1 p-4 font-bold px-3 absolute z-20 ">
                        {data.length > 0 
                        ? data.map ((game) => (<SearchResult
                            name = {game.name}
                            bgImage = {game.background_image}
                            slug = {game.slug}
                                                >    
                        </SearchResult>))
                        : <div></div>
                        }
                    </div>
                </div>  
            </>
          );
    }else{
        return (
            <>
                <div className='max-w-[1640] mx-auto flex justify-between items-center p-4 px-4 bg-black'>
                    <div className='flex items-center'>
                        <NavLink to="/">
                            <h1 className='text-2xl sm:text-rxl lg:-4xl px-4 text-white'>
                                Game <span className='font-bold text-orange-500 '>Review</span>
                            </h1>
                        </NavLink>
            
                        <div className='bg-gray-200 rounded-full flex items-center px-5 w-[400px] sm:w-[600px] lg:w-[1075px]'>
                            <AiOutlineSearch size={20} />
                            <input
                                className='bg-transparent p-2 w-full focus:outline-none'
                                type='text'
                                placeholder='Search videogame'
                                onChange={handlerChange}
                            />
                        </div>
            
                        <NavLink to="/games">
                            <h1 className='text-xl sm:text-rxl lg:-2xl px-4 text-white'>
                                GAMES 
                            </h1>
                        </NavLink>
            
                        <NavLink to="/login">
                            <h1 className='text-xl sm:text-rxl lg:-2xl px-4 text-white'>
                                LOG <span className='font-bold text-orange-500 '>IN</span>
                            </h1>
                        </NavLink>
                        <NavLink to="/signup">
                            <h1 className='text-xl sm:text-rxl lg:-4xl px-4 text-white'>
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

                <div className="max-w-[1640px] mx-52 mt-0 grid grid-cols-1 p-4 font-bold px-3 absolute">
                    {data.length > 0 
                    ? data.map ((game) => (<SearchResult
                        name = {game.name}
                        bgImage = {game.background_image}
                        slug = {game.slug}
                                            >    
                    </SearchResult>))
                    : <div></div>
                    }
                </div>
            </>
        );
    }
  
}

export default Navbar;