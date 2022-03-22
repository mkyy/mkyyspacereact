import React from "react";
import { Link } from "react-router-dom";

import './style.css';

interface ArticlePrevProps {
    articleTitle:string;
    articleImg:string;
    articleDesc:string;
    articleID:string;
}

export default function ArticlePrev(props: ArticlePrevProps) {

    return(
        <div className="art-prev-wrapper">

            <h1>{props.articleTitle}</h1>

            <img className="article-img" src={props.articleImg} alt="article image" />

            <p>{props.articleDesc}</p>

            <Link to={'/blog/{props.articleID}'} > Veja mais... </Link>

        </div>
    )

}