import React from "react"

import AddEventModal from "./AddEventModal"
import EventCards from "./EventCards"

function Home({ events, loading, addData }) {
    return (
      <div className="container">
        <section className="d-flex flex-column justify-content-center">
          <div>
            <h1>Hello Students</h1>
          </div>
          <div>
            {/* <!-- Short intro to page --> */}
            <p className="lead text-center">Welcome to your final destination to events on campus</p>
          </div>
        </section>
        <AddEventModal addData={addData}/>
        <EventCards events={events} loading={loading} />
      </div>
    )

}

export default Home