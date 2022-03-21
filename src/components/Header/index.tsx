import React from "react";
import { Link } from "react-router-dom";

import './style.css';

export default function Header() {
    return (
        <header>

                <Link className="link" to={'/blog'}>BLOG</Link>
                <Link className="link" to={'/portfolio'}>PORTFOLIO</Link>
                <Link className="link" to={'/contact'}>CONTATO</Link>

        </header>
    )
}