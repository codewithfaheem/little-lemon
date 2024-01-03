import React from "react";

export default function Button(props) {
    return(
        <button type={props.type? 'props.type':'button'} className="min-w-44 p-2 rounded-lg bg-primaryTwo text-center font-medium text-black">
            {props.children}
        </button>
    )
}