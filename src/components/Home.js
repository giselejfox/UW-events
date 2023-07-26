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
      <section className="d-flex flex-column justify-content-center align-items-center py-5 my-5">
        <h1>Hello Students</h1>
        <div>
          <p className="lead text-center">Welcome to your final destination to events on campus</p>
        </div>
        <AddEventModal addData={addData}/>
      </section>
      <div>

      </div>
      <div className="d-flex flex-row row">
        <div className="col-0 col-lg-3">
          {/* Only shows when on screens md and up */}
          <FilterBar 
            dataToFilterBy={dataToFilterBy}
            setDataToFilterBy={handleSetDataToFilterBy}
          />
        </div>
        <div className="col-12 col-lg-9">
          <EventCards 
            events={events} 
            loading={loading} 
            dataToFilterBy={dataToFilterBy} 
          />
        </div>
      </div>
    </div>
  )
}

export default Home