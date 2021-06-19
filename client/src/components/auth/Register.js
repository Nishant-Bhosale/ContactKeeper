import React, { useState } from "react";

const Register = () => {
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
		console.log("Register ");
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
					/>
				</div>
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
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="text"
						value={password2}
						name="password2"
						onChange={onChangeHandler}
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
