

const siv = (ref)=>{
    ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // or 'center', 'end'
        inline: 'start' // or 'center', 'end'
    });
}

export default siv;