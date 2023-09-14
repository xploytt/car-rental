import React, { useState } from 'react';
import { models } from '../data/models';
import GridLoader from "react-spinners/ClipLoader";
import siv from '../js/siv';

function Fleet({bookingRef}) {
    const [currentModel, setCurrentModel] = useState(models[0])
    const [modelDetails, setModelDetails] = useState(currentModel)
    const [loading, setLoading] = useState(false)
    

    const updateCurrentModel = (e) =>{
        setLoading(true)
        
        for(let i = 0; i < models.length; i++){
            if (models[i].fullName == e.target.textContent){
                setModelDetails(models[i])
                setCurrentModel(models[i])
                setLoading(false)
                break
            }
        }

    }

    return (
        <section className='bg-white py-[100px]'>
            <div className='w-[90%] mx-auto'>
            <div className='text-center'>
            <h3 className='text-[1.5rem] font-[500]'>
                Vehicle Models
            </h3>
            <h2 className='font-[900] text-[2.5rem]'>
                Our rental fleet
            </h2>
            <p className='text-[#706f7b;] max-w-[550px] mx-auto text-[.9rem] font-[450]'>
                Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
            </p>
            </div>

            <div id='fleet-details' className='fleet-grid:grid mt-[50px]'>
            
                <div id='fleet_btns' className='mt-[50px]'>
                    {models.map(({carName, fullName}, i) => {
                        return (
                            <button onClick={e=>updateCurrentModel(e)} key={fullName} className={`w-[100%] text-left orange-bg-hover font-[600] text-[1.3rem] px-[1.5rem] py-[.8rem] my-[10px] block ${carName == currentModel.carName ? "active bg-[#ff4d30] text-[white]": "bg-[#e9e9e9]"}`}> 
                            {fullName} 
                            </button>
                        )
                    })}
                </div>

                <div id='car_car-details' className='fleet-grid-7:grid mt-[100px] items-center'>
                    <div>
                    {loading ? 
                        <GridLoader
                            color={"white"}
                            loading={loading}
                            cssOverride={
                                {
                                    borderColor: "#ff4d30",
                                    width: 50,
                                    height: 50
                                }
                                }
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> :
                    <img src={currentModel.reserve} alt={`${currentModel.fullName} logo`} className='min-w-[100%]' />}

                    </div>                
                
                
                <div className='w-[250px] text-center' id='currentModel_details'>
                  {/* the div below is not a button.. but it has similar style rules to the "orange-btn" class, hence the  "orange-btn" className */}
                  <div className='orange-btn font-[500] text-[1.2rem]'>
                    <span className='font-900 text-[1.8rem]'>
                        ${modelDetails.dailyPrice}
                    </span> / rent per day
                  </div>

                  <div id='car-details'>
                    <div>
                        <span>Model</span>
                        <span>
                            {modelDetails.carName}
                        </span>
                    </div>
                    <div>
                        <span>Mark</span>
                        <span>
                            {modelDetails.mark}
                        </span>
                    </div>
                    <div>
                        <span>Year</span>
                        <span>
                            {modelDetails.year}
                        </span>
                    </div>
                    <div>
                        <span>Doors</span>
                        <span>
                            {modelDetails.doors}
                        </span>
                    </div>
                    <div>
                        <span>AC</span>
                        <span>
                            {modelDetails.AC}
                        </span>
                    </div>
                    <div>
                        <span>Transmission</span>
                        <span>
                            {modelDetails.transmission}
                        </span>
                    </div>
                    <div>
                        <span>Fuel</span>
                        <span>
                            {modelDetails.fuel}
                        </span>
                    </div>
                  </div>

                  <button className='orange-btn w-[100%] mt-[15px] shadow-[6px_6px_0_#efe9e9] font-[900] text-[1.4rem]' onClick={ e =>{siv(bookingRef)}}>RESERVE NOW</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Fleet;