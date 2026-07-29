import React, { useState } from "react";
import { Outlet } from "react-router";
import TripNavBar from "./TripNavBar";

export default function SiteStruct(props) {
	const [alignNavbar, setAlignNavbar] = useState(null)

	return (
		<div>
			<h1>Trip Planner</h1>
			<div style={{display:'flex', flexDirection:'row'}}>
				<TripNavBar />
				<div style={{marginLeft:'auto'}}>{alignNavbar}</div>
			</div>
			<Outlet context={{ setAlignNavbar }}/>
		</div>
	)
}