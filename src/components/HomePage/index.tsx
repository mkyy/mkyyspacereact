import React from "react";
import AboutMe from "../AboutMe";
import Header from "../Header";
import SocialIcons from "../SocialIcons";

import './style.css';

export default function HomePage(){

    return(
        <div>
            <Header/>
            <div className="initial">

                <div className="center initial-content">

                    <div className="box-initial">
                        <img className="imagem-me" src='/assets/myself.jpg' alt="imagem aqui"/>
                        <div className="text-initial">
                            <h1>
                                <img className="rocket" src="./assets/icons/rocket.png" alt="" />
                                Welcome to mkyy's Space!
                            </h1>
                                <p># I'm Maiky Roger</p>
                                <p># Aspiring to get at least 1% better every day!</p>
                                <p># contact me: <strong>maikyrg9@gmail.com</strong></p>
                        </div>
                    </div>

                    <SocialIcons/>

                </div>

            </div>

            <AboutMe/>

        </div>
    )
}