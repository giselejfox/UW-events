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

    const handleShowLogoutModal = () => {
        console.log('got the click')
        setShowLogOut(false)
        console.log('got the other click')
    }

    return (
        <NavDropdown title={UserIcon} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleShowLogoutModal}>
                Logout
              </NavDropdown.Item>
        </NavDropdown>
    )
}