import React from "react"

import TagsDropDown from "./eventFilterOptions/TagsDropDown"
// import TagOptionsButtons from "./eventFilterOptions/TagOptionsButtons"
import TagOptionsChecklist from "./eventFilterOptions/TagOptionsChecklist"
import DateRangePicker from "./eventFilterOptions/DateRangePicker"

function FilterBar({ dataToFilterBy, setDataToFilterBy }) {

    return (
        <div>
            {/* Show on screens less than large */}
            <div className="mb-4 p-3 rounded bg-light d-lg-none" >
                <TagsDropDown setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} />
            </div>
            {/* Show on screens large and up */}
            <div className="mb-4 p-3 rounded bg-light d-none d-lg-block" >
                {/* <TagOptionsButtons setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} /> */}
                <TagOptionsChecklist setDataToFilterBy={setDataToFilterBy} dataToFilterBy={dataToFilterBy} />
                <DateRangePicker />
            </div>
        </div>
    )
}

export default FilterBar