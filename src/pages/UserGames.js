import {React, useState, useEffect} from "react";
import GameCard from "../components/GameCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Cookies from "universal-cookie";
import axios from "axios";


const cookie = new Cookies();

function UserGames(){
    const [userGames,setUserGames] = useState([]);


    useEffect(() => {

        axios({
            method: 'GET',
            url: `http://localhost:8081/game/like/user/${cookie.get("userName")}`
        }).then(response => {
            console.log(response)
            setUserGames(response.data)
            console.log(userGames)
        })
    },[])

    return(
        <>
            <Navbar />
            {
                (Array.isArray(userGames)) &&
                <div className="bg-black bg-cover min-h-screen"> 
                    <div>
                        <div className='max-w-[1640px] mx-auto p-4 text-white'>
                            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>My <span className='text-orange-500'>Games</span></h1>
                        </div>
                        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
                            {userGames.length > 0 ?
                                userGames.map ((game) => (<GameCard
                                    name={game.name}
                                    slug={game.slug}
                                    releaseDate={game.released}
                                    backgroundImage={game.background_image}>
                                </GameCard>))
                            : <div className="bg-black bg-cover min-h-screen"></div>
                             }
                        </div>
                    </div>
                </div>  
            }
            
        </>
    );

}

export default UserGames;