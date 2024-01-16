import React from "react";
import Button from "../../Atoms/Button/Button";
import image from "./restauranfood.jpg"
import Heading from "../../Atoms/Headings/Headings";

export default function HeroSection(){
    return(
        <div className="flex justify-center pb-20">
            <div className="flex justify-center bg-primaryOne">
                <div className="flex items-center justify-between w-2/4">
                    <div className="w-3/6">
                        <Heading variant="h1" className="capitalize text-primaryTwo mt-8 mb-1">Little lemon</Heading>
                        <Heading variant="h2" className="capitalize text-white mb-8">Chicago</Heading>
                        <p className="text-white mb-8">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <a href="/reservation" className="block w-44 p-2 rounded-lg bg-primaryTwo text-center font-medium text-black">Reserve a Table</a>
                    </div>
                    <div className="w-2/5">
                        <img src={image} className="relative top-20 rounded-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}