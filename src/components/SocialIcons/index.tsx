import React from "react";

import './style.css';

export default function SocialIcons() {
    return (
        <div className="socialicons">
            <a target="_blank" href="https://www.youtube.com/channel/UC6y0eXLRr5h3KXbFyI8L3Fw"> <img className="socialicon" src="./assets/icons/Circled_Youtube_svg-512.webp" alt="" /> </a>
            <a target="_blank" href="https://www.instagram.com/deoklin/"><img className="socialicon" src="./assets/icons/Circled_Instagram_svg-512.webp" alt=""/></a>
            <a target="_blank" href="https://www.linkedin.com/in/maikyroger/"><img className="socialicon" src="./assets/icons/Circled_Linkedin_svg-512.webp" alt=""/></a>
            <a target="_blank" href="https://github.com/mkyy"><img src="./assets/icons/git.png" alt="" className="socialicon"/></a>
        </div>
    )
}