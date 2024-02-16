import React from 'react';
import './navbar.css'  ;
import Logo from '../imgs/Logo.png';
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  return (
   <section className='NavBarSection'>
<header className="header flex">
  <div className="logoDiv">
    <a href="#" className="logo">
     <img src={Logo}  style={{height:"70px"}}/>
    </a>
  </div>

 <div className='NavBar'>
  <ul className='navLists flex'>

   <li className='navItem'> 
    <a href="#" className="navLink">Home</a>
   </li>
  
   <li className='navItem'> 
    <a href="#" className="navLink">Our Services</a>
   </li>
  
   <li className='navItem'> 
    <a href="#" className="navLink">Booking</a>
   </li>
  
   <li className='navItem'> 
    <a href="#" className="navLink">Feed-Backs</a>
   </li>
 
   <li className='navItem'> 
    <a href="#" className="navLink">LogIn</a>
   </li>

    <button className='btn'>
     <a href="#" >Book Now !</a>
     </button>
  </ul>

  <div className="closeNavBar"> 
  <IoMdCloseCircle className='icon' />
  </div>
  </div>
 
 <div className="toggleNavbar">
 <TbGridDots className='icon' />

 </div>

</header>
   </section>
  )
}

export default Navbar