import Navbar from "../components/Navbar.jsx";
import MainCard from "../components/MainCard.jsx";
import GameCard from "../components/GameCard.jsx";
import {React, useState, useEffect} from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function HomeScreen() {

    const [data,setData] = useState([]);
    const cookies = new Cookies();

    
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_URL}`
        }).then(response => {
            setData(response.data.results)
        })
    },[])

    return (
        <>
            <Navbar userName={cookies.get("userName")} isSession={cookies.get("isSession")}/>
            <MainCard />
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
                {data.map ((game) => (<GameCard
                    name={game.name}
                    slug={game.slug}
                    releaseDate={game.released}
                    backgroundImage={game.background_image}>
                </GameCard>))}
            </div>
        </>
    );
}

export default HomeScreen;
