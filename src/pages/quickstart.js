import * as React from "react";
import { Button, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import HeroSectionBgIm from "../components/section/hero/herosectionbgim.js";
import HeroSectionBgVd from "../components/section/hero/herosectionbgvd.js";
import BreadCrumbs from "../components/static/navigation/breadcrumbs/breadcrumbs.js";
import BackToTop from "../components/static/navigation/buttons/buttons.js";
import Data from "../components/static/data/data.js";
import HalfHalfSection from "../components/static/layout/columns/halfhalfsection.js";

import videoSrc from "../images/sample.mp4";

const darkTheme = createTheme({
	palette: {
		mode: "light",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Data />
			<CssBaseline />
			<Container maxWidth="fixed">
				<main>This app is using the dark mode</main>
				<Button variant="contained" color="secondary">
					This is Amazing
				</Button>
				<HeroSectionBgIm style={{ height: "75vh" }}></HeroSectionBgIm>
				<HeroSectionBgVd style={{ height: "75vh" }}>hello</HeroSectionBgVd>
			</Container>
			<HalfHalfSection>
				{/* Your left-side content */}
				<div>
					<h1>Left Content</h1>
					{/* Other elements */}
				</div>
				{/* Your image */}
				<video width="100%" height="100%" autoplay muted>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</HalfHalfSection>
			<Container maxWidth="fixed">
				<BackToTop />
			</Container>
		</ThemeProvider>
	);
}

export default App;
