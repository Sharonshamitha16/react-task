import React from 'react'
// import Navbar from './task-25-09-24/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './task-25-09-24/Home'
import About from './task-25-09-24/About'
import HomeIndex from './task-25-09-24/HomeIndex'
import PageNotFound from './task-25-09-24/PageNotFound'
const RouterEx = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<HomeIndex/>}>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/About" element={<About/>} />
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default RouterEx