import Card from 'react-bootstrap/Card'

const styles = {
	cardImage: {
		width: '100%',
		height: 'auto',
		objectFit: 'cover'
	}
}

const PhotoCard = (props) => {
	return <Card key={props.id}>
		<h2>{props.name}</h2>
		<Card.Img style={styles.cardImage} src={props.photo_url}/>
	</Card>
}

export default PhotoCard;