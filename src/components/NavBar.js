import React from "react";
import { Navbar, Container, Nav, NavLink} from "react-bootstrap";

import NavProfileDropdown from "./NavProfileDropdown";

export default function NavBar({ setShowLogOut, user, loading }) {

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
                        <div className="d-flex flex-row">
                            <Nav>
                                <NavLink href="/" >Home</NavLink>
                                <NavLink href="/about" >About Us</NavLink>
                            </Nav>
                        </div>
                    }
                </Navbar.Collapse>
                {!user && <NavLink className="ms-auto" href="/login" >Login/Signup</NavLink>}
                {user && <NavProfileDropdown setShowLogOut={setShowLogOut} />}
            </Container>
        </Navbar>
    );
}