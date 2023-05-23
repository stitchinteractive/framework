import React from "react";
import "./HalfHalfSection.css"; // Import the CSS file for the component

const HalfHalfSection = ({ children }) => {
	return (
		<section className="section">
			<div className="left-content">{children[0]}</div>
			<div className="right-content">{children[1]}</div>
		</section>
	);
};

export default HalfHalfSection;
