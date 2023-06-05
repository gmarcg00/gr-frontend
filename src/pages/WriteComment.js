import {React, useState, useEffect} from "react";
import Navbar from "../components/Navbar.jsx";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const cookie = new Cookies();

function WriteComment(){

    const params = useParams();
    const [data,setData] = useState([]);
    const {register,formState:{errors} ,handleSubmit} = useForm();
    const navigate = useNavigate();

    const getGameData = async() => {
        const responseGameData = await axios.get(
            `https://api.rawg.io/api/games/${params.id}?key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(responseGameData.data)
        setData(responseGameData.data)
    }

    useEffect(() => {
        getGameData()
    },[])   

    const onSubmit = (reviewData) => {
        axios.post('http://localhost:8081/review',{
                userName: cookie.get("userName"),
                slug: data.slug,
                title: reviewData.title,
                content:reviewData.content
            }).then(response =>{
                navigate(`/game/${data.slug}`)
            })
    }

    return(
        <>
            <Navbar />
            <div className="w-full h-full bg-cover bg-no-repeat bg-fixed text-white absolute" style={{backgroundImage: `url(${data.background_image})` }}>
                <div className="mx-96 mt-52">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-4">
                            <label className="block text-sm font-bold mb-2" for="asunto"> Title </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="asunto" type="text" {...register('title',{
                                required: true,
                                maxLength: 30
                            })} required></input>
                            {errors.nombre?.type === 'required' && <p className="text-green-700"> El titulo es requerido</p>}
                            {errors.nombre?.type === 'maxLength' && <p className="text-green-700"> El número máximo de caracteres es 30</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block  text-sm font-bold mb-2" for="mensaje"> Comment text </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" rows="5" {...register('content',{
                                required: true
                            })} placeholder="Write here" required></textarea>
                            {errors.nombre?.type === 'required' && <p className="text-green-700"> El titulo es requerido</p>}
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="w-full bg-orange-500 py-3 text-center text-white">Send</button>
                        </div>
                    </form> 
                </div>
            </div>
                
                
            
        
        </>
    );
}

export default WriteComment;