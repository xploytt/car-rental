import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Hero from '../components/Hero.jsx';
import TeamGrid from '../components/TeamGrid.jsx';
import teamMembers from '../data/team-members.js'



function Team(props) {
    const [updatePage] = useOutletContext()

    useEffect(()=>{
        updatePage("team")
    })

    return (
        <>
            <Hero page="Our Team" />

           <main className='font-pop py-[3rem]'>
                <div id="team-members" className='pt-[50px] grid team-grid:grid-cols-2 team-grid:mx-auto team-grid:max-w-[780px] team-grid-3:grid-cols-3 team-grid-3:max-w-[1140px]'>
                    {teamMembers.map(
                        ({name, role, img}, i) => 
                        <TeamGrid key={i} name={name} role={role} img={img} />
                    )}

                </div>
           </main> 
        </>
    );
}

export default Team;