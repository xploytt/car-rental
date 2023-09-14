import React from 'react';
import SelectCar from '../assets/plan-trip/select-car.png'
import OperatorIcon from '../assets/plan-trip/contact-operator.png'
import BusIcon from '../assets/plan-trip/bus.png'


const boxesDetails = [
    {
        icon: SelectCar,
        boxTitle: 'Select Car',
        boxMsg: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs'
    },
    {
        icon: OperatorIcon,
        boxTitle: 'Contact Operator',
        boxMsg: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
    },
    {
        icon: BusIcon,
        boxTitle: 'Let\'s Drive',
        boxMsg: "Whether you're hitting the open road, we've got you covered with our wide range of cars"
    }
]


const TripBox = ({SelectIcon, Title, Msg}) => {
    return (
        <>
            {/* {i'm using the 'about-text', 'lg' media query here for 520px, 1024px min-width respectively} */}
            <div className='mt-[30px] about-text:px-[5rem] lg:px-[3.5rem]'>
                <div>
                    <img src={SelectIcon} alt='Icon' className='mx-auto' />
                </div>
                <h3 className='text-[1.5rem] font-[600]'>{Title}</h3>
                <p className='text-[#706f7b] text-[.9rem] font-[499] mt-[20px]'>{Msg}</p>
            </div>
        </>
    )
}

function PlanTrip() {
    return (
        <>
        
            <div className='text-center mt-[200px] mb-[40px] max-w-[1345px] mx-auto'>
                <h3 className='font-[550] text-[1.5rem] mt-[20px]'>
                    Plan your trip now
                </h3>
                <h2 className='font-[900] text-[2.7rem]'>
                    Quick & easy car rental
                </h2>

                {/* {made use of 'team-grid', 'lg' media query 801px, 1024px min-width respectively} */}
                <div className='team-grid:grid team-grid:grid-cols-2 lg:grid-cols-3 p-[2rem]'>
                {boxesDetails.map(({icon, boxTitle, boxMsg}, i)=> <TripBox key={i} SelectIcon={icon} Title={boxTitle} Msg={boxMsg}/>)}
                </div>
            </div>
            
        </>
    );
}

export default PlanTrip;