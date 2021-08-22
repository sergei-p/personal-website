import React from 'react';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
	
	return(
    // <div>
    //     <nav>
    //     <h1 className="logo">My Site</h1>
		// 		<ul>
		// 			<li><SocialIcon url="https://www.linkedin.com/in/sergei-poliakov-6b2b52213/"/></li>
		// 			<li><SocialIcon url="https://github.com/sergei-p"/></li>
		// 		</ul>
		// 		</nav>
    // </div>
		
		<nav className="navbar">
			{/* <div className="navContainer"> */}
				<div className="nameContainer">
					<h3>Sergei Poliakov</h3>
				</div>
				<div className="socialLinks">
					<ul>
						<li><SocialIcon url="https://www.linkedin.com/in/sergei-poliakov-6b2b52213/"
														style={{height: 30, width: 30}}/></li>
						<li><SocialIcon url="https://github.com/sergei-p"
														style={{height: 30, width: 30}}/></li>
					</ul>
				</div>
				<div className="navLinks">
					<ul>
						<li><a href="">About Me</a></li>
						<li><a href="">Experience</a></li>
						<li><a href="">Projects</a></li>
						<li><a href="">Contact</a></li>
					</ul>
				</div>
			{/* </div> */}
		</nav>
	
	);

}

export default NavBar;