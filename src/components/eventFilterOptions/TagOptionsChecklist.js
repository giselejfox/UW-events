import React from "react";

import EventTagTypes from '../../JSON/EventTagTypes.json'

export default function TagOptionsChecklist({ dataToFilterBy, setDataToFilterBy }) {

    // Helper Functions
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

    const handleSetTagsToFilterBy = (event) => {
        const optionValue = event.target.value;
        if (event.target.checked) {
            addTag(optionValue)
        } else {
            deleteTag(optionValue)
        }
    }

    const tagCheckboxes = EventTagTypes.map((tagData, index) => {
        return (<TagCheckbox tagData={tagData} tagsChecked={dataToFilterBy.tags} handleSetTagsToFilterBy={handleSetTagsToFilterBy} key={index} />)
    })

    return (
        <div>
            {tagCheckboxes}
        </div>
    )

}

function TagCheckbox({ tagData, tagsChecked, handleSetTagsToFilterBy, key }) {
    return (
        <div class="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value={tagData.title}
                checked={tagsChecked.includes(tagData.title)}
                onChange={handleSetTagsToFilterBy}
                id={`checkbox-${key}`} // Use a unique ID for each checkbox
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {tagData.title}
            </label>
        </div>
    )
}