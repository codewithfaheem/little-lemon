import React from "react";
import Heading from "../Headings/Headings";
export default function VerticalNav(props){
    const navItem = props.navItem ? (props.navItem) : ([{title : "",items: []}])
    return(
        <nav className="flex gap-16 ps-16">
            {navItem.map((mainItem,i)=>{
                return(
                    <div className="flex flex-col" key={mainItem.title+'_'+i}>
                        <div>
                            <Heading variant="h5" className="capitalize font-medium mb-4">{mainItem.title}</Heading>
                        </div>
                        <ul>
                            {mainItem.items.map((item,j)=>{
                                return(
                                    <li key={item+'_'+j}>
                                        <a href="">{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </nav>
    )
}