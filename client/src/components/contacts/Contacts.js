import React, { useContext } from "react";
import ContactContext from "../../context/contacts/contactContext";
import ContactItem from "./ContactItem";
const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;
	return (
		<React.Fragment>
			{contacts.map((contact) => {
				return <ContactItem key={contact.id} contact={contact} />;
			})}
		</React.Fragment>
	);
};

export default Contacts;
