import React, { useReducer } from "react";
import axios from "axios";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	CLEAR_CONTACTS,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [],
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	const getContacts = async () => {
		try {
			const res = await axios.get("/api/contacts");
			dispatch({ type: GET_CONTACTS, payload: res.data });
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error });
		}
	};
	const addContact = async (contact) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/contacts", contact, config);
			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error });
		}
	};

	const deleteContact = async (id) => {
		try {
			await axios.delete(`/api/contacts/${id}`);
			dispatch({ type: DELETE_CONTACT, payload: id });
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error });
		}
	};

	const updateContact = async (contact) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.put(
				`/api/contacts/${contact._id}`,
				contact,
				config,
			);
			dispatch({ type: UPDATE_CONTACT, payload: res.data });
		} catch (error) {
			dispatch({ type: CONTACT_ERROR, payload: error });
		}
	};

	const setCurrentContact = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	const clearCurrentContact = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS });
	};

	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				getContacts,
				addContact,
				deleteContact,
				updateContact,
				setCurrentContact,
				clearCurrentContact,
				filterContacts,
				clearContacts,
				clearFilter,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
