import React, { useEffect, useState } from "react";
import { Input } from "../components/UsedInputs.js"
import Navbar from "../components/Navbar.jsx"
import {useForm} from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";


function Login(){

    const {register,formState:{errors},handleSubmit} = useForm();
    const [gameData,setGameData] = useState([])
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios({
            method: 'POST',
            url: `http://localhost:8081/user/login`,
            data: data
        }).then(response =>{
            if(response.status == 200){
                const cookie = new Cookies();
                cookie.set("isSession",true,{path: '/'})
                cookie.set("userId",response.data.id,{path: '/'})
                cookie.set("email",response.data.email,{path: '/'})
                cookie.set("userName",response.data.userName,{path: '/'})
                navigate("/")
            }
        })
    }

    useEffect(() => {
        const responseGameData = axios.get(
            `http://localhost:8081/game/random`
        ).then(response =>{
            setGameData(response.data)
            
        });
    },[])
    

    return(
        <>
        <Navbar />
        <div className="min-h-screen py-40 bg-no-repeat bg-cover brightness-75 " style={{backgroundImage: `url(${gameData.background_image})` }}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-full h-auto lg:w-1/2 flex flex-col mx-2 items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg')]">
                        <h1 className="text-white text-3xl mb-3">Welcome</h1>
                        <div>
                            <p className="text-white">Create your account. It’s free and only take a minute <a href="#" className="text-orange-500 font-semibold">Learn more</a></p>
                        </div> 
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2  className="text-3xl mb-4">Log in</h2>
                        <p className="mb-4">
                        Create your account. It’s free and only take a minute
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Username" type="text" register={register("userName",{required: true, maxLength: 10})} errors={errors.name?.type === 'required' && <p>Username field is mandatory</p> }/>
                            <Input placeholder="Password" type="password" name="email" register={register("password",{required: true})}/>
                            <NavLink to="/signup">
                                <p className="text-center underline pt-5">Don't have an account? Sign up.</p>
                            </NavLink>
                            <div className="mt-5">
                                <button className="w-full bg-orange-500 py-3 text-center text-white" type="submit">Log in</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div> 
        </div>
            
        </>
        
    );
}


export default Login;