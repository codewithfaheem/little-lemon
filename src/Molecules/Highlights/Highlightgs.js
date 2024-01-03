import React from "react";
import Heading from "../../Atoms/Headings/Headings";
import Button from "../../Atoms/Button/Button";
import img_1 from "./img-1.png"
import img_2 from "./img-2.png"
import img_3 from "./img-3.png"
const specialItems = [
    {
        name: 'Greek Salad',
        price: '12.99',
        details: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        img: img_1
    },
    {
        name: 'Bruschetta',
        price: '12.99',
        details: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        img: img_2
    },
    {
        name: 'Greek Salad',
        price: '12.99',
        details: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        img: img_3
    },
]

export default function Highlights(){
    return(
        <div className="flex flex-col justify-center w-2/4 m-auto">
            <div className="flex justify-between items-center mt-12">
                <Heading variant="h3" className="uppercase font-extrabold">This weeks specials!</Heading>
                <Button type="link">Online Menu</Button>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-4">
                {specialItems.map((item,i)=>{
                    return(
                        <div className="flex flex-col min-h-[35rem] rounded-xl overflow-hidden" key={item.name+'_'+i}>
                            <div>
                                <img className="w-full h-full object-cover" src={item.img} />
                            </div>
                            <div className="flex flex-col flex-1 p-4 pt-8 bg-garyLight">
                                <div className="flex items-center justify-between mb-6">
                                    <Heading variant="h4" className="font-medium">{item.name}</Heading>
                                    <Heading className="text-xl text-secondaryOne">${item.price}</Heading>
                                </div>
                                <Heading className="text-justify flex-1">
                                    {item.details}
                                </Heading>
                                <a href="" className="flex w-max gap-2 mb-2 font-medium group hover:text-primaryOne">
                                    Order for delivery
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-primaryOne">
                                        <path d="M6.5 20C4.57 20 3 18.43 3 16.5S4.57 13 6.5 13s3.5 1.57 3.5 3.5S8.43 20 6.5 20zm0-5c-.827 0-1.5.673-1.5 1.5S5.673 18 6.5 18 8 17.327 8 16.5 7.327 15 6.5 15zM19.5 20c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"/><path d="M8 16h9v2H8zM10 12H2V4h8v8zm-6-2h4V6H4v4zM5 12h2v3H5z"/><path d="M15.333 14H13c-1.103 0-2-.897-2-2H8v-2h3c1.103 0 2 .897 2 2h1.667L18.4 9.2l1.2 1.6-4.267 3.2z"/><path d="M18.97 14.235 17.4 8.54a1.956 1.956 0 0 1-.076-.54H16V6h3.326v2l1.572 5.704-1.928.531z"/><path d="M19 9h2v2h-2z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}