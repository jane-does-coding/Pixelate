import React from "react";
import DashboardFirstCol from "./DashboardFirstCol";
import DashboardSecondCol from "./DashboardSecondCol";
import DashboardThirdCol from "./DashboardThirdCol";

const Dashboard = () => {
	return (
		<div className="w-full flex">
			<div className="w-4/20">
				<DashboardFirstCol />
			</div>
			<div className="w-11/20 bg-red-100/0">
				<DashboardSecondCol />
			</div>
			<div className="w-5/20 bg-blue-100/0">
				<DashboardThirdCol />
			</div>
		</div>
	);
};

export default Dashboard;
