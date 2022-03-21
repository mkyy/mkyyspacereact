import React from "react";
import { Link } from "react-router-dom";

export default class Blog extends React.Component{

    render(): React.ReactNode {
        return(
            <Link className="linkToHome" to={'/'}>HOME</Link>
        )
    }

}