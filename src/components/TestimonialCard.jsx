import React from 'react';
import { FaQuoteRight } from "react-icons/fa";

function TestimonialCard({testimony, testifierLoc, testifier, testifierImg}) {
    return (
        <>
            <div className='testimonial-card bg-white ml-auto mr-auto w-[100%] max-w-[560px] py-[50px] px-[3rem] mt-[50px]'>
                <p className='font-[500] text-[1.4rem]'>
                    {testimony}
                </p>

                <div className='relative mt-[30px]'>
                    <div className='flex max-w-[200px] gap-[1rem]'>
                        <div className='w-[4rem] mr-auto'>
                            <img src={testifierImg} alt="" className='rounded-full'/>
                        </div>
                        <div>
                            <h4 className='font-[700] text-[1.2rem]'>{testifier}</h4>
                            <p>{testifierLoc}</p>
                        </div>
                    </div>

                    <div className='absolute text-[#ff4d30] hidden testimonials-quote:block text-[3rem] right-[5%] bottom-[10%]'><FaQuoteRight /></div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;