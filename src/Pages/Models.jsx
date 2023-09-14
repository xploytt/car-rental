import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Hero from '../components/Hero.jsx';
import Model from '../components/Model.jsx';
import { models } from '../data/models.js';


function Models(props) {
    const [updatePage] = useOutletContext()

    useEffect(()=>{
        updatePage("models")
    })


    return (
        <>
            <Hero page="Vehicles Model" />
            <main>
                <section>
                    <div id='models-div' className='my-[50px] grid py-14 team-grid:grid-cols-2 team-grid:mx-auto team-grid:max-w-[780px] team-grid-3:grid-cols-3 team-grid-3:max-w-[1140px]'>
                        {models.map((model, i)=><Model key={i} CarImage={model.carImage} BrandName={model.brand} CarName={model.carName} Price={model.dailyPrice} Manual={model.manual} Diesel={model.diesel} StarRating={model.starRating} />)}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Models;