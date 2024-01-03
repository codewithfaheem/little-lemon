import React from "react";
import Heading from "../../Atoms/Headings/Headings";
import placeholder from "./Image Placeholder.svg"
const ratingData = [
  {
    name: "Name",
    img: placeholder,
    rating: "Good",
  },
  {
    name: "Name",
    img: placeholder,
    rating: "Good",
  },
  {
    name: "Name",
    img: placeholder,
    rating: "Good",
  },
  {
    name: "Name",
    img: placeholder,
    rating: "Good",
  },
];
export default function Testimonials() {
  return (
      <div className="flex justify-center w-full mt-12 bg-garyLight">
        <div className="flex flex-col items-center justify-between w-2/4 py-8">
          <Heading variant="h3" className="font-extrabold uppercase">
            Testimonials
          </Heading>
          <div className="grid grid-cols-4 gap-5 mt-4">
                {ratingData.map((item,i)=>{
                    return(
                        <div className="flex flex-col p-4 bg-white" key={item.name+'_'+i}>
                            <Heading variant="h4" className="mb-4 font-medium">Rating</Heading>
                            <div className="flex items-center mb-4">
                                <img className="w-24 h-full object-cover" src={item.img} />
                                <Heading variant="h4" className="px-2 font-medium">{item.name}</Heading>
                            </div>
                            <Heading className="">{item.rating}</Heading>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
  );
}
