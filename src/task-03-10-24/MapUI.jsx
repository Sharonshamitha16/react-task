import React from 'react'
import img1 from '../task-03-10-24/Assets/Credit-Card.webp'
import img2 from './Assets/Bulb.webp'
import img3 from './Assets/Puzzle-01.webp'
import img4 from './Assets/Work-Process.webp'
const MapUI = () => {

    const data = [
        {
            _id: 1,
            title: "Zero-risk",
            description: "Pay 100% upfront and put us to the test! If within 20 days we don't hit the right note, claim a 100% refund. No ifs, no buts, just your trust in our commitment.",
            img: img1
        },
        {
            _id: 2,
            title: "Tailored ad strategy",
            description: "Your business isn't cookie-cutter, and neither are our strategies. At Profitcast, it's personalized perfection, always!",
            img: img2
        },
        {
            _id: 3,
            title: "Maximized ROI",
            description: "Every penny you invest is optimized with precision, ensuring maximum returns with Profitcast's expertise.",
            img: img3
        },
        {
            _id: 4,
            title: "Feedback focused",
            description: "We listen, adapt, and evolve, always keeping your feedback at the forefront. With Profitcast, it's a collaborative crescendo!",
            img: img4
        },

    ]

    return (
        <div className='container mx-auto bg-slate-100 p-10 m-10 rounded-md'>
            <div className='flex flex-col gap-2'>
                <h1 className='flex justify-center text-2xl font-bold'>Why work with Profitcast? 💡🏆</h1>
                <h4 className='flex justify-center'>Epic results, zero fluff.</h4>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 '>

                {data.map(({ _id, title, description, img }, index) => (
                    <div className='rounded-md m-2  bg-slate-300 p-5 '>
                        <div key={_id} >
                            <div className='grid grid-cols-2'> 
                                <img className='w-20 h-20' src={img} alt="img" />
                                <div><h1>Title: {title}</h1>
                                    <h1>description: {description}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
            <div className='flex justify-center items-center'>
                <button className=" flex justify-center items-center p-2 m-10  bg-orange-600 rounded-md shadow-black ">Contact Us</button>
            </div>
        </div>
    )
}

export default MapUI