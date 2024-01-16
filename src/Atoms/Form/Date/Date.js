import React, {useEffect} from "react";

const DateComponent = (props) => {
  return (
    <div className="relative z-0 w-full mb-9 group">
        <input type="date" name={props.name} id={props.id} required={props.required} value={props.value} min={props.value} onChange={props.onChange} aria-label={props.label} className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="enter" />
        <label htmlFor={props.id} className="absolute text-gray-500 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0]  peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">{props.label}</label>
    </div>
  );
}

export default DateComponent;