import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Data = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return <header>{data.site.siteMetadata.title}</header>;
};

export default Data;
