import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contacts/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, clearContacts } = contactContext;

	useEffect(() => {
		getContacts();
		clearContacts();
		//eslint-disable-next-line
	}, []);

	if (contacts.length === 0) {
		return <h4>Please add Contacts</h4>;
	}

	return (
		<React.Fragment>
			<TransitionGroup>
				{filtered !== null
					? filtered.map((contact) => {
							return (
								<CSSTransition
									classNames="item"
									key={contact._id}
									timeout={500}
								>
									<ContactItem contact={contact} />
								</CSSTransition>
							);
					  })
					: contacts.map((contact) => {
							return (
								<CSSTransition
									classNames="item"
									key={contact._id}
									timeout={500}
								>
									<ContactItem contact={contact} />
								</CSSTransition>
							);
					  })}
			</TransitionGroup>
		</React.Fragment>
	);
};

export default Contacts;
