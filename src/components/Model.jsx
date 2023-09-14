import React from 'react';
import {FaCarSide} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {DefaultBtn as DefaultBtn} from "../UIcomponents/CRButtons"


function Model({CarImage, BrandName, CarName, Price, Manual, Diesel, StarRating}) {
    return (
                <>
                    <div className='max-w-[400px] mx-auto w-[90%] border-t border-solid border-b-[#c6c6c6] mb-[30px]'>
                        <div>
                            <img src={CarImage} alt='' className='h-[17.5rem] w-full aspect-auto'/>
                        </div>
                        <div className='border-b border-r border-l border-solid border-[#c6c6c6] pb-[1rem]'>
                            <div>
                                <div className='flex px-4 py-2'>
                                    <div className='mr-auto'>
                                        <h3 className='font-[700] text-[1.6rem]'>{BrandName}</h3>
                                        <span>
                                            {
                                                //loop through the number of stars for star element..
                                                
                                                Array.apply(null, {length: StarRating}).map((rate, i) => {
                                                    return <AiFillStar key={i} className='inline fill-[gold] text-[1.3rem]'/>
                                                })
                                            }
                                            
                                        </span>
                                    </div>

                                    <div>
                                        <p className='font-[520]'><span className='font-[700] text-[1.7rem]'>${Price}</span><br /> per day</p>
                                    </div>
                                </div>

                                <div className='flex px-4 py-2'>
                                    <div className='mr-auto'>
                                        <FaCarSide className='inline text-[1.5rem] mr-[7px]' /> <span className='text-[#777] text-xl font-[550]'>{CarName}</span>
                                    </div>
                                    <div>
                                        <span className='text-[#777] text-xl font-[550]'>4/5</span> <FaCarSide className='inline text-[1.5rem] ml-[7px]' />
                                    </div>
                                </div>

                                    <div className='px-4 py-2'>
                                        <div className='flex pb-[30px] border-b border-solid border-b-[#c6c6c6]'>
                                            <div className='mr-auto'>
                                                <FaCarSide className='inline text-[1.5rem] mr-[7px]' /> <span className='text-[#777] text-xl font-[550]'>{Manual ? "Manual" : "Automatic"}</span>
                                            </div>
                                            <div>
                                                <span className='text-[#777] text-xl font-[550]'>{Diesel ? "Diesel" : "Petrol"}</span> <FaCarSide className='inline text-[1.5rem] ml-[7px]' />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='px-4 py-2'>
                                    <DefaultBtn content='Book Ride' styles='orange-btn w-[100%]' />
                                </div>
                        </div>

                    </div>
                </>
    );
}

export default Model;