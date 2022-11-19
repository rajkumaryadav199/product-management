import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const nav = [
        {title: "Home", to: "/home"},
        {title: "Login", to: "/signin "},
        {title : "Signup", to : "/signup"} ,
     
    
    ];

  return (
    <div className='navbar'>
{/* {nav.map((e,i) =>(
    <div className="butnav">
        <Link key={i} to={e.to} style={{margin:"45px"}}>
        {e.title}
    </Link>
    </div>
    ))} */}

    <NavLink to="/home" className="butnav">Home</NavLink>
    <NavLink to="/signin" className="butnav">SignIp</NavLink>
    <NavLink to="/signup" className="butnav">SignUp</NavLink>
    </div>
  )
}

export default Navbar




// export default function Navbar() {
 
  
  
//   return (
//     <div className="navbar">
         
//     {nav.map((e,i) =>(
//     <div className="butnav">
//         <Link key={i} to={e.to} style={{margin:"45px"}}>
//         {e.title}
//     </Link>
//     </div>
//     ))}
    
// </div>
//   )
// }
