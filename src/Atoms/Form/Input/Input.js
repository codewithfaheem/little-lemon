import React from "react";
function Input(props) {
  return (
    <div className={"relative z-0 w-full mb-5 group " + props.className}>
        <input type={props.type? props.type: "input"} name={props.name} id={props.id} required={props.required} value={props.value} onChange={props.onChange} aria-label={props.label} className={"block py-1.5 px-0 w-full text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer " + props.inputClass} placeholder="" />
        <label htmlFor={props.id} className="absolute text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2">{props.label}</label>
    </div>
  );
}

export default Input;