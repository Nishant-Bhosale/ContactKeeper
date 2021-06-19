import React, { useReducer } from "react";
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

	return (
		<authContext.Provider
			value={{
				token: state.token,
				user: state.user,
				error: state.error,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
