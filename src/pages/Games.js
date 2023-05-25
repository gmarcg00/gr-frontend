import {React, useState, useEffect} from "react";
import GameCard from "../components/GameCard.jsx";
import axios from "axios";

function Games(){

    const [data,setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.rawg.io/api/games/the-last-of-us?key=${process.env.REACT_APP_API_URL}`
        }).then(response => {
            setData(response.data)
        })
    },[])

    return(
        <>
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
            <GameCard
                name={data.name}
                releaseDate={data.released}
                backgroundImage={data.background_image}>
            </GameCard>
            <GameCard
                name={data.name}
                releaseDate={data.released}
                backgroundImage={data.background_image}>
            </GameCard>
        </div>
        
        </>
    );
    
}

export default Games;