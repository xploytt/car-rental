import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Hero from '../components/Hero.jsx';
import AboutMain from "../assets/about/about-main.jpg"
import Icon1 from "../assets/about/about-icon1.png"
import Icon2 from "../assets/about/about-icon2.png"
import Icon3 from "../assets/about/about-icon3.png"
import PlanTrip from '../components/PlanTrip.jsx';

function AboutIconText({Num, Img, Text}) {
    return(
        <>
            <div className="about-icon-text mt-[30px]">
                <div className='w-[60px]'>
                    <img src={Img} alt='' />
                </div>

                <div className='about-text:flex about-text:items-center about-text:justify-center gap-4 mt-[10px]'>
                    <h4 className='text-[3rem] font-[900]'>{Num}</h4>
                    <p className='text-[#706f7b]'>{Text}</p>
                </div>
            </div>
        </>
    )
}

function About() {
    const [updatePage] = useOutletContext()
    const textIcon = [
        {
            num: 20,
            text: "Car Types",
            icon: Icon3
        },
        {
            num: 85,
            text: "Rental Outlets",
            icon: Icon2
        },
        {
            num: 75,
            text: "Repair Shops",
            icon: Icon1
        }
    ]

    useEffect(()=>{
        updatePage("about")
    })


    return (
        <>
            <Hero page="About" />
            <main className='font-pop'>
                <section className='px-[1.5rem] py-24'>
                    <div className='max-w-[510px] mx-auto about-company-flex:flex about-company-flex:items-center about-company-flex:max-w-[930px] about-company-flex:gap-[1rem]'>
                        <div className='about-company-flex:w-[50%] about-company-flex:pt-[50px]'>
                            <img src={AboutMain} alt='' className='about-company-flex:h-[420px] mx-auto'/>
                        </div>
                        <div className='pt-[50px] text-center about-company-flex:w-[50%] about-company-flex:text-left about-company-flex:pt-0'>
                            <h3 className='font-[500.1] text-[1.3rem]'>
                                About Company
                            </h3>
                            <h2 className='font-[800] text-[2.7rem] mt-[10px] mb-[20px] leading-[1.1]'>
                                You start the engine and your adventure begins
                            </h2>
                            <p className='text-[#706f7b] font-[400] text-[.95rem]'>
                                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
                            </p>

                            <div className='about-text:flex about-text:items-center about-text:justify-center about-text:gap-8 text-center'>
                                {textIcon.map((iconText, i) => 
                                    <AboutIconText key={i} Num={iconText.num} Img={iconText.icon} Text={iconText.text} />
                                )}
                            </div>
                        </div>
                    </div>

                    <PlanTrip />
                </section>
            </main>
        </>
    );
}

export default About;