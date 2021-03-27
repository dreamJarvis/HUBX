import React from "react";
import NewUsers from './NewUsers';
import CoursesBlog from "./CoursesBlog";
import EventLogs from "./EventLogs";
import TrailPeriod from "./TrialPeriod";

const UserTextualData = ()=>{
	return (
		<div className="user-text-data row">
			<div className="col m3">
				<NewUsers/>
			</div>
			<div className="col m3">
				<CoursesBlog/>
			</div>
			<div className="col m3">
				<EventLogs/>
			</div>
			<div className="col m3">
				<TrailPeriod/>
			</div>
		</div>
	);
}

export default UserTextualData;