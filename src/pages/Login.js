import React from "react";
import { Input } from "../components/UsedInputs.js"
import Navbar from "../components/Navbar.jsx"
import {useForm} from "react-hook-form"
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login(){

    const {register,formState:{errors},handleSubmit} = useForm();

    const onSubmit = (data) => {
        axios({
            method: 'GET',
            url: `http://localhost:8080/user`,
            params: data
        }).then(response => {
            console.log(response.data)
            var respuesta = response[0];
            cookies.set('id',respuesta.id, {path:"/"});
            cookies.set('email',respuesta.email, {path:"/"});
            cookies.set('userName',respuesta.userName, {path:"/"});
            alert(`Bienvenido ${respuesta.userName}`)
        }).catch(error => {
            console.log(error)
            alert('Username or password are incorrect.')
        })
    }

    return(
        <>
        <Navbar />
        <div className="min-h-screen py-40 ">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className="w-full h-auto lg:w-1/2 flex flex-col mx-2 items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg')]">
                        <h1 className="text-white text-3xl mb-3">Welcome</h1>
                        <div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-orange-500 font-semibold">Learn more</a></p>
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