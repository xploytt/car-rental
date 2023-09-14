import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Hero from '../components/Hero.jsx';
import {testimonials} from "../data/testimonials.js"
import Harry from "../assets/testimonials/harry.jpg"
import TestimonialCard from '../components/TestimonialCard.jsx';


function Testimonials(props) {
    const [updatePage] = useOutletContext()

    useEffect(()=>{
        updatePage("testimonials")
    })

    return (
        <>
            <Hero page="Testimonials" />
            <main className='font-pop'>
                <section className='bg-[#f8f8f8]'>
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
                </section>
            </main>
        </>
    );
}

export default Testimonials;