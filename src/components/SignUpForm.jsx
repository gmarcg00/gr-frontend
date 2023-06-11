import React from "react";
import { NavLink, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form"
import axios from "axios";
import Cookies from "universal-cookie";

const SignUpForm = () =>{
    const {register,handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate();

    const customSubmit = (data) =>{
        axios({
            method: 'POST',
            url: `http://localhost:8081/user/register`,
            data: data
        }).then(response =>{
            if(response.status == 201){
                const cookie = new Cookies();
                cookie.set("isSession",true,{path: '/'})
                cookie.set("userId",response.data.id,{path: '/'})
                cookie.set("email",response.data.email,{path: '/'})
                cookie.set("userName",response.data.userName,{path: '/'})
                navigate("/")
            }
        }).catch(function(error){
            if(error.response.status === 409){
                alert(error.response.data)
            }
        });
    }
        
    return (
        <>
            <form onSubmit={handleSubmit(customSubmit)}>
                <div className="mt-6">
                    <input type="email" placeholder="Email" {...register('email', {required: true})}autoComplete="off"></input>
                    {errors.email?.type === 'required' && <p className="text-red-500 font-bold">Email field is mandatory</p>}
                </div>
                <div className="mt-6">
                    <input placeholder="Username" {...register('userName',{required: true, maxLength: 8})} autoComplete="off"></input>
                    {errors.userName?.type === 'required' && <p className="text-red-500 font-bold">Username field is mandatory</p>}
                    {errors.userName?.type === 'maxLength' && <p className="text-red-500 font-bold">Username field max length is 8</p>}
                </div>
                <div className="mt-6">
                    <input type="password" placeholder="Password" {...register('password', {required: true})}autoComplete="off"></input>
                    {errors.password?.type === 'required' && <p className="text-red-500 font-bold">Password field is mandatory</p>}
                </div>
                <div className="mt-5">
                <button className="w-full bg-orange-500 py-3 text-center text-white" type="submit">Register now</button>
                </div>
            </form> 
        </>
    );
}


export default SignUpForm;