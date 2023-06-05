import Navbar from "../components/Navbar.jsx";
import Cookies from "universal-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";

const cookie = new Cookies();

function ViewComment () {

    const params = useParams();
    const [gameData,setGameData] = useState([]);
    const [reviewsData,setReviewsData] = useState([]);

    const getGameData = async() => {
        const response = await axios.get(
            `https://api.rawg.io/api/games/${params.id}?key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response.data)
        setGameData(response.data)
    }

    const getReviewsData = async() => {
        const response = await axios.get(
            `http://localhost:8081/review/game/${params.id}`
        );
        console.log(response.data)
        setReviewsData(response.data)
    }

    useEffect(() => {
        getGameData()
        getReviewsData()
    },[])   

    return(
        <>
            <Navbar />
            <div className="w-full h-full bg-cover bg-no-repeat bg-fixed text-white absolute" style={{backgroundImage: `url(${gameData.background_image})` }}>
                {
                    reviewsData.length > 0 ?
                        reviewsData.map ((review) => (
                            <div className=" mx-96 mt-10 grid grid-cols-1">
                                <div className="w-96 h-60 rounded-3xl bg-gray-900 grid grid-cols-3 bg-cover">
                                    <div className="">
                                        <div className="text-center mt-10 ml-48">
                                            {review.userName}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="grid grid-cols-1">
                                            <div className="text-center mt-10">
                                                {review.title}
                                            </div>
                                            <div className="text-center mt-10">
                                                {review.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        ))
                    : <div></div>  
                }
            </div>  
       </>
    );
}

export default ViewComment;