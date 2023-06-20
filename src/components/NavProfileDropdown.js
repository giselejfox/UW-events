import React from "react"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from "react-bootstrap";


const UserIcon = (
    <Image
        src={'https://github.com/mshaaban0.png'}
        alt="UserName profile image"
        roundedCircle
        style={{ width: '40px' }}
    />
)

export default function NavProfileDropdown({ setShowLogOut }) {

    return (
        <NavDropdown title={UserIcon} id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={setShowLogOut}>Logout</NavDropdown.Item>
        </NavDropdown>
    )
}