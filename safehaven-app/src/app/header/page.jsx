"use client"
import Link from "next/link"
import React, {useState} from "react";
import { useEffect } from "react";


export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => setIsOpen(!isOpen);
    
    

    useEffect(() => {
        isOpen? document.getElementById("side-menu").style.width = "280px" : document.getElementById("side-menu").style.width = "0px";
    }, [toggleSideBar])

    
  
    return(
    
    <header className="header">

        {/*FULLSCREEN HEADER*/}

     <nav className="nav">
       <Link href="/" className="nav-logo">
         <img src="" alt= "logo" />
       </Link>

       <div className="nav-menu" id="nav-menu">
         <ul className="nav-list">
           <li className="nav-item">
             <Link href="/" className="nav-link">
               Home
             </Link>
           </li>
           <li className="nav-item">
             <Link href="/aboutus" className="nav-link">
               About Us
             </Link>
           </li>
           <li className="nav-item">
             <Link href ="" className="nav-link">
               Services
             </Link>
           </li>
           <li className="nav-item">
             <Link href="" className="nav-link">
               Resources
             </Link>
           </li>
           <li className="nav-item">
             <Link href="/community" className="nav-link">
               Community
             </Link>
           </li>
           <li className="nav-item">
             <Link href="" className="nav-link">
               Contact Us
             </Link>
           </li>
           <li className="nav-item">
             <Link href="/homepage" className="nav-link nav-btn">
               Sign In
             </Link>
           </li>
           <li className="nav-item">
             <Link href="" className="nav-link nav-btn">
               Sign Up
             </Link>
           </li>
         </ul>
         
       </div>

       {/*SMALL SCREEN HEADER*/}

       <button className="my-tog-btn" onClick={() => toggleSideBar()}>
                &#9776;
            </button>
       <div className="side-menu" id="side-menu">
     
         <ul className="side-list">
           <li className="side-item">
             <Link href="/" className="side-link">
               Home
             </Link>
           </li>
           <li className="side-item">
             <Link href="/aboutus" className="side-link">
               About Us
             </Link>
           </li>
           <li className="side-item">
             <Link href ="" className="side-link">
               Services
             </Link>
           </li>
           <li className="side-item">
             <Link href="" className="side-link">
               Resources
             </Link>
           </li>
           <li className="side-item">
             <Link href="/community" className="side-link">
               Community
             </Link>
           </li>
           <li className="side-item">
             <Link href="" className="side-link">
               Contact Us
             </Link>
           </li>
           <li className="side-item">
             <Link href="/homepage" className="side-link side-btn">
               Sign In
             </Link>
           </li>
           <li className="side-item">
             <Link href="" className="side-link side-btn">
               Sign Up
             </Link>
           </li>

         </ul>
         
       </div>

       
     </nav>
   </header>
    
)
}