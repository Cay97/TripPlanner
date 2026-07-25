import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function TripNavBar(props) {
	return <Navbar bg="dark" variant="dark">
		<Container>
				<Nav >
					<Nav.Link as={Link} to="/">Trip Planner</Nav.Link>
					<Nav.Link as={Link} to="/Photo-Grid">Photo Grid</Nav.Link>
				</Nav>
		</Container>
	</Navbar>
}
