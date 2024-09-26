import React from 'react'
import img from './Assets/linkedin.png'
const LinkedIn = () => {
  return (
    <div>
          <div> 
        {/* <h1 className='justify-center items-center w-full h-screen text-white'>Github Link</h1> */}
        <a  href ="https://www.linkedin.com/in/sharon-shamitha-s-47a77b282/?originalSubdomain=in" target="_blank"> <img src={img} alt="" className='h-30 w-30 my-2' /></a>
    </div>
    </div>
  )
}

export default LinkedIn