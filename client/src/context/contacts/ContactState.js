import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Nishant Bhosale",
				email: "nishantbhosale244@gmail.com",
				phone: "7058528287",
				type: "professional",
			},
			{
				id: 2,
				name: "Pooja Bhosale",
				email: "poojabhosale244@gmail.com",
				phone: "1234567890",
				type: "personal",
			},
			{
				id: 3,
				name: "Harshad Bhosale",
				email: "harshadbhosale244@gmail.com",
				phone: "3333333333",
				type: "personal",
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
