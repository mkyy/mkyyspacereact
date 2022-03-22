import React from "react";
import TimeLine from "../TimeLine";
import Header from "../Header";

import './style.css';

export default class Blog extends React.Component{



    render(): React.ReactNode {
        return(

            <div className="blog-wrapper">
            <Header/>

            <TimeLine/>

            
            </div>
        )
    }

}