import { Form } from "react-bootstrap";


export function SearchForm({setLocation, setTags}){
	return (
	<Form>
		<Form.Group className="form-group">
			<Form.Label htmlFor="searchLoc">Location: </Form.Label>
			<Form.Control id="searchLoc" onChange={(e) => {
				let ary = e.target.value.split(",").map(loc => {
					return loc.trim()
				})
				console.log(ary)
				setLocation(ary)
			}}/>
		</Form.Group>
		<Form.Group className="form-group">
			<Form.Label htmlFor="searchTags">Tag(s): </Form.Label>
			<Form.Control id="searchTags" onChange={(e) => {
			let ary = e.target.value.split(",").map(tag => {
				return tag.trim()
			})
			console.log(ary)
			setTags(ary)
		}}/>
		</Form.Group>
	</Form>
	)
}
	