import React from "react"

// import TagsDropDown from "./eventFilterOptions/TagsDropDown"
import TagOptionsButtons from "./TagOptionsButtons"

function FilterBar({ dataToFilterBy, setDataToFilterBy }) {

    return (
        <div className="mb-4 p-3 rounded bg-light" >
            {/* <TagsDropDown setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} /> */}
            <TagOptionsButtons setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} />
        </div>
    )
}

export default FilterBar