import React from "react";
import ArticlePrev from "../ArticlePrev";

import './style.css';

export default function TimeLine(){

    return (

        <div className="center t-black timeline-wrapper">

            <ArticlePrev
            articleTitle='Como executar um shell script ao iniciar o sistema[Ubuntu]'
            articleImg='./assets/article1.png'
            articleDesc='Muitas vezes precisamos executar scripts para fazer alguma função essencial para nosso setup, mas e quando precisamos executar toda vez ? Veja como rodar seus scripts ao iniciar o sistema operacional.'
            articleID=''
            />

        </div>

    )

}