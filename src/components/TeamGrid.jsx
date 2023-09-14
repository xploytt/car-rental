import React from 'react';

function TeamGrid({name, role, img}) {
    return (
        <>
            <div className="grid-item w-[90%] max-w-fit mx-auto mb-[50px] pb-[30px]">
                    <div className='w-full mx-auto'>
                        <img src={img} alt="Team member picture" className='bg-[#f6f6f6]' />
                    </div>
                    <h3 className='mt-[20px] text-center font-[700] text-[1.5rem]'>{name}</h3>
                    <p className='text-center text-[#777] text-[1.1rem]'>{role}</p>
                </div>
        </>
    );
}

export default TeamGrid;