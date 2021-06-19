import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ContactState from "./context/contacts/ContactState";
import "./App.css";

const App = () => {
	return (
		<ContactState>
			<Router>
				<Fragment>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</ContactState>
	);
};

export default App;
