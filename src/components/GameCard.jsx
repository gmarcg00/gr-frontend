import React from 'react'
import { NavLink } from 'react-router-dom';

export const GameCard = (props) => {
  return (
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>{props.name}</p>
            <p className='px-2'>{props.releaseDate}</p>
            <NavLink to={{
                pathname: `/game/${props.slug}`,
            }}>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>View more</button>
            </NavLink>
        </div>
        <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={props.backgroundImage}
            alt='/'
        />
    </div>
  )
}

export default GameCard
