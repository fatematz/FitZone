import React, {useState} from 'react';
import Link from "./Link";
import {Menu, X} from "lucide-react";



const navbar = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Profile", path: "/profile" },
];

const Navbar=() => {
    
    const [open, setOpen]=useState(true)
    
    const linked = navbar.map(nav => <Link key={nav.id} nav ={nav} >  </Link>)

    return (
        <nav className="flex justify-between items-center mx-7.5 mt-10">
            <span onClick={() => setOpen(!open)} className="flex gap-5">      {/* click korle open er man palte jabe true hoile false hobe r false hoile true */}
                
                {/* <Menu className="md:hidden"></Menu> */}
                <span className="flex justify-center items-center gap-5">
                {open? <Menu className="md:hidden"></Menu>:<X className="md:hidden"></X>}
                <ul className={`md:hidden absolute duration-400  bg-amber-600 p-4 ${open ? "-mt-90" : "mt-60"} ml-7.5`}>
                    {
                        linked
                    }
                </ul>
                    <h3 className="text-[20px] md:text-[40px] font-bold text-purple-600 "> FitZone </h3>
                    </span>
            </span>
            <ul className=" gap-5 hidden md:flex text-purple-600 ">
                {
                    linked
                }
            </ul>
            <button className="btn  md:text-xl bg-black text-white hover:bg-amber-600 rounded-3xl">Sign In</button>

            {/* <ul className="flex gap-[30px]">
                {
                    navbar.map(nav => <li key={nav.id} > <a href={nav.path}>{nav.name}</a>  </li>)
                }
            </ul> */}
        </nav>
    );
};

export default Navbar;