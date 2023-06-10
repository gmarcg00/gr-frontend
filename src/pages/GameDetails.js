import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { NavLink ,useNavigate} from 'react-router-dom';

const cookie = new Cookies();

const GameDetails = () =>{
    
    const params = useParams();

    const [data,setData] = useState([]);
    const [screenshots,setScreenshots] = useState([]);
    const [isSession,setIsSession] = useState(cookie.get("isSession"));
    const [isLike,setIsLike] = useState(false);
    const [isDislike,setIsDislike] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getGameData()
        getGameScreenshots()
        getReaction()   
    },[])
    
    const getGameData = async() => {
        const responseGameData = await axios.get(
            `https://api.rawg.io/api/games/${params.id}?key=${process.env.REACT_APP_API_KEY}`
        );
        setData(responseGameData.data)
    }

    const getGameScreenshots = async() => {
        const responseGameScreenshots = await axios.get(
            `https://api.rawg.io/api/games/${params.id}/screenshots?key=${process.env.REACT_APP_API_KEY}`
        );
        setScreenshots(responseGameScreenshots.data.results)
    }

    const getReaction = () => {
        const getReactionResponse = axios.get(
            `http://localhost:8081/reaction/user/${cookie.get("userName")}/game/${params.id}`
        ).then(response =>{
            console.log(response)
            if(response.data.length == 0){
                setIsLike(false)
                setIsDislike(false)
            }else{
                if(response.data.reactionType == "Like"){
                    setIsLike(true)
                    setIsDislike(false)
                }else{
                    setIsDislike(true)
                    setIsLike(false)
                }
            }
        })
    }

    const handlerLikeButton = () => {
        if(isSession == "true"){
            if(isLike == false){
                axios.post('http://localhost:8081/reaction',{
                    userName: cookie.get("userName"),
                    slug: data.slug,
                    reactionType: "Like"
                }).then(response =>{
                    setIsLike(true)
                })
            }else{
                axios.delete('http://localhost:8081/reaction',{ 
                    data: {
                        userName: cookie.get("userName"),
                        slug: data.slug,
                        reactionType: "Like"
                    }
                }).then(response =>{
                    setIsLike(false)
                }) 
            }        
        }else{
            navigate("/login")
        }
        
    }

    const handlerDislikeButton = () => {
        if(isSession == "true"){
            if(isDislike == false){
                axios.post('http://localhost:8081/reaction',{
                    userName: cookie.get("userName"),
                    slug: data.slug,
                    reactionType: "Dislike"
                }).then(response =>{
                    setIsDislike(true)
                })
            }else{
                axios.delete('http://localhost:8081/reaction',{ 
                    data: {
                        userName: cookie.get("userName"),
                        slug: data.slug,
                        reactionType: "Dislike"
                    }
                }).then(response =>{
                    setIsDislike(false)
                }) 
            }        
        }else{
            navigate("/login")
        }
        
    }

    const handlerWriteCommentButton = () => {
        console.log(isSession + "hola")
        isSession == "true" ?  navigate(`/write/comment/game/${data.slug}`) : navigate("/login")
    }

    return(
        <>
            <Navbar />
            {
               (Array.isArray(data.stores) && screenshots.length > 0 ) &&
               <div className="bg-cover min-h-screen bg-no-repeat bg-fixed brightness-75 text-white " style={{backgroundImage: `url(${data.background_image})` }}>
                    <div className="w-full h-full object-cove grid grid-cols-2 mx-28">
                        <div className="flex flex-col mx-60 my-20">
                            <div className="h-1/4">
                                <div>
                                    <h3 className="text-2xl font-bold">{data.name}</h3>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-mono">RELEASE DATE: {data.released}</h1>
                                </div>
                            <div className="">
                                <h1 className="text-xl font-mono">AVERAGE PLAYTIME: {data.playtime} HOURS </h1>
                            </div>
                        </div>
                        <div className="h-2/3 w-8/10">
                            <h1 className="text-xl font-bold mb-1">ABOUT</h1>
                            {data.description.slice(0,-400)}
                            <div className="mt-3 grid grid-cols-2 w-1/3">
                            {
                                ((isLike == true) || (isLike == false) && (isDislike == false)) ?
                                <div>
                                    <button onClick={handlerLikeButton} className="bg-green-800 text-center mt-1 text-white mx-2" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    </button>
                                </div>
                                : <div></div>
                            }
                            {
                                ((isDislike == true) || (isLike == false) && (isDislike == false)) &&
                                <div className="mx-4">
                                    <button onClick={handlerDislikeButton} className="bg-red-800 text-center mt-1 text-white mx-2" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                        </svg>
                                    </button>
                                </div>
                            }
                            </div>
                            <div className="pt-4 grid grid-cols-2">
                            <NavLink to={{
                                 pathname: `/view/comment/game/${data.slug}`,
                            }}>
                                <div className="">
                                    <button className="bg-orange-500 text-center mt-1 text-white mx-2" type="submit">View comments</button>
                                </div>
                            </NavLink>
                                <div onClick={handlerWriteCommentButton} className="">
                                    <button className="bg-orange-500 text-center mt-1 text-white mx-2" type="submit">Write a comment</button>
                                </div>

                                          
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-20 mx-10">
                       <div className="h-1/3">
                           <div className="w-1/2">
                               <img className="w-full h-full object-cover rounded-xl" src={data.background_image_additional} alt=""/>
                           </div>
                       </div>
                       <div className="h-2/3">
                           <div className="mt-5 grid grid-cols-2 w-1/2">
                                {
                                    screenshots.map ((screenshot) => (
                                    <div className="">
                                        <img className="w-full h-full object-cover rounded-xl pt-1 px-1" src={screenshot.image} alt=""/>
                                    </div>
                                ))
                                }
                            </div>
                       </div>
                       <div className="mx-2">
                           <div className="grid grid-cols-1">
                               <h1 className="text-xl ">WHERE TO BUY</h1>
                           </div>
                           <div className="grid grid-cols-2 w-1/2">
                               {
                                 data.stores.map ((store) => (
                                   <div className="">
                                        <button className="bg-orange-500 text-center mt-1 text-white mx-2" type="submit">{store.store.name}</button>
                                   </div>
                               ))
                                }
                           </div>  
                       </div>
                    </div>
                    </div>
               </div>
            } 
        </>
    );

}

export default GameDetails;