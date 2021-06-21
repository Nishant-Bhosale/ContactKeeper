import React, { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import authContext from "./authContext";
import setAuthToken from "../../utils/setAuthToken";
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

	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get("/api/auth");
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	const registerUser = async (userData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/users", userData, config);
			dispatch({ type: REGISTER_SUCCESS, payload: res.data });
			loadUser();
		} catch (error) {
			dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
		}
	};

	const login = async (userData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/auth", userData, config);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
			loadUser();
		} catch (error) {
			dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
		}
	};

	const logout = () => {
		dispatch({ type: LOGOUT });
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
				loadUser,
				login,
				logout,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
