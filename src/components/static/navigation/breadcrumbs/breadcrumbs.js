import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import "./breadcrumbs.css"; // Import the CSS file for the component

const BreadCrumbs = () => {
	const { crumbs } = useBreadcrumb({
		location: window.location,
		crumbLabel: "Home", // Set a default crumb label for the home page
	});

	return (
		<Breadcrumbs aria-label="breadcrumb">
			{crumbs.map((crumb, index) => (
				<Link key={index} underline="hover" color="inherit" href={crumb.pathname}>
					{crumb.crumbLabel}
				</Link>
			))}
			<Typography color="text.primary">{crumbs[crumbs.length - 1].crumbLabel}</Typography>
		</Breadcrumbs>
	);
};


export default BreadCrumbs;
