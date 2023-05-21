import React from "react"

import AddEventModal from "./AddEventModal"
import EventCards from "./EventCards"

function Home({ events, loading, addData }) {
    return (
      <div className="container">
        <section className="d-flex flex-column justify-content-center align-items-center py-4">
          <h1>Hello Students</h1>
          <div>
            <p className="lead text-center">Welcome to your final destination to events on campus</p>
          </div>
          <AddEventModal addData={addData}/>
        </section>
        <EventCards events={events} loading={loading} />
      </div>
    )

}

export default Home