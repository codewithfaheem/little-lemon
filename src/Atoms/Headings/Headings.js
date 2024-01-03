import React from "react";

export default function Heading(props){
    const variant = props.variant;
    const style = props.className
    switch (variant) {
        case "h1":
            return  <h1 className={`text-6xl ${style}`}>{props.children}</h1>
            break;
        case "h2":
            return  <h2 className={`text-4xl ${style}`}>{props.children}</h2>
            break;
        case "h3":
            return  <h3 className={`text-xl ${style}`}>{props.children}</h3>
            break;
        case "h4":
            return  <h4 className={`text-xl ${style}`}>{props.children}</h4>
            break;
        case "h5":
            return  <h5 className={`text-lg ${style}`}>{props.children}</h5>
            break;
        case "h6":
            return  <h6 className={`text-6xl ${style}`}>{props.children}</h6>
            break;
        default:
            return  <p className={`${style}`}>{props.children}</p>
            break;
    }
}