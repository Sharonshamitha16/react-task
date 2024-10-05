import React from 'react'
import MapUI from './MapUI'
import {Routes,Route} from 'react-router-dom'
const RoutersUi = () => {
  return (
   <Routes>
    <Route path = "/" element ={<MapUI/>}/>
   </Routes>
  )
}

export default RoutersUi