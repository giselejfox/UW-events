import React from "react";
import { Navbar, Container, Nav, NavLink} from "react-bootstrap";

export default function NavBar({ showLogOutModal, user, loading }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="d-flex flex-row align-items-center">
                    <img className="me-2" style={{height: 2+"rem"}} src="https://png.pngtree.com/png-clipart/20230130/ourmid/pngtree-watercolor-pink-blob-png-image_6567193.png" alt="brand logo" />
                    <p className="mb-0 fw-bold">UW events</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!loading &&
                        <Nav className="me-auto">
                            <NavLink href="/" >Home</NavLink>
                            <NavLink href="/about" >About Us</NavLink>
                            {!user && <NavLink href="/login" >Login</NavLink>}
                            {user &&
                                <Nav className="me-auto">
                                    <NavLink href="/profile" className="d-inline" >Profile</NavLink>
                                    <NavLink onClick={showLogOutModal} className="d-inline" >Log out</NavLink>
                                </Nav>
                            }
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}