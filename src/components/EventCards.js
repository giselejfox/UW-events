import React from "react"

function SingleEventCard() {
    return (
        <div className="col">
            <div className="card shadow border-0">
            <img src="img/iSchool.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
    )
}

function EventCards({ events, loading }) {

    let shownEvents = events

    // Implement filtering here

    const allEventCards = shownEvents.map((event) => {
        return <SingleEventCard />
    })
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {allEventCards}
        </div>
    )

}

export default EventCards