//import { useState } from 'react';
import './Navs.css';
import { Link } from 'react-router-dom';

const Navs = (props) => {

 const handleNavClick = () => {
     console.log('poot')
 }
 
 return (
     <nav>
<ul onClick={ handleNavClick }>
    { props.title }
<Link to='/'>
    <li>home</li> 
    </Link>
<Link to='/skills'>
    <li>skills</li> 
    </Link>
<Link to='/education'>
    <li>education</li> 
    </Link>
<Link to='/contact'>
    <li>contact</li> 
    </Link>
</ul>
</nav>
    )
}


export default Navs