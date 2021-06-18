import React from "react";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContacFilter";
import Contacts from "../contacts/Contacts";

const Home = () => {
	return (
		<div className="grid-2">
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
