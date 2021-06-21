import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, logout } = authContext;

	const logoutUser = () => {
		logout();
	};
	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				{isAuthenticated ? (
					<li onClick={logoutUser}>
						<a href="#!" style={{ color: "white" }}>
							<i className="fas fa-sign-out-alt"></i>
							<span>Logout</span>
						</a>
					</li>
				) : (
					<Fragment>
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
					</Fragment>
				)}
				{/* <li>
					<Link to="/register" style={{ color: "white" }}>
						Register
					</Link>
				</li>
				<li>
					<Link to="/login" style={{ color: "white" }}>
						Login
					</Link>
				</li> */}
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
