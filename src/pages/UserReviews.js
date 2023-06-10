import {React, useState, useEffect} from "react";
import Navbar from "../components/Navbar.jsx";
import RewardCard from "../components/RewardCard.jsx";
import Cookies from "universal-cookie";
import axios from "axios";

const cookie = new Cookies();

function UserReviews(){

    const [userReviews,setUserReviews] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:8081/review/user/${cookie.get("userName")}`
        }).then(response => {
            console.log(response)
            setUserReviews(response.data)
            
        })
    },[])


    return(
        <>
        <Navbar />
        {
            (Array.isArray(userReviews)) &&
            <div className="bg-black bg-cover min-h-screen"> 
                <div className='max-w-[1640px] mx-auto p-4 text-white'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>My <span className='text-orange-500'>Reviews</span></h1>
                </div>
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
        }
        </> 
    );
}

export default UserReviews;