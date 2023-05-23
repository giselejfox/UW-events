import React from "react"

import EventTagTypes from "../../JSON/EventTagTypes.json"

function TagOptions({ dataToFilterBy, handleSetTagsToFilterBy }) {
    let tagOptions = EventTagTypes.map((tagData, index) => {
        return (
            <li className="form-check mx-3" key={index}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={tagData.title}
                    checked={dataToFilterBy.tags.includes(tagData.title)}
                    onChange={handleSetTagsToFilterBy}
                    id={`checkbox-${index}`} // Use a unique ID for each checkbox
                />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {tagData.title}
                    </label>
            </li>
        )
    })
    return tagOptions
}

function TagsDropDown({ dataToFilterBy, setDataToFilterBy }) {

    const handleSetTagsToFilterBy = (event) => {
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
        // Meat of the handler
        const optionValue = event.target.value;
        if (event.target.checked) {
          addTag(optionValue)
        } else {
          deleteTag(optionValue)
        }
    };

    // Changes the dropdown button to dark if we have filtered by tags
    let baseButtonClassName = "btn dropdown-toggle border border-1"
    let buttonClassName = (dataToFilterBy.tags.length === 0) ? baseButtonClassName : baseButtonClassName + " btn-dark"

    return (
        <div className="dropdown">
            <button className={buttonClassName} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tags
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <TagOptions dataToFilterBy={dataToFilterBy} handleSetTagsToFilterBy={handleSetTagsToFilterBy}/>
            </ul>
        </div>
    )
}

export default TagsDropDown