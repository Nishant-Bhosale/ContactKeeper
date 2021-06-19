import React, { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import authContext from "./authContext";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		user: null,
		error: null,
		isAuthenticated: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const registerUser = async (userData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/users", userData, config);
			dispatch({ type: REGISTER_SUCCESS, payload: res.data });
		} catch (error) {
			dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
		}
	};

	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	return (
		<authContext.Provider
			value={{
				token: state.token,
				user: state.user,
				error: state.error,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				registerUser,
				clearErrors,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
