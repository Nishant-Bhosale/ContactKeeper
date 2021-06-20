import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;
	const { login, error, clearErrors, isAuthenticated } = authContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}

		if (error) {
			setAlert(error, "danger");
			clearErrors();
		}
		//eslint-disable-next-line
	}, [props.history, isAuthenticated, error]);

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<div>
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						value={email}
						name="email"
						required
						onChange={onChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						value={password}
						name="password"
						required
						onChange={onChangeHandler}
					/>
				</div>

				<input
					type="submit"
					value="Login"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Login;
