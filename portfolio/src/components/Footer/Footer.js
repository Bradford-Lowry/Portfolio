import React from "react";

const Footer = () => {

    return (
    <footer>

      <div id= { 'copyright' }>
      <p> &copy; BRAD 2021</p> 
          </div> 
          <div id= { 'social' }>
          <p id= "fb" className= {'soMeIcon fa-facebook'}></p>
          <p className={'soMeIcon fa-twitter'}></p>
          <p className={'soMeIcon fa-linkedin'}></p>
          </div>
    </footer>
);

}

export default Footer