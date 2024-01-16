import React from "react";
import Heading from "../../Atoms/Headings/Headings";
import image from "./about_placeholder.svg"
export default function About(){
    return(
        <div id="sec-about" className="flex justify-center pt-12">
            <div className="flex justify-between w-2/4">
                <div className="w-3/6">
                    <Heading variant="h2" className="capitalize my-1">Little lemon</Heading>
                    <Heading variant="h3" className="capitalize mb-8">Chicago</Heading>
                    <p className="mb-8">Sed interdum vestibulum luctus. Nulla eu pretium nisi. Proin tortor dui, laoreet pharetra tincidunt lobortis, congue eget sem. Sed suscipit tristique accumsan. In vestibulum est sit amet rhoncus bibendum.</p>
                </div>
                <div className="w-2/5">
                    <img src={image} className=""/>
                </div>
            </div>
        </div>
    )
}