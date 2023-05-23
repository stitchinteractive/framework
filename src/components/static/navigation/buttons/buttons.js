import React from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Fab size="medium" color="secondary" aria-label="add" onClick={scrollToTop}>
			<ArrowUpwardIcon />
		</Fab>
	);
};

export default BackToTop;
