import React from 'react'
// import Navbar from './task-25-09-24/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './task-25-09-24/Home'
import About from './task-25-09-24/About'
import HomeIndex from './task-25-09-24/HomeIndex'
import PageNotFound from './task-25-09-24/PageNotFound'
import Contact from './task-25-09-24/Contact'
import Resume from './task-25-09-24/Resume'
import Github from './task-25-09-24/Github'
import LinkedIn from './task-25-09-24/LinkedIn'
import Whatsapp from './task-25-09-24/Whatsapp'
import Gmail from './task-25-09-24/Gmail'
const RouterEx = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<HomeIndex />}>
                    <Route index element={<Home />} />
                    <Route path="/nav/About" element={<About />} />
                    <Route path="/nav/Contact/sideBar/" element={<Contact />}>
                        <Route path="/nav/Contact/sideBar/Github" element={<Github />} />
                        <Route path="/nav/Contact/sideBar/LinkedIn" element={<LinkedIn />} />
                        <Route path="/nav/Contact/sideBar/Whatsapp" element={<Whatsapp />} />
                        <Route path="/nav/Contact/sideBar/Gmail" element={<Gmail />} />
                    </Route>
                    <Route path="/nav/Resume" element={<Resume />} />

                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RouterEx;
