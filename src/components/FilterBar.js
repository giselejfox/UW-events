import React from "react"

import EventTagTypes from '../JSON/EventTagTypes.json'


function TagsDropDown({ tagsToFilterBy, setTagsToFilterBy }) {

    function TagOptions() {
        let tagOptions = EventTagTypes.map((tagData, index) => {
            return (
                <li className="form-check mx-3" key={index}>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={tagData.title} 
                        checked={tagsToFilterBy.includes(tagData.title)}
                        onChange={setTagsToFilterBy}
                        id="flexCheckDefault" 
                    />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {tagData.title}
                        </label>
                </li>
            )
        })
        return tagOptions
    }

    return (
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tags
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <TagOptions />
            </ul>
        </div>
    )
}

function FilterBar({ dataToFilterBy, setTagsToFilterBy }) {
    return (
        <div className="mb-4">
            <TagsDropDown setTagsToFilterBy={setTagsToFilterBy} tagsToFilterBy={dataToFilterBy.tags} />
        </div>
    )
}

export default FilterBar