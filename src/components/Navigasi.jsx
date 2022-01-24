import { Container,Nav,NavLink,Navbar } from "react-bootstrap";

const Navigasi = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink href="/">Pokemon List</NavLink>
                    <NavLink href="/detail">Pokemon Detail</NavLink>
                    <NavLink href="my-pokemon">My Pokemon List</NavLink>
                </Nav>
            </Container>
        </Navbar>)
}
export {Navigasi};