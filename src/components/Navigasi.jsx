import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

const Navigasi = () => {
    return (
        
        <Navbar variant="dark" className='bg-success modal-transparent'>
            <Container>

                
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/favicon.png"
                        width="30"
                        height="30"
                        className="d-inline align-top"
                    />{' '}
                    Pokemon-Tokped
                </Navbar.Brand>
                

                <Nav className="me-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/PokemonList">Pokemon List</NavLink>
                    <NavLink href="mypokemon">My Pokemon List</NavLink>
                </Nav>
            </Container>
        </Navbar>
        )
}
export { Navigasi };
