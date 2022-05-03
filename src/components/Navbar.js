import React from "react";
import icon from "../images/icon.svg";

export default function Navbar() {
	return (
		<nav>
			<img className="nav-icon" src={icon} alt="Earth icon" />
			<h4>My Travel Journal</h4>
		</nav>
	);
}
