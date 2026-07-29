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
				<Form.Label htmlFor="searchKeys">Keyword(s): </Form.Label>
				<Form.Control id="searchKeys"/>
			</Form>
		)
		return () => setAlignNavbar(null)
	}, [setAlignNavbar])

	
	return(
		<div>
			{photos.length === 0 ? <h3>No Photos Found</h3> : (<Container>
				<Row>
					
				</Row>
			</Container>
		)}
		</div>
	)
}

// {photos.map(photo => <col xs={12} s={12} md={6} lg={4} xl={2} key={photo.id}>
// 					<PhotoCard {...photo}/>
// 					</col> )}