import React from 'react';
import myImg from "../img/myProfile.png";

function Header() {
  
  return(
    <header>
      <div className="imageContainer">
        {/* <img src="https://raw.githubusercontent.com/chuckgroom/onepage-bio/master/img/profile.png"/> */}
        <img src={myImg} alt="image"/>
      </div>
      <div className="nameContainer">
        <h2>Sergei Poliakov</h2>
      </div>
      <div className="titleContainer">
        <h3>Software Engineer</h3>
      </div>
    </header>
  )
}

export default Header;