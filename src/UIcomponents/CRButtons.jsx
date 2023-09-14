import React from 'react';

function DefaultBtn({content, styles, type, callback, contentIcon, iconLeft, preDefinedStyles}){
    return (
        
        <button className={`px-[2rem] rounded-[.2rem] ${styles} ${contentIcon ? "flex items-center gap-2 justify-center" : ""} ${preDefinedStyles}`} onClick={(e)=>{
            e.preventDefault()
            if (callback) callback()
            
        }} type={type}>
        {iconLeft && contentIcon && <span className="mr-1">{contentIcon}</span>}
        {content}
        {!iconLeft && contentIcon && <span className="ml-1">{contentIcon}</span>} 
        </button>
        
    )
}



function defaultOrangeBtn({content, type, styles, callback, contentIcon}){
    return (

        <DefaultBtn content={content} type={type} styles={`orange-btn ${styles}`} callback={callback} contentIcon={contentIcon}/>

        // {/* <button type={type} onClick={(e)=>{ */}
            // e.preventDefault()
            // callback()
        // }} className={`orange-btn ${styles} ${contentIcon ? "flex items-center gap-2 justify-center" : ""}`}>{contentIcon && contentIcon}{content}</button>
    )
}

export {DefaultBtn}