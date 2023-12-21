import React from "react";

export default function Heading(props){
    return(
        <>
            <h1 className="capitalize text-6xl text-primaryTwo mt-8 mb-1">{props.children}</h1>
        </>
    )
}