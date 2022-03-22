import React from "react";

import './style.css';

interface itemProps {
    title: string;
    desc: string;
    img: string;
    src:string;
}

export default function PortfolioItem(props: itemProps) {

    return (
        <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover container-c" style={{width: '360px', height:'500px', margin:'20px' , overflow:"hidden",borderRadius:'1px'}}>
            <img src={props.img} alt="Man with backpack"    
            className="d-block w-full" />

            <div className="px-2 py-2 grow-1">

            <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style={{lineHeight: "1.25"}}>
            {props.title}
            </h1>

            <p className="mb-1">
            {props.desc}
            </p>

            </div>

            <a href={props.src} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link readmore">
                View More
            </a>

        </div>
    )
}