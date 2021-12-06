import {React, useEffect, useState} from 'react'
import {FaAlignJustify} from "react-icons/fa";
import SidebarItem from './SidebarItem';

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";



function Sidebar({setPage}) {

    const pages = [
        /*
            {
                route: "/example",
                name: "Example Page"
            }
        */
       {
           route: <Home/>,
           name: "Home",
           pos: ""
       },
       {
           route: <About/>,
           name: "About Me",
           pos:""
       },
       {
           route: <Contact/>,
           name: "Contact",
           pos: "last"
       }
    ]
    

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div class="p-3 absolute cursor-pointer" onMouseLeave={() => setShowSidebar(false)}>
            <div class="" onMouseEnter={() => setShowSidebar(true)}>
                <FaAlignJustify size={30}/>
            </div>
            
            {showSidebar &&
                <div class="border-2 rounded shadow-md border-mg-dark-blue ">
                    {pages.map(item => (
                        <SidebarItem 
                            name={item.name}
                            route={item.route}
                            pos={item.pos}
                            setPage={setPage}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default Sidebar





