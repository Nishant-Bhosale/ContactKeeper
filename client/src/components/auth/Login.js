import React, { useState } from "react";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	const onChangeHandler = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log("Login ");
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
						onChange={onChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						value={password}
						name="password"
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
