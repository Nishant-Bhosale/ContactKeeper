import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul
				style={{
					listStyle: "none",
					display: "flex",
					justifyContent: "space-between",
					padding: "0",
					width: "10rem",
				}}
			>
				<li>
					<Link to="/" style={{ color: "white" }}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" style={{ color: "white" }}>
						About
					</Link>
				</li>
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Contact Keeper",
	icon: "fas fa-id-card-alt",
};

export default Navbar;
