import React, {useState}  from "react"
import { NavLink} from "react-router-dom"
import Logo from "../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import {DefaultBtn as DefaultBtn} from "../UIcomponents/CRButtons"


function Header({updatePage}){
    const [toShowMobileNav, setShowMobileNav] = useState(false)
    return (

        <header className='font-pop font-[700]'>
                <div id='mobile-nav' className={`h-[100vh] z-10 w-full lg:hidden bg-[#fff] 
                ${!toShowMobileNav ? 'left-[-100%]': 'left-[0]'} transition-[left] fixed ease-in-out duration-500`}>
                    <div className='flex items-center mx-auto w-[80%] justify-center h-full top-0'>
                        
                        <div className='w-[1.9rem] absolute top-[2rem] right-[2rem]'>
                            <button className='w-full h-full'>
                                <IoClose className="w-full h-full orange-hover" onClick={()=>{setShowMobileNav(false)}}/>
                            </button>
                        </div>

                        <nav>
                        <ul>
                            <li className='mobile-nav-ul-li'><NavLink to="/" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("home")
                                }}>Home</NavLink></li>
                            <li className='mobile-nav-ul-li'><NavLink to="/about" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("about")
                                }}>About</NavLink></li>
                            <li className='mobile-nav-ul-li'><NavLink to="/models" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("models")
                            }}>Vehicles Models</NavLink></li>
                            <li className='mobile-nav-ul-li'><NavLink to="/testimonials" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("testimonials")
                                }}>Testimonials</NavLink></li>
                            <li className='mobile-nav-ul-li'><NavLink to="/team" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("team")
                                }}>Our Team</NavLink></li>
                            <li className='mobile-nav-ul-li'><NavLink to="/contact" onClick={()=>{
                                setShowMobileNav(false)
                                updatePage("contact")
                            }}>Contact</NavLink></li>
                        </ul>
                        </nav>
                    </div>
                </div>

                <div id='desktop-nav' className='py-[20px] flex gap-[3rem] items-center w-11/12 lg:w-[99%] nav-width-responsive:w-11/12 mx-auto'>

                    <div className='w-1/2 max-w-[120px] mr-auto'>
                        <img className='w-full' src={Logo} alt="Car rental logo"/>
                    </div>
                    <nav className='hidden lg:inline-flex mx-auto'>
                        <ul className="text-[.94rem] font-w-responsive:text-[1rem]">
                            <li className='desktop-nav-ul-li pr-[2rem]'><NavLink to="/" onClick={()=>updatePage("home")}>Home</NavLink></li>
                            <li className='desktop-nav-ul-li pr-[2rem]'><NavLink to="/about" onClick={()=>updatePage("about")}>About</NavLink></li>
                            <li className='desktop-nav-ul-li pr-[2rem]'><NavLink to="/models" onClick={()=>updatePage("models")}>Vehicles Models</NavLink></li>
                            <li className='desktop-nav-ul-li pr-[2rem]'><NavLink to="/testimonials" onClick={()=>updatePage("testimonials")}>Testimonials</NavLink></li>
                            <li className='desktop-nav-ul-li pr-[2rem]'><NavLink to="/team" onClick={()=>updatePage("team")}>Our Team</NavLink></li>
                            <li className='desktop-nav-ul-li'><NavLink to="/contact" onClick={()=>updatePage("contact")}>Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className='hidden lg:inline-flex gap-[1rem]'>
                        <button className="min-w[60px] orange-hover"><span>Sign in</span></button>
                        <DefaultBtn iconLeft='True' type="button" content='Register' styles={'orange-btn'} />
                        
                    </div>

                    <div className='w-[1.9rem] lg:hidden'>
                        <button className='w-full h-full' onClick={()=>{setShowMobileNav(true)}}><RxHamburgerMenu className='w-full h-full orange-hover' /></button>
                    </div>

                </div>
        </header>
    )
}

export default Header