import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";
import axios from "axios";


function GameDetails(props){
    
    const params = useParams();

    const [data,setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.rawg.io/api/games/${params.id}?key=${process.env.REACT_APP_API_URL}`
        }).then(response => {
            setData(response.data)
            console.log(response.data)
        })
    },[])

    return(
        <>
            <Navbar />
            <div className="w-full h-full object-cover bg-orange-50">
                <div className="flex flex-row ">
                    <div className="flex flex-col w-1/3 mt-4 ml-24">
                        <div className="max-w-md">
                            <div className="flex items-center text-sm pt-9 font-serif ">
                                <span className="text-gray-900/40">Chair&nbsp;</span>
                                <span>/ Meryl Lounge Chair</span>
                            </div>
                            <div className="pt-10">
                                <h1 class="text-4xl font-bold tracking-wide">{data.name}</h1>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <span class="text-3xl">$149.99</span>
                                <div className="flex items-center">
                                    <div className="flex space-x-px">
                                        <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.735.503a.3.3 0 0 1 .53 0l1.806 3.422a.3.3 0 0 0 .214.155l3.812.66a.3.3 0 0 1 .164.505l-2.696 2.774a.3.3 0 0 0-.082.252l.55 3.83a.3.3 0 0 1-.429.311l-3.472-1.707a.3.3 0 0 0-.264 0l-3.472 1.707a.3.3 0 0 1-.43-.312l.551-3.83a.3.3 0 0 0-.082-.251L.74 5.245a.3.3 0 0 1 .164-.505l3.812-.66a.3.3 0 0 0 .214-.155L6.735.503Z" fill="#FFC41F"></path></svg>
                                        <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.735.503a.3.3 0 0 1 .53 0l1.806 3.422a.3.3 0 0 0 .214.155l3.812.66a.3.3 0 0 1 .164.505l-2.696 2.774a.3.3 0 0 0-.082.252l.55 3.83a.3.3 0 0 1-.429.311l-3.472-1.707a.3.3 0 0 0-.264 0l-3.472 1.707a.3.3 0 0 1-.43-.312l.551-3.83a.3.3 0 0 0-.082-.251L.74 5.245a.3.3 0 0 1 .164-.505l3.812-.66a.3.3 0 0 0 .214-.155L6.735.503Z" fill="#FFC41F"></path></svg>
                                        <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.735.503a.3.3 0 0 1 .53 0l1.806 3.422a.3.3 0 0 0 .214.155l3.812.66a.3.3 0 0 1 .164.505l-2.696 2.774a.3.3 0 0 0-.082.252l.55 3.83a.3.3 0 0 1-.429.311l-3.472-1.707a.3.3 0 0 0-.264 0l-3.472 1.707a.3.3 0 0 1-.43-.312l.551-3.83a.3.3 0 0 0-.082-.251L.74 5.245a.3.3 0 0 1 .164-.505l3.812-.66a.3.3 0 0 0 .214-.155L6.735.503Z" fill="#FFC41F"></path></svg>
                                        <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.735.503a.3.3 0 0 1 .53 0l1.806 3.422a.3.3 0 0 0 .214.155l3.812.66a.3.3 0 0 1 .164.505l-2.696 2.774a.3.3 0 0 0-.082.252l.55 3.83a.3.3 0 0 1-.429.311l-3.472-1.707a.3.3 0 0 0-.264 0l-3.472 1.707a.3.3 0 0 1-.43-.312l.551-3.83a.3.3 0 0 0-.082-.251L.74 5.245a.3.3 0 0 1 .164-.505l3.812-.66a.3.3 0 0 0 .214-.155L6.735.503Z" fill="#FFC41F"></path></svg>
                                    </div>
                                    <div className="pl-2 leading-none">
                                        {data.metacritic}/100
                                        <span class="text-gray-900/40"> (556)</span>
                                    </div>
                                </div>
                            </div>
                            <p class="pt-8 leading-relaxed"> {data.description} </p>
                            <div class="pt-8"> Free 2-5 day shipping • Tool-free assembly • 30-day trial </div>
                            <div className="flex items-center justify-between pt-12">
                                <button class="flex items-center px-4 py-2 space-x-2 text-orange-500 hover:text-orange-500">
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z" stroke="#" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <span>Add to Wishlist</span>
                                </button>
                                <div className="flex items-center space-x-6">
                                    <button>
                                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                            <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V8h2.2l-.4 2.3H9.1V16c4-.6 6.9-4 6.9-8Z" fill="#17183B"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-start w-2/3 mt-4 mr-24">
                        <div className="w-3/4 mt-48">
                            <img className="object-cover" src={data.background_image} alt="" />
                        </div>
                        <div className="flex items-start pr-20 pt-5 space-x-4">
                            <div className="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-orange-500">
                                <img className="w-full h-full object-cover" src={data.background_image} alt="" />
                            </div>
                            <div className="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-orange-500">
                                <img className="w-full h-full object-cover" src={data.background_image} alt="" />
                            </div>
                            <div className="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-orange-500">
                                <img className="w-full h-full object-cover" src={data.background_image} alt="" />
                            </div>
                            <div className="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-orange-500">
                                <img className="w-full h-full object-cover" src={data.background_image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>        
            

        </>


    );

}

export default GameDetails;