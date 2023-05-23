import React, { useState } from "react"

import AddEventModal from "./AddEventModal"
import EventCards from "./EventCards"
import FilterBar from "./FilterBar"

function Home({ events, loading, addData }) {

  const [dataToFilterBy, setDataToFilterBy] = useState({ tags: [] })

  // Uses the event of the click of a checkbox to either add or remove a tag from the dataToFilterBy
  const handleSetTagsToFilterBy = (event) => {
    // Helper Functions
    function addTag(tagToAdd) {
      setDataToFilterBy((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, tagToAdd],
      }));
    }
    function deleteTag(tagToDelete) {
      setDataToFilterBy((prevState) => ({
        ...prevState,
        tags: prevState.tags.filter((tag) => tag !== tagToDelete),
      }));
    }
    // Meat of the handler
    const optionValue = event.target.value;
    if (event.target.checked) {
      addTag(optionValue)
    } else {
      deleteTag(optionValue)
    }
    console.log(dataToFilterBy)
  };

  return (
    <div className="container">
      <section className="d-flex flex-column justify-content-center align-items-center py-4">
        <h1>Hello Students</h1>
        <div>
          <p className="lead text-center">Welcome to your final destination to events on campus</p>
        </div>
        <AddEventModal addData={addData}/>
      </section>
      <div className="d-flex flex-column">
          <FilterBar 
            dataToFilterBy={dataToFilterBy}
            setTagsToFilterBy={handleSetTagsToFilterBy}
          />
          <EventCards events={events} loading={loading} />
      </div>
    </div>
  )
}

export default Home