import React from 'react'

 export const Resume = () => {
  return (
    <div className="relative text-center py-16 bg-black text-white">

    <div className="absolute inset-0 flex justify-center items-center opacity-10 text-9xl font-bold">
        Resume
    </div>

    <div className="relative z-10">
        <h1 className="text-5xl font-bold">Resume</h1>
        <p className="mt-4">My Resume...!!!</p>
    </div>

    <div className='grid grid-cols-2 gap-20 m-10 p-10 '>
    <div className='bg-slate-600 h-70 w-50 rounded-lg p-10 m-5 '>
        <h1 className='text-yellow-500 text-4xl font-mono font-bold'>June 2019- May 2023</h1>
        <h2 className='text-white text-2xl font-semibold'> Bachelor of Engineering in computer Science </h2>
        <h3 className="text-white font-serif font-medium ">Jerusalem College of Engineering</h3>
        <p className='text-white'>Under Graduate Degree.</p>
    </div>
    <div className='bg-slate-600 h-70 w-50 rounded-lg p-10 m-5 '>
        <h1 className='text-yellow-500 text-4xl font-mono font-bold'> June 2023 - Jan 2024</h1>
        <h2 className='text-white text-2xl font-semibold'> Trainee Engineer </h2>
        <h3 className="text-white font-serif font-medium ">Odyssey Technologies</h3>
        <p className='text-white'> worked as a Data Reasearcher .</p>
    </div>

    <div className='bg-slate-600 h-70 w-50 rounded-lg  p-10 m-5'>
        <h1 className='text-yellow-500 text-4xl font-mono font-bold'> June 2024 - Dec 2024</h1>
        <h2 className='text-white text-2xl font-semibold'>Full stack Devlopment Course</h2>
        <h3 className="text-white font-serif font-medium ">Why Tap</h3>
        <p className='text-white'> Post Graduate Degree.</p>
    </div>
    <div className='bg-slate-600 h-70 w-50 rounded-lg p-10 m-5 translate-x-1'>
        <h1 className='text-yellow-500 text-4xl font-mono font-bold'> June 2024 - Dec 2024</h1>
        <h2 className='text-white text-2xl font-semibold'>  MERN Stack Developer</h2>
        <h3 className="text-white font-serif font-medium ">Why Global Services</h3>
        <p className='text-white'>Intern</p>
    </div>
    </div>
</div>
  )
}

export default Resume