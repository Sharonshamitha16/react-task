import Myimage from "./Assets/logo2.png"
import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="Navbar-style bg-black sticky active:text-yellow-600 sticky top-0">
      <div className="container ">
        <ul className="bg-grey text-white flex justify-evenly ">

        <Link to={"/nav"}><img src={Myimage} alt="" height={20} width={200} className="mb-1" />
        </Link>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
            <Link className="px-4 py-2 mx-2 rounded text-white" to={"/nav"}> Home
            </Link></li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
            <Link className="px-4 py-2 mx-2  rounded text-white" to={"/nav/About"}>
              About </Link></li>
          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
          <Link className="px-4 py-2 mx-2  rounded text-white" to={"/nav/Resume"}>Resume</Link></li>


          <li className="pt-7  text-2l underline-expand text-white-10 font-semibold active:text-yellow-600 ">
            <Link className="px-4 py-2 mx-2  rounded text-white" to={"/nav/Contact/sideBar"}>Contact</Link></li>
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
