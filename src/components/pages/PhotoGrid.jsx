import React, { useEffect, useState } from "react"
import { Button, Container, Row, Col, Modal} from "react-bootstrap";
import PhotoCard from "../PhotoCard"
import { useOutletContext } from "react-router-dom";
import { SearchForm } from "../SearchForm";

export default function PhotoGrid(props){
	const {setAlignNavbar} = useOutletContext()
	//create backend and API for loading photos
	const [photos, setPhotos] = useState([])
	const [filterTags, setFilterTags] = useState([])
	const [filterLocation, setFilterLocation] = useState([])


	useEffect(() => {
		setAlignNavbar(<SearchForm setLocation={setFilterLocation} setTags={setFilterTags} />)
		return () => setAlignNavbar(null)
	}, [setAlignNavbar])

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
	if (filterTags.some(val => val !== "")) {
		photoList = (photoList.filter(photo => filterTags.filter(tag => tag !== "").every(filterTag => photo.tags.some(photoTag => photoTag.toLowerCase().includes(filterTag.toLowerCase())))))
	}
	if (filterLocation.some(val => val !== "")){
		photoList = (photoList.filter(photo => filterLocation.filter(location => location !== "").every(filterLoc => photo.location.some(photoLoc => photoLoc.toLowerCase().includes(filterLoc.toLowerCase())))))
	}
	
	return(
		<div>
			{photoList.length === 0 ? <h3>No Photos Found</h3> : (<Container fluid style={{width:"100%", padding:0}}>
				<Row className="g-4">
					{photoList.map(photo => <Col xs={12} sm={6} md={6} lg={4} xl={4} key={photo.id}>
					<PhotoCard {...photo}/>
					</Col> )}
				</Row>
			</Container>
		)}
		</div>
	)
}

