import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import loc from '../data/location';
import { brand } from '../data/models';
import { FaCar, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
// import BookingBg from '../assets/booking-bg.png'
import FormFeedback from './FormFeedback';

const validDate = (dateString) => {
    const today = new Date().toISOString().split('T')[0];
    return dateString >= today;
  }

const isPickupBeforeDropOff = (pickupDate, dropOffDate) => {
    const pickup = new Date(pickupDate);
    const dropOff = new Date(dropOffDate);
  
    // Compare the dates
    return pickup > dropOff;
  }


function Booking({bookingRef, setTripDetails, setReservation, feedbackDetails, setFeedbackDetails, reserveSuccessful, setReserveSuccess}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    
    const formRef = useRef(null)


    const processData = ({carBrand, pickUpLoc, dropOffLoc, pickUpDate, dropOffDate}) => {
        
        let noFormErr = true
        if (!brand.includes(carBrand)) noFormErr = false
        
        if (! loc.includes(pickUpLoc) || ! loc.includes(dropOffLoc)) noFormErr = false
        
        // this is the point you update the formErr state
        if(!noFormErr){
            setFeedbackDetails(true)
            // console.log('! succeffully submitted')
            return
        }

        // check for pickup and dropoff validation date
        if(!validDate(pickUpDate) || !validDate(dropOffDate)) {
            setFeedbackDetails(true)
            // console.log('! succeffully submitted')
            return
        }else if(isPickupBeforeDropOff(pickUpDate, dropOffDate)){
            setFeedbackDetails(true)
            // console.log('! succeffully submitted')
            return
        }

        setFeedbackDetails(false)
        setTripDetails({carBrand, pickUpLoc, dropOffLoc, pickUpDate, dropOffDate})
        setReservation(true)
        // console.log('succeffully submitted')

        // process booking.. maybe send to the backend/db 
        // processBooking()
        
    }

    const onSubmit = data => processData(data)

    const feedbackCallback = ()=> {
        formRef.current.reset()
        setFeedbackDetails(false)
        setTripDetails({})
    }

    return (
        <section id='booking-sec' ref={bookingRef} className='team-grid:relative w-[90%] max-w-[1300px] mx-auto bg-white bg-[url(../assets/booking-bg.png)] my-[80px] px-[1.5rem] py-[40px]'>
            <h2 className='text-[1.5rem] font-[900] mb-[15px]'>Book a car</h2>
            {feedbackDetails && 
                <FormFeedback callback={feedbackCallback} feedbackText={"Incorrect or empty field!"} />}
            
            {reserveSuccessful && 
                <FormFeedback callback={()=>{
                    formRef.current.reset()
                    setReserveSuccess(false)
                }} feedbackText={"Check your email to confirm the order."} success={true} />}
            
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className='booking-grid:grid booking-grid-3:grid-cols-3 booking-grid:grid-cols-2 booking-grid:gap-4'>
                <div>
                    <label for='car-brand-select'><FaCar className='orange-fill inline-block text-[18px] mr-[15px]'/>Select Your Car Type <span>*</span></label><br />
                    <select className='booking-reserve-input text-[#ababab]' {...register("carBrand", {required:true})} id='car-brand-select'>
                        <option>Select your car type</option>
                        {brand.map((brand, i) => <option key={i} value={brand}>{brand}</option>)}
                    </select>
                </div>

                <div>
                    <label for='pick-up-select'><FaMapMarkerAlt className='orange-fill inline-block text-[18px] mr-[15px]'/> Pick-up <span>*</span></label><br />
                    <select className='booking-reserve-input text-[#ababab]' id='pick-up-select' {...register("pickUpLoc", {required:true})}>
                        <option>Select pick up location</option>
                        {loc.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                    </select>
                </div>

                <div>
                    <label for='drop-off-select'><FaMapMarkerAlt className='orange-fill inline-block text-[18px] mr-[15px]'/> Drop-of <span>*</span></label><br />
                    <select className='booking-reserve-input text-[#ababab]' id='drop-off-select' {...register("dropOffLoc", {required:true})}>
                        <option>Select drop off location</option>
                        {loc.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                    </select>
                </div>

                <div>
                    <label for='pick-up-input'><FaCalendar className='orange-fill inline-block text-[20px] mr-[15px]'/> Pick-up <span>*</span></label><br />
                    <input className='booking-reserve-input text-[#ababab]' id='picl-up-input' type='date' {...register("pickUpDate", {required:true})} />
                </div>

                <div>
                    <label for='drop-off-input'><FaCalendar className='orange-fill inline-block text-[18px] mr-[15px]'/> Drop-of <span>*</span></label><br />
                    <input className='booking-reserve-input text-[#ababab]' id='drop-off-input' type='date' {...register("dropOffDate", {required:true})} />
                </div>

                <div>
                <button className="booking-grid:mt-[35px] orange-btn w-full text-[1.25rem] mb-[20px] py-[20px]" type='submit'>Search</button>
                </div>

            </form>
        </section>
    );
}

export default Booking;