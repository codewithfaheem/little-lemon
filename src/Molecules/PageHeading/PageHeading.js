import React from "react";
import Button from "../../Atoms/Button/Button";

import Heading from "../../Atoms/Headings/Headings";

export default function PageHeading(props){
    return(
        <div className="flex pb-20">
            <div className="flex flex-1 justify-center bg-primaryOne">
                <div className="flex items-center justify-between w-2/4">
                    <Heading variant="h2" className="capitalize text-primaryTwo my-8">{props.children}</Heading>
                </div>
            </div>
        </div>
    )
}