import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="position-sticky top-0" style={{zIndex: 10}} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Earning Transcripts</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;