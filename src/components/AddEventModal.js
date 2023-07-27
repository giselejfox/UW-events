import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';

import EventTagTypes from '../JSON/EventTagTypes.json'

export default function AddEventModal({ addData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nameValue, setNameValue] = useState("")
    const [locationValue, setLocationValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [headerImageValue, setHeaderImageValue] = useState("")
    const [timeValue, setTimeValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    // Tags selected
    const [clickedButtons, setClickedButtons] = useState([]);
    const handleSetClickedButtons = (clickedButtons) => setClickedButtons(clickedButtons)

    const handleSubmit = () => {
        console.log("I'm submitting")
        let formattedDateTime = formatDateTime(dateValue, timeValue)
        let submitData = {
            clubID: "Test Club", // hardcoded for now before auth
            clubName: "Lovelace Lala", // hardcoded for now before auth
            eventName: nameValue,
            dateTime: formattedDateTime,
            location: locationValue,
            description: descriptionValue,
            img: headerImageValue,
            tags: clickedButtons
        }
        addData(submitData)
        handleClose()
        // window.location.reload();
    }
 
    return (
        <div>
            <Button variant="light" onClick={handleShow}>
                Add Event Modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <Form.Label htmlFor="EventName">Event Name</Form.Label>
                    <Form.Control id="EventName" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
                    <Form.Label className="mt-4" htmlFor="AddDate">Date and Time</Form.Label>
                    <DatePicker 
                        className="my-3" 
                        id="AddDate" 
                        label="Date" 
                        value={dateValue} 
                        onChange={(newValue) => setDateValue(newValue)}
                    />
                    <TimePicker
                        className="my-3" 
                        label="Time"
                        value={timeValue}
                        onChange={(newValue) => setTimeValue(newValue)}
                    />
                    <Form.Label className="mt-4" htmlFor="Location">Location</Form.Label>
                    <Form.Control id="Location" value={locationValue} onChange={(event) => setLocationValue(event.target.value)} />
                    <Form.Label className="mt-4" htmlFor="Description">Description</Form.Label>
                    <Form.Control id="Description" value={descriptionValue} onChange={(event) => setDescriptionValue(event.target.value)} />
                    <Form.Label className="mt-4" htmlFor="ImageLink">Header Image (Link)</Form.Label>
                    <Form.Control id="ImageLink" value={headerImageValue} onChange={(event) => setHeaderImageValue(event.target.value)} />
                    <Form.Label className="mt-4" htmlFor="AddTagsHelpBlock">Tags</Form.Label>
                    <TagOptions clickedButtons={clickedButtons} setClickedButtons={handleSetClickedButtons} className="mb-4" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function TagOptions({ clickedButtons, setClickedButtons }) {
    const handleButtonClick = (buttonValue) => {
        // Check if the button is already clicked
        if (clickedButtons.includes(buttonValue)) {
            // Remove the button value from the clickedButtons array
            setClickedButtons(clickedButtons.filter((value) => value !== buttonValue));
        } else {
            // Add the button value to the clickedButtons array
            setClickedButtons([...clickedButtons, buttonValue]);
        }
    };
    let tagButtons = EventTagTypes.map((tagData, index) => <TagButton tagData={tagData} handleButtonClick={handleButtonClick} clickedButtons={clickedButtons} key={index} />)
    return (
        <div>
            {tagButtons}
        </div>
    );
}

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

function formatDateTime(date, time) {
    // Assuming you have two time objects:
    const dateObject = new Date(date);
    const timeObject = new Date(time);

    // Extract the date from the dateObject
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth();
    const day = dateObject.getDate();

    // Extract the time from the timeObject
    const hours = timeObject.getHours();
    const minutes = timeObject.getMinutes();
    const seconds = timeObject.getSeconds();

    // Combine the extracted date and time
    const combinedDateTime = new Date(year, month, day, hours, minutes, seconds);

    return combinedDateTime.toISOString()
}