import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {fireEvent,render} from '@testing-library/react'
import GameCard from '../../src/components/GameCard'
import {App} from '../App'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

test('renders content', () =>{
    const gameData = {
        name: "The Last Of Us",
        releaseDate:"2013-06-14"
    }

    const component =render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<GameCard name={gameData.name} releaseDate={gameData.releaseDate} />}></Route>
          </Routes>
        </BrowserRouter>
      );

    component.getByText("The Last Of Us")
    component.getByText("2013-06-14")
   expect(component.container).toHaveTextContent(gameData.name)
   expect(component.container).toHaveTextContent(gameData.releaseDate)
})

test('clicking view more button', () =>{
    const gameData = {
        name: "The Last Of Us",
        releaseDate:"2013-06-14"
    }

    const component =render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<GameCard name={gameData.name} releaseDate={gameData.releaseDate} />}></Route>
          </Routes>
        </BrowserRouter>
    );

    const button =component.getByText("View more")
    fireEvent.click(button)
})