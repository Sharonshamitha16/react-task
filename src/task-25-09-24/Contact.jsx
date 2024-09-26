import React from 'react'
import Contactimg from './Assets/contactimg2.png'
import { Link, Outlet } from 'react-router-dom'
const Contact = () => {
    return (
        <div className='flex bg-black'>
            <SideBar />
            {/* <div className="relative  justify-center text-center py-16 bg-black text-white">

                <div className="absolute  ml-20 my-20  mx-10 inset-0 flex justify-start text-center opacity-10 text-9xl font-bold">
                    Contact
                </div>

                <div className="relative z-10">
                    <h1 className="text-5xl   justify-center text-center font-bold">Contact </h1>
                    <p className="">To contact me ..!!</p>
                </div>
            </div> */}
            
            <Outlet />
            <div className='  grid  grid-cols-2 gap-1 justify-evenly'>
                <div>
                    <h1 className="text-5xl text-center  text-white font-bold">Contact </h1>
                    <img src={Contactimg} alt="img" className='bg-black my-20 h-50 w-70' />
                  
                </div>

                <div>

                    <form action="" className='bg-slate-800 flex flex-col m-20 my-10 p-10 rounded-md w-96'>
                        <input type="text" name="name" id="" placeholder='Your Name' className='my-3 mx-2 py-4 px-2 pl-5   rounded-lg' />
                        <input type="Number" name="Number" id="" placeholder='Your Number' className='my-3 mx-2 py-4 px-2 pl-5 rounded-lg' />
                        <input type="text" name="name" id="" placeholder='subject' className='my-3 mx-2 py-4 px-2 pl-5 rounded-lg' />
                        <textarea name="name" id="" placeholder='message' className='my-3 mx-2 py-4 px-2 pl-5    rounded-lg' />
                        <button type='submit' className='bg-yellow-400 rounded-3xl  m-5 p-5 text-white' >Send Message</button>
                    </form>
                </div>
                <div></div>

            </div>
        </div>

    )
}

export default Contact


export const SideBar = () => {
    return (
        <div className=' bg-slate-800'>
            <aside className='w-50 h-screen '>
                <ul><li className='justify-start ml-5 text-2xl font-bold font-sans p-5' > <Link to={"/nav/Contact/sideBar/Github"}>Github</Link></li>
                    <li className='justify-start ml-5 text-2xl font-bold font-sans p-5' ><Link to={"/nav/Contact/sideBar/LinkedIn"}>LinkedIn</Link></li>
                    <li className='justify-start ml-5  text-2xl font-bold font-sans p-5' ><Link to={"/nav/Contact/sideBar/Whatsapp"}>Whatsapp</Link></li>
                    <li className='justify-start ml-5 text-2xl  font-bold font-sans p-5'><Link to={"/nav/Contact/sideBar/Gmail"}>Gmail</Link></li>
                </ul>
            </aside>
        </div>
    )
}