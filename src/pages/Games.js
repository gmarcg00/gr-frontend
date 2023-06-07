import {React, useState, useEffect} from "react";
import GameCard from "../components/GameCard.jsx";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Select from 'react-select'


let genreData = null;
let platformData = null;
let storeData = null;

const ITEMS_PER_PAGE = 16;

function Games(){

    const [games,setGames] = useState([]);
    console.log(games);
    const [currentPage,setCurrentPage] = useState(0);
    const [currentGames,setCurrentGames] = useState([...games].slice(0,ITEMS_PER_PAGE));
    console.log(currentPage);
    console.log(currentGames);

   
    let storeOptions = null;
    console.log(currentGames);

    const genreOptions = [
        { value: 'action', label: 'Action' },
        { value: 'strategy', label: 'Strategy' },
        { value: 'role-playing-games-rpg', label: 'RPG' },
        { value: 'shooter', label: 'Shooter' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'casual', label: 'Casual' },
        { value: 'sports', label: 'Sports' },
        { value: 'simulation', label: 'Simulation' }
    ]

    const developerOptions = [
        { value: 'ubisoft', label: 'Ubisoft' },
        { value: 'electronic-arts', label: 'Electronic Arts' },
        { value: 'sony-interactive-entertainment', label: 'Sony' }
    ]

    const prevHandler = () => {
        const prevPage = currentPage -1;

        if(prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_PER_PAGE;

        setCurrentGames(games.splice(firstIndex,ITEMS_PER_PAGE));
        setCurrentPage(prevPage);

    }

    const nextHandler = () => {
        const totalElemns = games.length;
        const nextPage = currentPage+1;

        const firstIndex = nextPage * ITEMS_PER_PAGE;

        if(firstIndex === totalElemns) return;

        setCurrentGames(games.splice(firstIndex,ITEMS_PER_PAGE));
        setCurrentPage(nextPage);
    }
    
    let platformOptions = [
        { value: 'playstation5', label: 'Playstation 5' },
        { value: 'xbox-series-x', label: 'Xbox Series S/X' },
        { value: 'nintendo-switch', label: 'Nintendo Switch' },
        { value: 'pc', label: 'PC' }
    ]

    switch(platformData){
        case 'playstation5':
        case 'playstation4':
        case 'playstation3':
            storeOptions = [
                { value: 'playstation-store', label: 'PlayStation Store' }
            ]
            break;
        case 'xbox-series-x':
            storeOptions = [
                { value: 'xbox-store', label: 'Xbox Store' }
            ]
            break;
        case 'nintendo-switch':
            storeOptions = [
                { value: 'nintendo', label: 'Nintendo Store' }
            ]
            break;
        case 'pc':
            storeOptions = [
                { value: 'steam', label: 'Steam' },
                { value: 'epic-games', label: 'Epic Games Store' },
                { value: 'gog', label: 'GOG' }
            ]
            break;
    }

    useEffect(() => {
        genreData = null;
        platformData = null;
        storeData = null;
        axios({
            method: 'GET',
            url: `http://localhost:8081/game`
        }).then(response => {
            setGames(response.data)
        })
    },[])

    const onGenreChange = (value) => {
        genreData = value.value;
        axios({
            method: 'GET',
            url: `http://localhost:8081/game/genre/${genreData}/platform/${platformData}/store/${storeData}`,
            headers: { 
                'Content-Type': 'application/json'
              }  
        }).then(response => {
            setGames(response.data)
        })
    }

    const onPlatformChange = (value) => {
        platformData = value.value;
        if(platformData != "pc"){
            if (storeData == "steam" || storeData == "epic-games" || storeData == "gog"){
                storeData = null
            }
        }

        axios({
            method: 'GET',
            url: `http://localhost:8081/game/genre/${genreData}/platform/${platformData}/store/${storeData}`,
            headers: { 
                'Content-Type': 'application/json'
              }  
        }).then(response => {
            setGames(response.data)
        })
    }

    const onStoreChange = (value) => {
        storeData = value.value;
        axios({
            method: 'GET',
            url: `http://localhost:8081/game/genre/${genreData}/platform/${platformData}/store/${storeData}`,
            headers: { 
                'Content-Type': 'application/json'
              }  
        }).then(response => {
            setGames(response.data)
        })
    }

    const resetFilter = () => {
        genreData = null;
        platformData = null;
        storeData = null;
    }

    return(
        <>

        <Navbar />
        <div className="bg-black bg-cover min-h-screen">
            <div className='max-w-[1640px] mx-auto p-4 text-white'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>All <span className='text-orange-500'>Games</span></h1>
            </div>
            <div className='max-w-[1640px] mx-auto p-4 font-bold grid md:grid-cols-4 gap-6'>
                <div>
                    <h1><span className='text-orange-500'>Genre</span></h1>
                    <Select options={genreOptions}
                    onChange={onGenreChange}
                    placeholder = "Choose one"
                    ></Select>
                </div>
              
                <div>
                    <h1><span className='text-orange-500'>Platform</span></h1>
                    <Select options={platformOptions}
                    onChange={onPlatformChange}
                    placeholder = "Choose one"
                    ></Select>
                </div>
                
                { platformData == "pc" 
                    ? <div>
                        <h1><span className='text-orange-500'>Store</span></h1>
                        <Select options={storeOptions}
                        onChange={onStoreChange}
                        placeholder = "Choose one"
                        ></Select>
                    </div>
                    : <div></div>
                }
            </div>
            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
                {games.length > 0 ?
                    games.map ((game) => (<GameCard
                        name={game.name}
                        slug={game.slug}
                        releaseDate={game.released}
                        backgroundImage={game.background_image}>
                    </GameCard>))
                : <div></div>
                }
            </div>
        </div>
        </>
    );
    
}

export default Games;