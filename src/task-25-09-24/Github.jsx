import React from 'react'
import img from './Assets/github.png'

const Github = () => {
  return (
    <div> 
        {/* <h1 className='justify-center items-center w-full h-screen text-white'>Github Link</h1> */}
        <a  href ="https://github.com/Sharonshamitha16" target="_blank"> <img src={img} alt="" className='h-15 w-15 my-2' /></a>
    </div>
  )
}

export default Github