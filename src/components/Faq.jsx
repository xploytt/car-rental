import React, { useState } from 'react';
import faq from '../data/faq';
import { FaChevronDown } from 'react-icons/fa';
import FaqCar from '../assets/faq-car.png'

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleQuestionClicked = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='font-pop relative bg-white'>
    <div className='absolute bottom-[20%] left-0'>
      <img src={FaqCar} alt="A car image" className='w-[100%]'/>
    </div>
      <div className='py-[50px] px-[1.5rem] mx-auto max-w-[1320px]'>
        <div className='text-center max-w-[700px] mx-auto'>
          <h4 className='font-[500] text-[1.5rem]'>FAQ</h4>
          <h2 className='text-[2.7rem] font-[800]'>Frequently Asked Questions</h2>
          <p className='mt-[10px] text-[#706f7b]'>
            Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns
            and Inquiries.
          </p>
        </div>

        <div id='faq'>
          {faq.map(({ question, answer, id }, i) => (
            <div key={id}>
              <div
                className={`faq-question font-[600] text-[1.15rem] flex items-center cursor-pointer ${
                  i === activeIndex ? 'active bg-[#ff4d30] text-white' : ''
                }`}
                onClick={() => handleQuestionClicked(i)}
              >
                <span>
                {`${i + 1}. ${question}`}
                </span> <FaChevronDown className='ml-auto' />
              </div>

              <div className={`faq-answer text-[#706f7b] text-[1.05rem] ${i === activeIndex ? 'active' : ''}`}>
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
