import React from "react";
import { NavLink } from 'react-router-dom';

const SearchResult = (props) => {
    return (
        <div className="max-w-[1450px] grid grid-cols-1 h-16 text-sm font-medium rounded-2xl grid-rows-1 text-gray-900 bg-white border relative">
            <div className="object-contain  w-28 h-25">
            <NavLink to={{
                pathname: `/game/${props.slug}`,
            }}>
                <img className='rounded-xl' src={props.bgImage} alt='/'/>
            </NavLink>
            </div>
            <div className="relative ml-32 mb-2">
            <NavLink to={{
                pathname: `/game/${props.slug}`,
            }}> {props.name} </NavLink>
            </div>
        </div>
    )
    
}

export default SearchResult;