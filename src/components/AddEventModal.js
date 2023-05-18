import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';

import EventTagTypes from '../JSON/EventTagTypes.json'

function TagButton({ tagData, handleButtonClick, clickedButtons }) {
    let clicked = clickedButtons.includes(tagData.title)
    return (
        <Button 
            variant={clicked ? "primary" : "outline-primary"} 
            onClick={() => handleButtonClick(tagData.title)}
            className="me-1 mb-1"
        >
                {tagData.title}
        </Button>
    )
}

function TagOptions({ clickedButtons, setClickedButtons }) {
    const handleButtonClick = (buttonValue) => {
        console.log('clicked')
        // Check if the button is already clicked
        if (clickedButtons.includes(buttonValue)) {
            // Remove the button value from the clickedButtons array
            setClickedButtons(clickedButtons.filter((value) => value !== buttonValue));
        } else {
            // Add the button value to the clickedButtons array
            setClickedButtons([...clickedButtons, buttonValue]);
        }
        console.log(clickedButtons)
    };
    let tagButtons = EventTagTypes.map((tagData, index) => <TagButton tagData={tagData} handleButtonClick={handleButtonClick} clickedButtons={clickedButtons} key={index} />)
    return (
        <div>
            {tagButtons}
        </div>
    );
}
  

function AddEventModal({ addData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [timeValue, setTimeValue] = useState()

    // Tags selected
    const [clickedButtons, setClickedButtons] = useState([]);
    const handleSetClickedButtons = (clickedButtons) => setClickedButtons(clickedButtons)
 
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Event Modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <Form.Label htmlFor="EventName">Event Name</Form.Label>
                    <Form.Control
                        id="EventName"
                    />
                    {/* <Form.Label className="mt-1" htmlFor="AddClubName">Club Name</Form.Label>
                    <Form.Control
                        id="AddClubName"
                    /> */}
                    <Form.Label className="mt-4" htmlFor="AddDate">Event Date</Form.Label>
                    <DatePicker id="AddDate" className="mb-3" />
                    <TimePicker
                        label="Time"
                        value={timeValue}
                        onChange={(newValue) => setTimeValue(newValue)}
                    />
                    <Form.Label className="mt-4" htmlFor="Location">Event Location</Form.Label>
                    <Form.Control
                        id="Location"
                    />
                    <Form.Label className="mt-4" htmlFor="Description">Event Description</Form.Label>
                    <Form.Control
                        id="Description"
                    />
                    <Form.Label className="mt-4" htmlFor="ImageLink">Header Image (Link)</Form.Label>
                    <Form.Control
                        id="ImageLink"
                    />
                    <Form.Label className="mt-4" htmlFor="AddTagsHelpBlock">Add Tags</Form.Label>
                    <TagOptions clickedButtons={clickedButtons} setClickedButtons={handleSetClickedButtons} className="mb-4" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddEventModal