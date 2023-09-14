import React from 'react';

function Hero({page}) {
    return (
        <div className='font-pop bg-[url("./assets/heroes-bg.png")] bg-no-repeat bg-center bg-cover relative min-h-[400px]'>
            <div className='absolute top-0 bottom-0 left-0 right-0 transparent-bg'></div>


            {/*making use of the font-width responsive media-query in my tailwind class: 1136px*/}

            <div className='absolute translate-y-[50%] bottom-[50%] max-w-[1330px] w-[92%] left-[50%] translate-x-[-50%]'>
                <h3 className='text-[2.3rem] font-[700]'>{page}</h3>
                <p className='font-[600]'>Home/{page}</p>
            </div>
        </div>
    );
}

export default Hero;