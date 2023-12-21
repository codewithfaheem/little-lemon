import React from "react";
import HorizontalNav from "../../Atoms/Nav/HorizontalNav";
import logo from "./Logo.svg"
export default function Header(){
    return(
        <header className="flex items-center justify-center">
            <div className="flex items-center justify-between w-3/5 py-5">
                <div>
                    <a href="/">
                        <img src={logo} />
                    </a>
                </div>
                <HorizontalNav></HorizontalNav>
            </div>
        </header>
    )
}