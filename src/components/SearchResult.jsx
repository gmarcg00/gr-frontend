import React from "react";
import { NavLink } from 'react-router-dom';

const SearchResult = (props) => {
    return (
        <li className="max-w-[1450px] grid grid-cols-1 h-16 text-sm font-medium rounded-2xl grid-rows-1 text-gray-900 bg-white border">
            <div className="object-contain rounded-3xl w-28 h-25">
            <NavLink to={{
                pathname: `/game/${props.slug}`,
            }}>
                <img
                    className=''
                    src={props.bgImage}
                    alt='/'
                />
            </NavLink>
            </div>
            <div className="relative ml-32 mb-2">
            <NavLink to={{
                pathname: `/game/${props.slug}`,
            }}> {props.name} </NavLink>
            </div>
        </li>
    )
    
}

export default SearchResult;