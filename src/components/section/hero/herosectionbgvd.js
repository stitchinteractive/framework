import React from "react";
import "./herosectionbgvd.css"; // Import the CSS file for the component
import videoSrc from "../../../images/sample.mp4";

const HeroSectionBgVd = ({ children, style }) => {
	return (
		<div className="video-container">
			<video id="background-video" autoPlay loop muted poster={videoSrc}>
				<source src={videoSrc} type="video/mp4" />
			</video>
			<div className="hero-section" style={style}>
				{children}
			</div>
		</div>
	);
};

export default HeroSectionBgVd;
