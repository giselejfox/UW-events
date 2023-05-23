import React from "react"

import TagsDropDown from "./eventFilterOptions/TagsDropDown"

function FilterBar({ dataToFilterBy, setDataToFilterBy }) {
    return (
        <div className="mb-4">
            <TagsDropDown setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} />
        </div>
    )
}

export default FilterBar