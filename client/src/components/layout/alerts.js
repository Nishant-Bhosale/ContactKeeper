import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		<div>
			{alertContext.alerts.length > 0 &&
				alertContext.alerts.map((alert) => {
					return (
						<div className={`alert alert-${alert.type}`}>
							<i className="fas fa-info-circle" />
							{alert.msg}
						</div>
					);
				})}
		</div>
	);
};

export default Alerts;
