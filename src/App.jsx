import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from "./SharedLayout"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Models from "./Pages/Models"
import Team from "./Pages/Team"
import Testimonials from "./Pages/Testimonials"

function App(props) {
    return (
        <Routes>
            <Route element={<SharedLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/models" element={<Models />}></Route>
                <Route path="/testimonials" element={<Testimonials />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Route>
        </Routes>
    );
}

export default App;