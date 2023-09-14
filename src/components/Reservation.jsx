import React, { useEffect, useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { models } from '../data/models';
import reserveDetailsNeeded from '../data/reserveDetails';
import * as EmailValidator from "email-validator"
import FormFeedback from './FormFeedback';


function Reservation({tripDetails, setReservation, setReserveSuccess}) {
    const {carBrand, pickUpLoc, dropOffLoc, pickUpDate, dropOffDate} = tripDetails
    const [formErr, setFormErr] = useState(()=> ({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        age: false,
        email: false,
        address: false,
        city: false,
        zipCode: false
    }))

    const [reserveBody, setReserveBody] = useState( () => ({
        'newsletter': true,
        "firstName": "",
        "lastName": "",
        "phoneNumber": "",
        "age": "",
        "email": "",
        "address": "",
        "city": "",
        "zipCode": "",

        validate(){
            let validated
            validated = true

            Object.keys(this).forEach((key)=> {

                if (this[key] == "") {
                    validated = false
                    setFormErr(prev => ({
                        ...prev,
                        [key]: true
                    }))
                }else{
                    setFormErr(prev => ({
                        ...prev,
                        [key]: false
                    }))
                }
            })

            if (!EmailValidator.validate(this.email)) {
                validated = false
                setFormErr(prev => ({
                    ...prev,
                    email: true
                }))
            }
            return validated 
        }


    }) 
    );

    let imgUrl;

    let modelBrand = carBrand
    modelBrand = modelBrand.split(' ')
    modelBrand.pop()
    modelBrand =  modelBrand.join(' ')
    
    for (const model of models) {
        if (model.brand == modelBrand) {
            imgUrl = model.reserve
            break; 
        }
      }

      useEffect(()=>{
        document.body.classList.add('overflow-y-hidden');
        return ()=> document.body.classList.remove('overflow-y-hidden')
      })

      const reservedChange = (e) => {
        const { name, value, defaultChecked } = e.target;

        if (name === "newsletter") {
          setReserveBody((prev) => ({
            ...prev,
            [name]: !defaultChecked,
          }));
        } else {
          setReserveBody((prevBody) => ({
            ...prevBody,
            [name]: value,
          }));
        }
      }; 

      const reserveBooking = e => {
        e.preventDefault()
        if (reserveBody.validate()){
            // process the details.. send to the backend 
                    // ...
            setReserveSuccess(true)
            // e.target.reset()
            setReservation(false)  
        }
      }


    return (
       <>
         <section className='fixed z-[99999] overflow-y-auto h-[100vh] bg-white top-0 bottom-0 left-[50%] translate-x-[-50%] w-[100%] max-w-[830px] reserve-modal-6:top-[4.3%]'>
            <div className='flex items-center text-[1.5rem] font-[900] bg-[#ff4d30] px-[.8rem] py-[10px] text-white'>
                <h2 className='mr-auto'>COMPLETE RESERVATION</h2>
                <button onClick={() => setReservation(false)}>
                    <FaTimes />
                </button>
            </div>

            <div className='bg-[#ffeae6] px-[2rem] py-[20px]'>
                <div className='text-default-orange font-[900]'>
                <FaInfoCircle className='text-[20px] mr-[15px] relative bottom-[5px] inline' />
                <span className='text-[1.3rem]'>Upon completing this reservation enquiry, you will receive:</span></div>
                <p className='text-[#777777] mt-[20px] font-[500] text-[1.1rem]'>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>

            <div id='reserve-details' className='text-center pt-[20px] reserve-modal-65:flex reserve-modal-65:mx-auto reserve-modal-65:text-left reserve-modal-65:w-[90%]'>
                <div className='w-[80%] mx-auto'>
                    <h4 className='text-default-orange text-[1.2rem] font-[900]'>
                        Location & Date
                    </h4>
                    <div id='reserve-time-data'>
                        <div className='mt-[20px]'>
                            <h5 className='font-[900]'><FaMapMarkerAlt className='reserve-icon'/> Pick-Up Date &Time</h5>
                            <div>
                                <span className='pickup-info'>{pickUpDate}/</span>
                                <input type='time' />
                            </div>
                        </div>

                        <div className='mt-[30px]'>
                            <h5 className='font-[900]'><FaMapMarkerAlt className='reserve-icon'/> Drop-off Date &Time</h5>
                            <div>
                                <span className='pickup-info'>{dropOffDate}/</span>
                                <input type='time' />
                            </div>
                        </div>

                        <div className='mt-[30px]'>
                            <h5 className='font-[900]'><FaCalendar className='reserve-icon'/> Pick-Up location</h5>
                            <p className='pickup-info'>{pickUpLoc}</p>
                        </div>

                        <div className='mt-[30px]'>
                            <h5 className='font-[900]'><FaCalendar className='reserve-icon'/> Drop-off location</h5>
                            <p className='pickup-info'>{dropOffLoc}</p>
                        </div>

                    </div>
                    
                </div>

                <div className='w-[80%] mx-auto mt-[30px] reserve-modal-65:mt-0'>
                    <h4 className='text-default-orange text-[1.2rem] font-[900]'>
                        Car - {carBrand}
                    </h4>
                    <div className='mt-[20px]'>
                        <img src={`${imgUrl}`} />
                    </div>
                </div>
            </div>

            <hr className='my-[30px] border-[#ababab]'/>

            <form onSubmit={reserveBooking}>
                <fieldset className='px-[2rem]'>
                    <legend className='text-default-orange font-[900] mb-[30px] text-[1.18rem]'>PERSONAL INFORMATION</legend>
                    <div id='personal-info-div' className='reserve-modal-65:flex reserve-modal-65:flex-wrap gap-x-[1.5rem] max-w-[750px] mx-auto'>
                    {
                        reserveDetailsNeeded.map(({type, name, placeholder, label}) =>
                           <div key={name} className={`${name === "address" ? "w-[100%] exclude-width" : ""} ${type === "email" ? "w-[100%] exclude-width" : ""}`}>

                                <label for={name} className='text-[#777777] font-[500]'>{label}<b className='text-default-orange ml-[5px]'>*</b></label>

                                <input required type={type} name={name} autoComplete='off' placeholder={placeholder} label= {label} className={`${formErr[name] ? "outline outline-1 outline-red-600" : ""} block booking-reserve-input bg-[#dbdbdb] w-[100%]`}  id={name} value={reserveBody.name} onChange={reservedChange}/>
                            </div>
                        )
                    }
                    </div>
                    <div id='newsletter-div' className='flex items-center gap-2'>
                        <input type="checkbox" id="newsletter" name="newsletter" defaultChecked={reserveBody.newsletter} onChange={reservedChange}/>
                        <label for="newsletter">Please send me latest news and updates</label>
                    </div>

                    <div className='mt-[30px] mb-[70px] pt-[40px] pb-[15px] bg-[#dbdbdb] '>
                    <button id='reserveBtn' className="orange-btn text-center w-[50%] max-w-[200px] block text-[1.25rem] mx-auto reserve-modal-65:mr-[2rem] mb-[20px] py-[20px] font-[900]" type='submit'>Reserve Now</button>
                    </div>
                </fieldset>
            </form>

            
        </section>
        <div className='fixed z-[999] top-0 w-[100%] h-[100%] reserve-bg'>

        </div>
       </>
    );
}

export default Reservation;