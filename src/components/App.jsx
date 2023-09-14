import React  from "react";
import Header from "./Header"
import Footer from './Footer';
import Notes from './Notes.jsx'
import notes from "./notes"


function App(){
    return (
    <>
        <Header />
        {/* {notes.map(note=> 
        <Notes
            key= {note.key} 
            title = {note.title}
            content = {note.content}
        />)} */}
        <Footer />
    </>
    )
}

export default App
