import React, {useEffect} from 'react';
import Apple from  '../assets/download/apple.svg'
import Google from '../assets/download/google.svg'
import Bg from '../assets/download/bg.png'

function Download(props) {

    return (
        <section id='download-section' className='bg-[#f8f8f8] py-[40px] px-[2rem] overflow-hidden'>
            <div id='download-wrapper-text' className=''>
            <div id='download_text' className='max-w-[590px]'>
                <h2 className='font-[900] text-[2.8rem] leading-[1.3]'>Download our app to get most out of it</h2>
                <p className='text-[#706f7b] my-[20px] leading-[1.5] font-[400] text-[.95rem]'>
                    Thrown shy denote ten ladies though ask saw. Or by to he going think
                    order event music. Incommode so intention defective at convinced. Led
                    income months itself and houses you.
                </p>
                <div id='download-btns-div' class='download-text__btns wcu_textbox_flex:flex gap-8 items-center'>
                    <button>
                        <img alt='download_img' src={Apple} />
                    </button>
                    <button>
                        <img alt='download_img' src={Google} />
                    </button>
                </div>
            </div>
            </div>

            <div id='bg-div' className='min-w-[650px]'>
                <img src={Bg} alt='' className='min-w-[100%]' />
            </div>
        </section>
   
    );
}

export default Download;