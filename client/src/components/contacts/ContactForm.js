import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current, clearCurrentContact, updateContact, contacts } =
		contactContext;

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal",
	});

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: "",
				email: "",
				phone: "",
				type: "personal",
			});
		}
	}, [contactContext]);

	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}

		clearAll();
	};

	const clearAll = () => {
		clearCurrentContact();
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<h2 className="text-primary">
				{current ? "Update Contact" : "Add Contact"}
			</h2>
			<input
				type="text"
				placeholder="Name"
				value={name}
				name="name"
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				name="email"
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Phone"
				value={phone}
				name="phone"
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				value="personal"
				checked={type === "personal"}
				name="type"
				onChange={onChange}
			/>{" "}
			Personal{" "}
			<input
				type="radio"
				value="professional"
				checked={type === "professional"}
				name="type"
				onChange={onChange}
			/>{" "}
			Professional
			<div>
				<input
					type="submit"
					value={current ? "Update Contact" : "Add Contact"}
					className="btn btn-primary"
				/>
			</div>
			{current ? (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						Clear
					</button>
				</div>
			) : null}
		</form>
	);
};

export default ContactForm;
