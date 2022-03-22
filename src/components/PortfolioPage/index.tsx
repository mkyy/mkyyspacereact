import React from "react";
import PortfolioItem from "../../PortfolioItem";
import Header from "../Header";

import './style.css';

export default function PortfolioPage(){
    return (
        <div className="portDiv">

                <Header/>

                <PortfolioItem
                title = 'C.R.U.D v2.0'
                desc = 'Um CRUD para uma empresa que terceiriza serviço de motoboys para outras empresas.'
                img = './assets/projects/crud2.png'
                src="https://mkyy.github.io/crud-v2.0/"
                />

                <PortfolioItem
                title = 'Pousada Secreta'
                desc="Uma pousada em angra dos reis, que possui vários modelos de quartos, e varias áreas de lazer."
                img="assets/projects/pousada.png"
                src='https://mkyy.github.io/pousada_secreta/'
                />

                <PortfolioItem
                title = 'Clinica Medica Life'
                desc="Site para a CM-life, uma clinica médica que oferece vários serviços, além de uma grande variedade de profissionais especializados."
                img="assets/projects/cm.png"
                src='https://mkyy.github.io/clinica_medica_life/index.html'
                />

                <PortfolioItem
                title = 'Beauty Salon'
                desc="Salão de beleza com vários serviços, como personalizações no cabelo, manicure, pedicure e muito mais."
                img="assets/projects/BS.png"
                src='https://mkyy.github.io/beauty-salon'
                />

            </div>
    )
}