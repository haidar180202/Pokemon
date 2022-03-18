import { Container, Nav, Navbar, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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

                <Nav className="me-auto" >
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto">
                            <li>
                                <NavLink to="/" style={{ color: "white", textDecoration: 'none' }} className="mx-3">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pokemonList" style={{ color: "white", textDecoration: 'none' }}>Pokemon List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myPokemon" style={{ color: "white", textDecoration: 'none' }} className="mx-3">My Pokemon List</NavLink>
                            </li>

                        </ul>
                    </div>
                </Nav>

            </Container>
        </Navbar>
    )
}
export { Navigasi };
