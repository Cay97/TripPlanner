import React, { useEffect, useRef, useState } from "react"
import { Map, Marker, Popup} from 'react-map-gl/maplibre';
import { Button, Form,} from "react-bootstrap";
import 'maplibre-gl/dist/maplibre-gl.css';


export default function PlanningMap(props){
	const mapRef = useRef()
	const [popupData, setPopupData] = useState(null)
	const [mapState, setMapState] = useState({
		longitude: -89.4,
		latitude: 43.1,
		zoom: 4
	})
	const [photos, setPhotos] = useState([])
	
	useEffect(() => {
			fetch('https://bdlwqkegeqwfsdmexsvc.supabase.co/rest/v1/photos?apikey=sb_publishable_6bwTnT8jQ_8D6yFQF8Nlcw_Ku1dLPAA',{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}).then(res => res.json()).then(json => {
				console.log(json)
				setPhotos(json)
			})
		},[])

	let photoList = photos

	function CheckBounds(){
		if (mapRef.current){
			const bounds = mapRef.current.getMap().getBounds();
			const box = {
				north: bounds.getNorth(),
				south: bounds.getSouth(),
				east: bounds.getEast(),
				west: bounds.getWest()
			};
			console.log(box)
		}

	}

	

	return(
		<div style={{ height: '85vh', width: '100%' }}>
			<Map
				ref={mapRef}
				{...mapState}
				onMove={evt => {
					CheckBounds()
					setMapState(evt.viewState)}}
				mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
			>
				{photoList.map(photo => <Marker key={photo.id} longitude={photo.longitude} 
				latitude={photo.latitude} anchor="center" onClick={e => {
					e.originalEvent.stopPropagation();
					setPopupData(photo)
				}}></Marker>)}
				{popupData && (
					<Popup
						anchor="center"
						longitude={Number(popupData.longitude)}
						latitude={Number(popupData.latitude)}
						onClose={() => setPopupData(null)}
					>
						<div>
							<h3 style={{textAlign:'center'}}>{popupData.name}</h3>
							<p><strong>Latitude: </strong>{popupData.latitude}</p>
							<p><strong>Longitude: </strong> {popupData.longitude}</p>
							<h4>Location Tags:</h4>
							<ul> 
								{popupData.location.map(loc => (
									<li>
										{loc}
									</li>
								))}
							</ul>
							<h4>Tags:</h4>
							<ul> 
								{popupData.tags.map(tag => (
									<li>
										{tag}
									</li>
								))}
							</ul>
							
						</div>
						<img width="100%" src={popupData.photo_url}/>
					</Popup>
				)}
			</Map>
		</div>
	)
}
