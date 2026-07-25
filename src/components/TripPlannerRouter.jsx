import { HashRouter, Route, Routes } from "react-router-dom";

//Pages
import PhotoGrid from "./pages/PhotoGrid"
import PlanningMap from "./pages/PlanningMap"
import SiteStruct from "./SiteStruct"

export default function TripRouter(){
	return <HashRouter>
		<Routes>
			<Route path="/" element={<SiteStruct />}>
				<Route index element={<PlanningMap />}/>
				<Route path="Photo-Grid" element={<PhotoGrid />}/>
			</Route>
		</Routes>
	</HashRouter>
}