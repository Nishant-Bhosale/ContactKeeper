import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);

	const {
		deleteContact,
		updateContact,
		setCurrentContact,
		clearCurrentContact,
	} = contactContext;

	const { name, id, email, phone, type } = contact;

	const onDeleteHandler = () => {
		clearCurrentContact();
		deleteContact(id);
	};

	const onUpdateHandler = () => {
		setCurrentContact(contact);
	};
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name}{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge" +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && (
					<li>
						<i className="fas fa-envelope-open" />
						{email}
					</li>
				)}
				{phone && (
					<li>
						<i className="fas fa-phone" />
						{phone}
					</li>
				)}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm" onClick={onUpdateHandler}>
					Edit
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDeleteHandler}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
export default ContactItem;
