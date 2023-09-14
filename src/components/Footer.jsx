import React, { useState } from "react";
import {BsFillTelephoneFill} from "react-icons/bs"
import {Link} from "react-router-dom"
import {MdEmail} from "react-icons/md"
import {DefaultBtn as DefaultBtn} from "../UIcomponents/CRButtons"

 function Footer(){
    const [email, updateEmail] = useState("")

    const submitEmail = email => {
        //validate email
        
        // send email

        setTimeout(()=>updateEmail(''), 1000) 
    }

    return (
        <footer className="font-pop py-[50px]">
            <div className="w-[90%] mx-auto font-[500] footer-grid:w-[95%] footer-grid:gap-x-[5rem] footer-grid:grid footer-grid:grid-cols-2 footer-grid-4:grid-cols-4 footer-grid-4:gap-x-[4rem] max-w-[1350px]">

                <ul className="footer-ul footer-grid:text-left footer-grid-4:mb-[0] footer-grid-4:overflow-x-auto">
                    <h3 className="footer-ul-h3">CAR <span className="font-[400]">Rental</span></h3>
                    <p className="leading-[1.8rem] text-[#706f7b] mb-[20px]">
                        We offer a big range of vehicles for all your driving needs. 
                        We have the perfect car to meet your needs.
                    </p>
                    <li className="footer-ul-li font-[700]">
                          <Link to="tel:+2349078117423"><BsFillTelephoneFill className="inline mr-[10px]"/>(234) 907-811-742-3</Link>
                    </li>
                    <li className="footer-ul-li font-[700] footer-grid-4:min-w-[290px]">
                         <Link to="mailto:startstickscephas@gmail.com"><MdEmail className="inline mr-[10px]"/>startstickscephas@gmail.com</Link>
                    </li>
                    <li className="footer-ul-li"><Link to="#">Developed by <strong>roc</strong></Link></li>
                </ul>
                <ul className="footer-ul footer-grid:text-left footer-grid-4:mb-[0]">
                    <h3 className="footer-ul-h3">COMPANY</h3> 
                    <li className="footer-ul-li"><Link to="/">New York</Link></li>
                    <li className="footer-ul-li"><Link to="/">Careers</Link></li>
                    <li className="footer-ul-li"><Link to="/">Mobile</Link></li>
                    <li className="footer-ul-li"><Link to="/">Blog</Link></li>
                    <li className="footer-ul-li"><Link to="/">How we work</Link></li>
                </ul>
                <ul className="footer-ul footer-grid:text-left footer-grid-4:mb-[0]" id="working-hours">
                    <h3 className="footer-ul-h3">WORKING HOURS</h3> 
                    <li className="footer-ul-li">Mon - Fri: 9:00AM - 9:00PM</li>
                    <li className="footer-ul-li">Sat: 9:00AM - 19:00PM</li>
                    <li className="footer-ul-li">Sun: Closed</li>
                </ul>
                <div className="text-center footer-grid:text-left">
                    <h3 className="footer-ul-h3">SUBSCRIPTION</h3>
                    <p className="font-[400]">Subscribe your Email address for latest news & updates.</p>

                    <input placeholder="Enter Email Address" className="bg-[#ececec] px-[60px] mb-[10px] font-[250] text-[.9rem] focus:outline-none mt-[30px] py-[10px] block w-full" type="email" value={email} onChange={(e)=> updateEmail(e.target.value)}/>

                    <DefaultBtn content="Submit" styles="orange-btn w-full text-[1.25rem] mb-[20px] py-[20px]" type='submit' args={[email]} callback={submitEmail}/>

                </div>
            </div>
        </footer>
    )
 }

export default Footer
