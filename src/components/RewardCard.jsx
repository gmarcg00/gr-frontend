import {React, useState, useEffect} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookie = new Cookies();

const RewardCard = (props) => {

    const [game,setGame] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:8081/game/${props.game}`
        }).then(response => {
            console.log(response)
            setGame(response.data)
        })
    },[])

    return(
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={game.background_image} alt="" width="384" height="512"></img>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <div className="text-slate-700 dark:text-slate-500 font-bold">
                        {props.title}
                    </div>
                    <p className="text-lg">
                        {props.content}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {props.userName}
                    </div>
                    
                    </figcaption>
                </div>
            </figure>
        </>
    );
}

export default RewardCard;