import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
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
				<li>
					<Link to="/register" style={{ color: "white" }}>
						Register
					</Link>
				</li>
				<li>
					<Link to="/login" style={{ color: "white" }}>
						Login
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
