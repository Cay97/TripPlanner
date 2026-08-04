import React, { useEffect, useState } from "react"
import { Button, Container, Form, Row, Col} from "react-bootstrap";
import PhotoCard from "../PhotoCard"
import { useOutletContext } from "react-router-dom";

export default function PhotoGrid(props){
	const {setAlignNavbar} = useOutletContext()
	//create backend and API for loading photos
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		setAlignNavbar(
			<Form>
				<Form.Label htmlFor="searchLoc">Location: </Form.Label>
				<Form.Control id="searchLoc"/>
				<Form.Label htmlFor="searchTags">Tag(s): </Form.Label>
				<Form.Control id="searchTags"/>
			</Form>
		)
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
	
	return(
		<div>
			{photoList.length === 0 ? <h3>No Photos Found</h3> : (<Container fluid>
				<Row className="g-4">
					{photoList.map(photo => <Col xs={12} sm={6} md={4} lg={3} xl={3} key={photo.id}>
					<PhotoCard {...photo}/>
					</Col> )}
				</Row>
			</Container>
		)}
		</div>
	)
}

