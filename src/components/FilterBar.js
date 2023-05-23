import React from "react"

import EventTagTypes from '../JSON/EventTagTypes.json'


function TagsDropDown() {

    function TagOption({ tagData }) {
        return (
            <li className="form-check mx-3">
                <input className="form-check-input" type="checkbox" value={tagData.title} id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        {tagData.title}
                    </label>
            </li>
        )
    }

    function TagOptions() {
        let tagOptions = EventTagTypes.map((tagData, index) => <TagOption tagData={tagData} key={index} />)
        return tagOptions
    }

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tags
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <TagOptions />
            </ul>
        </div>
    )
}

function FilterBar() {
    return (
        <div className="mb-3">
            <TagsDropDown />
        </div>
    )
}

export default FilterBar