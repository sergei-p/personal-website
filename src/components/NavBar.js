import React from 'react';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
	return(		
		<nav className="navbar">
				
				<div className="nameAndSocialLinks">
					<div className="nameContainer">
						<h2>Sergei Poliakov</h2>
					</div>
					<div className="socialLinks">
						<dl>
							<dt><SocialIcon url="https://www.linkedin.com/in/sergei-poliakov-6b2b52213/"
			  													style={{height: 30, width: 30}}/></dt>
							<dt><SocialIcon url="https://github.com/sergei-p"
			  												style={{height: 30, width: 30}}/></dt>
						</dl>
					</div>
				</div>

				<div className="navLinks">
	        <dl>
          	<dt><a href="#aboutMe">About Me</a></dt>
          	<dt><a href="#experience">Experience</a></dt>
          	<dt><a href="#projects">Projects</a></dt>
          	<dt><a href="#contact">Contact</a></dt>
        	</dl>
				</div>
		</nav>
	
	);

}

export default NavBar;