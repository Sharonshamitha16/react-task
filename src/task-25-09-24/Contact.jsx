import React from 'react'
import { contactimg } from './Assets/contactimg.jpg'
const Contact = () => {
    return (
        <div>
            <div className="relative text-center py-16 bg-black text-white">

                <div className="absolute inset-0 flex justify-center items-center opacity-10 text-9xl font-bold">
                    Contact
                </div>

                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">Contact Me</h1>
                    <p className="mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <img src="{contactimg}" alt="img" />
                </div>

                <div>
                <form action="">
                    <input type="text" name="name" id="" placeholder='Your Name' className='my-3 mx-2 py-4 px-2 ' />

                </form>
                </div>
                <div></div>

            </div>
        </div>

    )
}

export default Contact