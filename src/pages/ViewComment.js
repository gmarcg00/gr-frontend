import Navbar from "../components/Navbar.jsx";
import RewardCard from "../components/RewardCard.jsx";
import Cookies from "universal-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";

const cookie = new Cookies();

function ViewComment () {

    const params = useParams();
    const [gameData,setGameData] = useState([]);
    const [userReviews,setUserReviews] = useState([]);

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
        setUserReviews(response.data)
    }

    useEffect(() => {
        getGameData()
        getReviewsData()
    },[])   

    return(
        <>
            <Navbar />
            <div className="bg-cover min-h-screen" style={{backgroundImage: `url(${gameData.background_image})` }}>
                <div className="max-w-[1640px] mx-auto p-4 py-12 flex flex-cols-3 gap-4">
                        {userReviews.length > 0 ?
                            userReviews.map ((review) => (<RewardCard
                                title={review.title}
                                game={review.slug}
                                content={review.content}
                                userName={review.userName}>
                            </RewardCard>))
                            : <div></div>
                        } 
                </div>
            </div>  
       </>
    );
}

export default ViewComment;