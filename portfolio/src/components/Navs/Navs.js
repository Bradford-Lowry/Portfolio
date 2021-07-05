import React from "react";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navs = (props) => {


 const location = useLocation();
 const { pathname } = location;
 const splitLoc = pathname.split("/");
 console.log(location);
 console.log(pathname);
 console.log(splitLoc[1]);

 return (
     <nav>

<ul>
    
<NavLink exact activeClassName="active" to='/'>
    <li className={ splitLoc[1] === "" ? "active" : "" }>home</li> 
    </NavLink>
<NavLink exact activeClassName="active" to='/skills'>
    <li className={ splitLoc[1] === "skills" ? "active" : "" }>skills</li> 
    </NavLink>
<NavLink exact activeClassName="active" to='/education'>
    <li className={ splitLoc[1] === "education" ? "active" : "" }>education</li> 
    </NavLink>
<NavLink exact activeClassName="active" to='/contact'>
    <li className={ splitLoc[1] === "" ? "contact" : "" }>contact</li> 
    </NavLink>
</ul>
</nav>
    )
}


export default Navs