import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACTS,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter((contact) => {
					return contact._id !== action.payload;
				}),
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) => {
					return contact._id === action.payload._id ? action.payload : contact;
				}),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter((contact) => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return contact.name.match(regex) || contact.email.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case CONTACT_ERROR:
			console.log(action.payload);
			return {
				...state,
				error: action.payload,
			};
		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: [],
				filtered: null,
				error: null,
				current: null,
			};
		default:
			return state;
	}
};
