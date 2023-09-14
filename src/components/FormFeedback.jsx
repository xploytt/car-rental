import React from 'react';
import { FaTimes } from 'react-icons/fa';

function FormFeedback({feedbackText, callback, success}) {
    return (
        <div className={`p-[.8rem] rounded-[.6rem] my-[15px] mt-[0] font-[500] text-[1.09rem] flex items-center ${success ? "bg-[#c3fabe]" : "bg-[#f8d7da]"} ${success ? "text-[#2a6817]" : "text-[#721c24]"}`}>
        <h3 className='mr-auto'>{feedbackText}</h3>
        <button onClick={()=>{
            callback()
        }}><FaTimes /></button></div>
    );
}

export default FormFeedback;