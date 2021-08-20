import React from 'react';

function Header() {
  
  return(
    <header>
      <div className="imageContainer">
        <img src="https://raw.githubusercontent.com/chuckgroom/onepage-bio/master/img/profile.png" alt="My Image"/>
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