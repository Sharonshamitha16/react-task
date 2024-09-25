import "./Navbar.css"
import img from  "./Assets/human1.png"
const Home =()=>{
    // const [imageSrc, setImageSrc] = useState("");
    return(
        <div className="row bg-black flex justify-between h-lvh ">
            <div className="col mx-150 ml-20 mt-20">
                <h6 className="text-amber-300 m-1 font-bold text-xl">
                    Hello!
                </h6>
                <h1 className="text-white text-7xl font-bold font-mono leading-relaxed">I'm  a<span className="text-amber-400"> Web Designer<br />
                       </span>based in India</h1>
                <button className="bg-yellow-500 text-black font-sans font-bold py-5  px-9 rounded-full  my-10 mr-5">Hire Me</button>
                <button className="bg-transparent-500 text-white font-bold py-5  px-9  border border-white-500 text-white-500 rounded-full ">My Works</button>
            </div>
            <div className="col   mr-20 mt-10">
                <img src={img} alt="img" />

            </div>
        </div>
    )
}
export  default Home