import React, {useState} from 'react';
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import {BsFillTelephoneFill} from "react-icons/bs"


function GetInTouch(){
    return (
        <div className='relative z-[1] h-[180px] text-[2rem] font-[700] flex items-center justify-center'>
            <div className='bg-[url("./assets/get-in-touch.png")] object-cover bg-no-repeat opacity-80  absolute top-0 left-0 right-0 bottom-0'>
            </div>
            <div className='z-10 text-center banner-flex:flex banner-flex:items-center banner-flex:justify-center banner-flex:text-left gap-x-[3rem] w-[95%] mx-auto max-w[1025px]'>
                <span className='text-white'>Book a car by getting in touch with us</span>
                <span className='text-[#ff4d30] flex items-center justify-center gap-[.8rem] banner-flex:min-w-[300px]'><BsFillTelephoneFill /> (123) 456-7869</span>
            </div>
        </div>
    )
}

function SharedLayout(props) {
    const [page, updatePage] = useState("home")

    return (
        <>
            <Header updatePage={updatePage}/>
            <Outlet context={[updatePage]}/>
            {page !== "home" && <GetInTouch />}
            <Footer />    
        </>
    );
}

export default SharedLayout;