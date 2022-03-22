import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blog from "../Blog";
import HomePage from "../HomePage";
import PortfolioPage from "../PortfolioPage";

export default class Path extends React.Component{

    render(): React.ReactNode {
        return (
            <BrowserRouter>
            <Routes>

                <Route path='/' element={<HomePage/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/portfolio' element={<PortfolioPage/>} />

            </Routes>
            </BrowserRouter>
        )
    }
}