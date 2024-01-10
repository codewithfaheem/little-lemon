import React from "react";
import VerticalNav from "../../Atoms/Nav/VerticalNav";
import img from "./footer-img.svg"
const navItem = [
    {
        title : "Doormat Navigation",
        items: ["Home", "About", "Menu", "Reservation", "Order Online", "Login"]
    },
    {
        title : "Contact",
        items: ["Address", "Phone Number", "Email"]
    },
    {
        title : "Social Media Links",
        items: ["Address", "Phone Number", "Email"]
    },
]
export default function Footer(){
    return(
        <footer className="flex items-center justify-center mb-8">
            <div className="flex w-2/4 items-center justify-between">
                <div>
                    <img src={img} />
                </div>
                <VerticalNav navItem={navItem}></VerticalNav>
            </div>
        </footer>
    )
}