import React from "react";
import Button from "../../Atoms/Button/Button";
import image from "./restauranfood.jpg"

export default function HeroSection(){
    return(
        <div className="flex justify-center bg-primaryOne">
            <div className="flex items-center justify-between w-3/5">
                <div className="w-2/6">
                    <h1 className="capitalize text-6xl text-primaryTwo mt-8 mb-1">Little lemon</h1>
                    <h2 className="text-4xl text-white mb-8">Chicago</h2>
                    <p className="text-white mb-8">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Button>Reserve a Table</Button>
                </div>
                <div className="w-2/5">
                    <img src={image} className="relative top-20 rounded-2xl"/>
                </div>
            </div>
        </div>
    )
}