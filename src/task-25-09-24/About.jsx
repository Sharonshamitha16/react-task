import "./Navbar.css"
import img from "./Assets/woman2.png"
const About = () => {
    return (
        <div className="row bg-black flex justify-around ">
            {/* <div className="container"> */}
            <div className="col">
                <img src={img} alt="img" className="
                 object-cover" />
            </div>
            <div className="  col text-start my-1 ml-20 mb-1   justify-between  text-white">
                <div className="relative py-5">
                    <div className="absolute inset-0 flex   text-white opacity-10 text-9xl font-bold">About</div>
                    <div className=" relative z-10 "> <h1 className=" text-5xl  mb-6 text-white font-bold">About Me</h1></div>
                </div>
                <p className="text-md  text-white text-extrabold p-2">Passionate web developer with extensive hands-on experience in HTML, CSS, JavaScript,</p>
                <p className="text-md  text-white text-extrabold p-2"> and Bootstrap, MERN stack, Tailwind</p>

                <p className="text-md  text-white text-extrabold m-1">
                    <h4 className=" m-3">Name: <span className="text-gray-400">Sharon Shamitha S</span></h4>
                    <h4 className=" m-3"> Date of birth: <span className="text-gray-400">January 16, 2002</span></h4>
                    <h4 className=" m-3">Address: <span className="text-gray-400">Subakeerthaana Flats , Puzhuthivakkam , chennai </span></h4>
                    <h4 className=" m-3">Zip code: <span className="text-gray-400">600091</span></h4>
                    <h4 className=" m-3">Email:  <span className="text-gray-400">sharonshamitha16@gmail.com</span></h4>
                    <h4 className=" m-3">Phone: <span className="text-gray-400">9176813376</span></h4>
                </p>
                <h1 className="text-white"><span className="text-yellow-400">5  </span>Project complete</h1>
                <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full my-10 mr-5">Download CV</button>

            </div>
        </div>
        // </div>
    )
}
export default About