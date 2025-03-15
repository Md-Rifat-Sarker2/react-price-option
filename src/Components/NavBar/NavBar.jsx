import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/blog/:id", name: "Blog Detail", id: 5 }
    ];

    return (
        <nav>
            <div className='md:hidden' onClick={()=> setOpen(!open)}>
                {
                    open === true ? <RxCross2 className='text-2xl'></RxCross2>
                    : <RiMenu2Fill className='text-2xl '></RiMenu2Fill>
                }
                
            </div>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;