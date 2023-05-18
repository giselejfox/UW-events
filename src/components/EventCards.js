import React from "react"

function formatDate(date) {
    // TODO format for am/pm
    
    date = new Date(date)
    // Create an array of month names
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    // Get the month, day, year, hours, and minutes from the Date object
    const month = months[date.getMonth()];
    const month_short = month.substring(0,3)
    const day = date.getDate();
    // const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Pad the day and minutes with leading zeros if necessary
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    // Assemble the formatted date string
    const formattedDate = `${month_short} ${day} @ ${hours}:${formattedMinutes}`;
  
    return formattedDate;
}

function ClubTags({ clubID }) {
    // TODO make the tag clickable and lead to their page
    return (
        <div className="col-auto d-flex flex-row rounded-pill align-items-center py-1 me-2 shadow-sm" >
            <div className="rounded-circle me-2" style={{backgroundColor: "red", height: 1+"rem", width:1+"rem"}}></div>
            <div className="me-1 fw-bold" style={{fontSize: 12+"px"}}>{clubID}</div>
        </div>
    )   
}

function CardTags({ tags }) {
    // TODO make the tag clickable and lead to a filtered view of the events that have the tag
    return tags.map((tag, index) => <div key={index} className="col-auto rounded card-tag me-1 py-1 px-2">{tag}</div>)
}

function SingleEventCard({ event }) {
    let dateTimeString = formatDate(event.dateTime)
    return (
        <div className="event-card col-sm-6 col-md-4 p-1">
            <div className="card shadow-sm border-0">
                <div className="darkener">
                    <div style={{ backgroundImage: `url(${event.img})`, height: 10+"rem", backgroundSize: "cover", backgroundPosition: "center"}} className="card-img-top" alt="...">
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="card-body text-start">
                    <p className="card-subtitle grey-text">{dateTimeString}</p>
                    <h5 className="card-title fw-bold fs-4 mb-3">{event.eventName}</h5>
                    {/* <p className="card-text">{event.description}</p> */}
                    <div className="container">
                        <div className="row align-items-center">
                            <ClubTags clubID={event.clubID} />
                            <CardTags tags={event.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EventCards({ events }) {

    let shownEvents = events

    // Implement filtering here

    const allEventCards = shownEvents.map((event) => {
        return <SingleEventCard event={event}/>
    })
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {allEventCards}
        </div>
    )

}

export default EventCards