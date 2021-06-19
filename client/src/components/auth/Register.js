import React, { useState, useContext, useEffect } from "react";
import alertContext from "../../context/alert/alertContext";
import authContext from "../../context/auth/authContext";

const Register = (props) => {
	const AlertContext = useContext(alertContext);
	const AuthContext = useContext(authContext);

	const { registerUser, error, clearErrors, isAuthenticated } = AuthContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}

		if (error) {
			AlertContext.setAlert(error, "danger");
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = user;

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			AlertContext.setAlert("Please enter all fields", "danger");
		} else if (password !== password2) {
			AlertContext.setAlert("Passwords do not match", "danger");
		} else {
			registerUser({ name, email, password });
		}
	};

	return (
		<div>
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						value={name}
						name="name"
						onChange={onChangeHandler}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						value={email}
						name="email"
						onChange={onChangeHandler}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						value={password}
						name="password"
						onChange={onChangeHandler}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="text"
						value={password2}
						name="password2"
						onChange={onChangeHandler}
						minLength="6"
						required
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Register;
