import React from 'react';
import MainImg from "../assets/wcu/main-wcu.png"
import { FiChevronRight } from 'react-icons/fi';
import { DefaultBtn } from '../UIcomponents/CRButtons';
import textData from '../data/wcu_text_data';
import siv from '../js/siv'

function WCU_Textbox({icon, alt, title, text}) {
    return (
        <div className='w-[90%] mx-auto mt-[40px] wcu_textbox_flex:flex wcu_textbox_flex:items-center wcu_textbox_flex:w-[80%] max-w-[500px] booking-grid-3:w-[100%]'>
            <div className='wcu_textbox_flex:w-[60%] booking-grid-3:mx-0'>
                <img src={ icon } alt={ alt } className='mx-auto'/>
            </div>

            <div>
                <h4 className='my-[10px] font-[900] text-[1.5rem]'>{title}</h4>
                <p className='text-[#706f7b] text-[.95rem] w-[95%] leading-tight mx-auto font-[400] booking-grid-3:w-[100%]'>{ text }</p>
            </div>
        </div>
    );
}

function WCU({homeRef}) {
    return (
        <section className='py-[30px] bg-white'>
            <div className='w-[90%] mx-auto'>
                <img src={ MainImg } alt='Cars Image' className='max-w-[100%] mx-auto'/>
            </div>

            <div className= "max-w-[2000px] booking-grid-3:flex booking-grid-3:items-end text-center booking-grid-3:text-left booking-grid-3:mx-auto booking-grid-3:justify-center booking-grid-3:gap-[5rem]">

            <div id='why-choose-us' className=''>
                <h4 className='my-[10px] font-[600] text-[1.2rem]'>Why Choose Us</h4>

                <h2 className='text-[2.5rem] leading-tight font-[900] my-[10px]'>Best valued deals you will ever find</h2>
                <p className='w-[90%] mx-auto text-[#706f7b] booking-grid-3:mx-0  booking-grid-3:w-[100%] booking-grid-3:text-[.94rem]'>
                Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                </p>
                <DefaultBtn content={'Find Details'} contentIcon={<FiChevronRight />} id='find-details-btn' styles='orange-btn text-[1.15rem]' callback={(e)=>siv(homeRef)}/>
            </div>

            <div className='mt-[70px] booking-grid-3:mt-0'>
                {textData.map(({text, icon, alt, title}, i) => 
                    <WCU_Textbox text={text} icon={icon} alt={alt} title={title} key={i} />
                )}
            </div>
            </div>
        </section>
    );
}

export default WCU;