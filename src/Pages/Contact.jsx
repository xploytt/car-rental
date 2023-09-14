import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import Hero from '../components/Hero.jsx';
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {Link} from "react-router-dom"
import {MdLocationOn} from "react-icons/md"
import {DefaultBtn as DefaultBtn} from "../UIcomponents/CRButtons"
import {IoIosMailOpen} from "react-icons/io"
// import Map from "./assets/map.png"

function Contact(props) {
    const [updatePage] = useOutletContext()
    const [name, setName] = useState('')
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const sendMsg = ()=>{
        console.log("sending message..")
        //validate input details..


        //script to send message

        
        console.log("message sent")
    }
    
    useEffect(()=>{
        updatePage("contact")
    })

    return (
        <>
            <Hero page="Contact" />
            <main className='font-pop'>
                <section id='contact-section' className='py-[100px] px-[1rem] '>
                    
                    <div id="contact-div-flex" className="contact-lg:flex contact-lg:items-normal contact-lg:gap-[6rem] contact-lg:justify-center max-w-[1270px] mx-auto bg-[url('./assets/map.png')] bg-no-repeat bg-center">

                        <div className='contact-lg:w-[40%] px-[1rem] mb-[30px] classname="block"00px]'>
                            <h2 className='font-[800] text-[2.5rem]'>
                                Need additional information?
                            </h2>
                            <p className='p-[.4rem] text-[#706f7b] my-[20px]'>
                            A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
                            </p>
                            <ul>
                                <li className='contact-a font-[700] mb-[20px]'>
                                    <Link to="tel:+2349078117423"><BsFillTelephoneFill className="inline mr-[10px]"/>(234) 907-811-742-3</Link>
                                </li>
                                <li className='contact-a font-[700] mb-[20px]'>
                                    <Link to="mailto:startstickscephas@gmail.com"><MdEmail className="inline mr-[10px]"/>startstickscephas@gmail.com</Link>
                                </li>
                                <li className='contact-a font-[700]'>
                                    <Link to="#"><MdLocationOn className="inline mr-[10px]"/>Lagos, Nigeria</Link>
                                </li>
                            </ul>
                        </div>


                        <div id='contact-details' className='contact-lg:w-[50%]'>
                            <form>
                                <label for="name" className="block mx-auto w-[90%]  font-[700]">Full name <span className='text-[#ff4d30]'>*</span></label>
                                <input type='text' placeholder='E.g: "John Doe"' className="mt-[10px] mb-[30px] block mx-auto focus:outline-none bg-[#f2f2f2] px-[2rem] w-[90%] py-[1rem]" id='name' onChange={({target})=>setName(target.value)} value={name} />
                                <label for="email" className="block mx-auto w-[90%]  font-[700]">Email <span className='text-[#ff4d30]'>*</span></label>
                                <input type='email' placeholder='youremail@example.com' className="mt-[10px] mb-[30px] block mx-auto focus:outline-none bg-[#f2f2f2] px-[2rem] w-[90%] py-[1rem]" id='email' onChange={({target})=>setEmail(target.value)} value={email} />
                                <label for="message" className="block mx-auto w-[90%]  font-[700]">Tell us about it <span className='text-[#ff4d30]'>*</span></label>
                                <textarea id='contact-message' rows={6} placeholder='Write Here..' className="mt-[10px] mb-[30px] block mx-auto focus:outline-none bg-[#f2f2f2] px-[2rem] w-[90%] py-[1rem]" onChange={({target})=>setMessage(target.value)} value={message}></textarea>
                                <DefaultBtn content="Send Message" contentIcon={<IoIosMailOpen />} iconLeft styles="orange-btn w-[90%] font-[800] block mx-auto text-[1.25rem] mt-[20px] mb-[20px] py-[20px]" type='submit' callback={sendMsg} />
                            </form>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;