import React from "react";

export default function HorizontalNav(){
    return(
        <nav>
            <ul className="flex font-medium capitalize -me-3">
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Home</a>
                </li>
                <li>
                    <a href="/about" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">About</a>
                </li>
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Menu</a>
                </li>
                <li>
                    <a href="/reservation" data-testid="reservation-link" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Reservation</a>
                </li>
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Order online</a>
                </li>
                <li>
                    <a href="/" className="block mx-1 p-2 rounded text-primaryOne hover:bg-primaryOne hover:text-white">Login</a>
                </li>
            </ul>
        </nav>
    )
}