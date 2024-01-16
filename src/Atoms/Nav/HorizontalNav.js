import React from "react";

export default function HorizontalNav(){
    return(
        <nav>
            <ul className="flex font-medium -me-3">
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Home</a>
                </li>
                <li>
                    <a href="/#sec-about" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">About</a>
                </li>
                <li>
                    <a href="/#sec-menu" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Menu</a>
                </li>
                <li>
                    <a href="/reservation" data-testid="reservation-link" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Reserve a Table</a>
                </li>
                {/* <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Order online</a>
                </li>
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Login</a>
                </li> */}
            </ul>
        </nav>
    )
}