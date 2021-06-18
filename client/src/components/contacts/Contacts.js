import React, { useContext } from "react";
import ContactContext from "../../context/contacts/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (!contacts) {
		return <h4>Please add Contacts</h4>;
	}

	return (
		<React.Fragment>
			<TransitionGroup>
				{filtered !== null
					? filtered.map((contact) => {
							return (
								<CSSTransition classNames="item" key={contact.id} timeout={500}>
									<ContactItem contact={contact} />
								</CSSTransition>
							);
					  })
					: contacts.map((contact) => {
							return (
								<CSSTransition classNames="item" key={contact.id} timeout={500}>
									<ContactItem contact={contact} />
								</CSSTransition>
							);
					  })}
			</TransitionGroup>
		</React.Fragment>
	);
};

export default Contacts;
