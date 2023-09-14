
import React, { useEffect, useState, useRef } from 'react';
import { useOutletContext } from "react-router-dom";
import FixedBg from '../assets/home/fixed-bg.png'
import MainCar from '../assets/home/main-car.png'
import { DefaultBtn } from '../UIcomponents/CRButtons';
import { TiTick } from 'react-icons/ti';
import { FiChevronRight } from 'react-icons/fi';
import Booking from '../components/Booking';
import PlanTrip from '../components/PlanTrip';
import Reservation from '../components/Reservation';
import Fleet from '../components/Fleet';
import SaveBig from '../components/SaveBig';
import WCU from '../components/WCU';
import siv from '../js/siv';
import TestimonialCard from '../components/TestimonialCard.jsx';
import {testimonials} from "../data/testimonials.js"
import Faq from '../components/Faq';
import Download from '../components/Download';


function Home(props) {
    const [updatePage] = useOutletContext()
    const [tripDetails, setTripDetails] = useState({})
    const [reservation, setReservation] = useState(false)
    const [scrollBtnHidden, setToggleBtnState] = useState(true) 
    const [reserveSuccessful, setReserveSuccess] = useState(false)
    const [feedbackDetails, setFeedbackDetails] = useState(false)
    const bookingRef = useRef(null)
    const homeRef = useRef(null)
    const textWrapperRef = useRef(null)

    const toggleSrcollUp = (entries, observer)=>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setToggleBtnState(true)
            }else{
                setToggleBtnState(false)
            }
        })
    }

    let options = {
        rootMargin: "0px",
        threshold: 0.1,
      };
      
    let observer = new IntersectionObserver(toggleSrcollUp, options);

    useEffect(()=>{
        updatePage("home")
        observer.observe(textWrapperRef.current)

        return observer.disconnect()
    })

    return (
        <>
            <div className='font-pop bg-[#f8f8f8]' ref={homeRef}>
                <section id='hero_context' className='pt-[150px] relative'>
                    <div ref={textWrapperRef} id='_text_context_wrapper' className='max-w-[1250px] mx-auto relative'>

                        <div className='mx-auto text-center home-text-mobile-hero:mt-[40px] home-text-tab-hero:mt-[50px] team-grid:text-left team-grid:mt-[5px] team-grid:mx-6'>
                            <h4 className='font-[900] text-[1.4rem] w-[90%]'>
                            Plan your trip now
                            </h4>
                            <h1 className='w-[90%] mt-[7px] text-[3.3rem] font-[900] leading-[1.2]'> 
                            Save <span className='text-[#ff4d30]'>big</span> with our car rental
                            </h1>
                            <p className='text-[#706f7b] my-[20px] text-[0.99rem]'>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                            </p>

                            <div id='hero_btns' className='w-[90%] team-grid:mt-[40px]'>
                                <DefaultBtn content={'Book Ride'} contentIcon={<TiTick />} styles='orange-btn' callback={(e)=>{siv(bookingRef)}}/>
                                <DefaultBtn content={'Learn More'} contentIcon={<FiChevronRight />} id='learn-more' styles='bg-black text-white transition-all ease-in-out duration-200 hover:outline-2 hover:text-black hover:bg-white hover:outline-black hover:outline mt-[20px] home-text-tab-hero:mt-0 max-h-[55px]' />
                            </div>
                        </div>

                        <div id='main-car-div' className=''>
                            <img src={MainCar} alt='Hero Car' />
                        </div>

                    </div>
                    

                <div className='' id='city-img-wrapper'>
                    <img src={FixedBg} id='city-img-div' alt='City' className='' />
                </div>
                
                </section>

                <Booking bookingRef={bookingRef} setTripDetails={setTripDetails} setReservation= {setReservation} feedbackDetails={feedbackDetails} setFeedbackDetails={setFeedbackDetails} reserveSuccessful={reserveSuccessful} setReserveSuccess={setReserveSuccess} />

                {reservation && <Reservation tripDetails={tripDetails} setReservation={setReservation} setReserveSuccess={setReserveSuccess} />}
                <PlanTrip />
                <Fleet bookingRef={bookingRef} />
                <SaveBig />
                <WCU homeRef={homeRef} />

                <div className='py-[100px] px-[1.5rem] mx-auto max-w-[1320px]'>
                        <div className='text-center max-w-[700px] mx-auto'>
                            <h4 className='font-[500] text-[1.5rem]'>Reviewed by People</h4>
                            <h2 className='text-[2.7rem] font-[800]'>Client's Testimonials</h2>
                            <p className='mt-[10px] text-[#706f7b]'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                        </div>

                        <div id='testimonials-div' className='testimonials-card-grid:grid testimonials-card-grid:grid-cols-2 gap-8 testimonials-card-grid:px-[2.5rem]'> 
                            {testimonials.map(({testifier, testimony, testifier_img, testifier_loc}, i)=> <TestimonialCard testifier={testifier} testimony={testimony} testifierLoc={testifier_loc} testifierImg={testifier_img} key={i} />)}
                        </div>
                </div>
                <Faq />
                <Download />

                <button onClick={()=> siv(homeRef)} class={`${scrollBtnHidden ? "hidden" : ""}fixed right-[2%] text-[1.5rem] z-[1000] bottom-[10%] orange-btn`}>^</button>
            </div>

                
            
        </>
    );
}

export default Home;