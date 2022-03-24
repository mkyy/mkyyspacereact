import React from "react";

import './style.css';


export default function AboutMe() {

    const animationClass = 'animate';

    const animeScroll = () => {
        
        const windowTop = window.innerHeight;
        const target = document.querySelector('[data-anime]');
        if(target != null && target != undefined){
            if((windowTop /2) > target.getBoundingClientRect().top) {
                console.log(target.getBoundingClientRect().top)
                target.classList.add(animationClass)
            }
        }
    }


    window.addEventListener('scroll', (element) => {
        animeScroll();
    })


    return(
        <div className="colored"> 

            <div className="duocontent center">

                <div className="aboutd"></div>
                
                <div className="about-me-to-animate" data-anime='true'>
                    <p>Nascido no estado de Minas Gerais, no ano de 2000, o ultimo ano do século XX.</p>
                    <p>Desde cedo tive interesse por tecnologia e programação, aos 14 anos estava fazendo curso no youtube sobre python, como você deve imaginar, não consegui aprender nada porque não tinha nenhuma base de lógica de programação e simplesmente imprimia coisas na tela na esperança de um dia fazer um script para hackear minha escola.</p>
                    <p>Quatro anos depois, estava decidido do que queria e entrei para faculdade de Engenharia de computação, um ano depois eu sai, por uma série de fatores, mas foi um ano que agregou muito valor e me deu a bagagem inicial que eu precisava.</p>
                    <p>Hoje em dia, depois de alguns cursos comerciais(opiniões a parte, consegui aprender bastante), alguns gratuitos, muita leitura de documentação, matemática, e ter iniciado meu projeto pessoal de codar todo dia, me sinto contente com meu progresso, mas nunca satisfeito, já que sempre da pra aprender algo todo dia! E que siga-mos nesta jornada de nunca se cansar do conhecimento.</p>
                </div>

            </div>

        </div>
    )

}