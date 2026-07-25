import React, { useState } from "react";
import { Outlet } from "react-router";
import TripNavBar from "./TripNavBar";

export default function SiteStruct(props) {
	const [alignNavbar, setAlignNavbar] = useState(null)

	return (
		<div>
			<h1>Trip Planner</h1>
			<div className="flex flex-row items-center gap-4" style={{display:'flex', flexDirection:'row'}}>
				<TripNavBar />
				{alignNavbar}
			</div>
			<Outlet context={{ setAlignNavbar }}/>
		</div>
	)
}