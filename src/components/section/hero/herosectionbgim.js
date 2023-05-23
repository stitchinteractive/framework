import React from "react";
import "./herosectionbgim.css"; // Import the CSS file for the component
import imageSrc from "../../../images/icon.png";

const HeroSectionBgIm = ({ children, style }) => {
	return (
		<div className="image-container">
			<img src={imageSrc} className="center" />
			<div className="hero-section" style={style}>
				{children}
			</div>
		</div>
	);
};

export default HeroSectionBgIm;
