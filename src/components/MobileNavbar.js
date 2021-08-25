import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Fade as Hamburger} from 'hamburger-react';
function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  function getStyle() {
    if(!isOpen) {
      return {
        display: "none"
      }
    } else {
      // the rest of the styling is in scss/style.scss
      return {
        display: "flex"
      }
    }
  }

  
  return(
    <nav className="mNavbar">
      {/* moblie navbar */}
      <div className="mainNav">
        <div className="mNameAndSocialLinks">
          <div className="mNameContainer">
            <h3>Sergei Poliakov</h3>
          </div>
          <div className="mSocialLinks">
				  		<dl>
				  			<dt><SocialIcon url="https://www.linkedin.com/in/sergei-poliakov-6b2b52213/"
			    													style={{height: 30, width: 30}}/></dt>
				  			<dt><SocialIcon url="https://github.com/sergei-p"
			    												style={{height: 30, width: 30}}/></dt>
				  		</dl>
				  </div>
        </div>
        <div className="navMenuButton">
         <Hamburger direction={"left"} size={20}toggled={isOpen} toggle={setOpen}/>
        </div>
      </div>

      {/* mobile dropdown nav menu */}
      <div style={getStyle()} className="dropDownNav">
        <dl>
          <dt><a href="#aboutMe">About Me</a></dt>
          <dt><a href="#experience">Experience</a></dt>
          <dt><a href="#projects">Projects</a></dt>
          <dt><a href="#contact">Contact</a></dt>
        </dl>
      </div>
    </nav>
  )
}

export default MobileNavbar;