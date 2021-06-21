import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import ContactState from "./context/contacts/ContactState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/alerts";
import setAuthToken from "./utils/setAuthToken";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import React, { Fragment } from "react";
import "./App.css";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							<div className="container">
								<Alerts />
								<Switch>
									<PrivateRoute exact path="/" component={Home} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};

export default App;
