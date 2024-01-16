import React from "react";
function Select(props) {
    const options = props.options;
  return (
    <div className="relative z-0 w-full mb-9 group">
        <select id={props.id}  required={props.required} value={props.value} onChange={props.onChange} aria-label={props.label} className="block py-1.5 pe-6 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="">
            {options.map((item,i)=>{
                return(
                    <option key={item+'_'+i} value={item}>{item}</option>
                )
            })}
        </select>
        <label htmlFor={props.id} className="absolute text-gray-500 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">{props.label}</label>
        <label htmlFor={props.id} className="absolute right-0 top-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </label>
    </div>
  );
}

export default Select;