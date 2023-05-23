import React, { useState } from "react"

import AddEventModal from "./AddEventModal"
import EventCards from "./EventCards"
import FilterBar from "./FilterBar"

function Home({ events, loading, addData }) {

  const [dataToFilterBy, setDataToFilterBy] = useState({ tags: [] })

  const handleSetDataToFilterBy = (newData) => {
    setDataToFilterBy(newData)
    console.log(newData)
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
          <FilterBar 
            dataToFilterBy={dataToFilterBy}
            setDataToFilterBy={handleSetDataToFilterBy}
          />
          <EventCards events={events} loading={loading} />
      </div>
    </div>
  )
}

export default Home