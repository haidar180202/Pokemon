import { Container,Nav,NavLink,Navbar } from "react-bootstrap";

const Navigasi = ()=>{
    return(
        <Navbar  variant="dark" className='bg-success modal-transparent'>
            <Container>
                
                <NavLink to="/" draggable="false" className="navbar-brand">
                                    <img draggable="false" src="/favicon.png" width="30" className="d-inline-block align-text-top me-2" alt={"Favicon - " + process.env.REACT_APP_TITLE} />
                                    <span>Pokemon-Tokped</span>
                                </NavLink>
                <Nav className="me-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/PokemonList">Pokemon List</NavLink>
                    <NavLink href="/detail">Pokemon Detail</NavLink>
                    <NavLink href="mypokemon">My Pokemon List</NavLink>
                </Nav>
            </Container>
        </Navbar>)
}
export {Navigasi};