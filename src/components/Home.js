import React, { useState } from "react"

import AddEventModal from "./AddEventModal"
import EventCards from "./EventCards"
import FilterBar from "./FilterBar"

function Home({ events, loading, addData }) {

  const [tagsToFilterBy, setTagsToFilterBy] = useState([])

  const handleAddTagToFilterBy = (tag) => {

  }
  
  const handleDeleteTagToFilterBy = (tag) => {
    
  }

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
          <FilterBar />
          <EventCards events={events} loading={loading} />
      </div>
    </div>
  )
}

export default Home