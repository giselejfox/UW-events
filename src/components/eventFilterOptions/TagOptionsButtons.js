import React from 'react';
import Button from 'react-bootstrap/Button';

import EventTagTypes from '../../JSON/EventTagTypes.json'

export default function TagOptionsButtons({ dataToFilterBy, setDataToFilterBy }) {

    // Handler functions for changing dataToFilterBy
    function addTag(tagToAdd) {
        setDataToFilterBy({
            ...dataToFilterBy,
            tags: [...dataToFilterBy.tags, tagToAdd],
        });
    }
    function deleteTag(tagToDelete) {
        setDataToFilterBy({
            ...dataToFilterBy,
            tags: dataToFilterBy.tags.filter((tag) => tag !== tagToDelete),
        });
    }

    const handleButtonClick = (buttonValue) => {
        // Check if the button is already clicked
        if (dataToFilterBy.tags.includes(buttonValue)) {
            deleteTag(buttonValue)
        } else {
            addTag(buttonValue)
        }
    };

    let tagButtons = EventTagTypes.map((tagData, index) => {
        return <TagButton tagData={tagData} handleButtonClick={handleButtonClick} clickedButtons={dataToFilterBy.tags} key={index} />
    })

    return (
        <div id="tag-buttons">
            {tagButtons}
        </div>
    );
}

function TagButton({ tagData, handleButtonClick, clickedButtons }) {
    let clicked = clickedButtons.includes(tagData.title)
    return (
        <Button 
            variant={clicked ? "dark" : "outline-dark"} 
            onClick={() => handleButtonClick(tagData.title)}
            className="me-1 mb-1"
        >
                {tagData.title}
        </Button>
    )
}

