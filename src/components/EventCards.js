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
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Pad the day and minutes with leading zeros if necessary
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const formattedHours = hours > 12 ? hours - 12 : hours
    const amOrPM = hours > 12 ? 'pm' : 'am'
  
    // Assemble the formatted date string
    const formattedDate = `${month_short} ${day} ${year} @ ${formattedHours}:${formattedMinutes}${amOrPM}`;
  
    return formattedDate;
}

function ClubTags({ clubName }) {
    // TODO make the tag clickable and lead to their page
    return (
        <div className="col-auto d-flex flex-row rounded-pill align-items-center py-1 ps-0" >
            <div className="rounded-circle me-2" style={{backgroundColor: "red", height: .8+"rem", width:.8+"rem"}}></div>
            <div className="me-1 fw-bold event-tags">{clubName}</div>
        </div>
    )   
}

function EventTags({ tags }) {
    // TODO make the tag clickable and lead to a filtered view of the events that have the tag
    return tags.map((tag, index) => <div key={index} className="col-auto rounded card-tag me-1 py-1 px-2">{tag}</div>)
}

function SingleEventCardImageSide({ event }) {
    let dateTimeString = formatDate(event.dateTime)
    return (
        <div className="event-card col-sm-12 col-md-12">
            <div className="card border-1">
                <div className="row g-0">
                    <div className="darkener col-md-4" >
                        <div
                            className="rounded m-3"
                            style={{
                                backgroundImage: `url(${event.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                height: "200px"
                            }}
                            alt="..."
                        >
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start py-4">
                            <p className="card-subtitle mb-1">{dateTimeString}</p>
                            <h5 className="card-title fw-bold">{event.eventName}</h5>
                            <p className="card-text">{event.description}</p>
                            <div className="container">
                                <div className="row align-items-center">
                                    <ClubTags clubName={event.clubName} />
                                    <EventTags tags={event.tags} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function sortByDateTimeAscending(events) {
    events.sort((a, b) => {
        const date1 = new Date(a.dateTime);
        const date2 = new Date(b.dateTime);
        if (date1 < date2) {
            return -1;
        }
        if (date1 > date2) {
            return 1;
        }
        return 0;
    })
    return events
}

function filterByTags(events, tagsToFilterBy) {
    let eventsToReturn = events
    // Only filter if we have a tag to filter by
    if (tagsToFilterBy.length !== 0) {
        eventsToReturn = events.filter((event) => {
            return tagsToFilterBy.some((tag) => event.tags.includes(tag));
        });
    }
    return eventsToReturn
}

function EventCards({ events, dataToFilterBy }) {

    let shownEvents = events

    // Sorting Events
    shownEvents = sortByDateTimeAscending(shownEvents)

    // Filtering Events
    shownEvents = filterByTags(shownEvents, dataToFilterBy.tags)

    const allEventCards = shownEvents.map((event, index) => {
        return <SingleEventCardImageSide key={index} event={event}/>
    })
    
    return (
        <div className="row g-4">
            {allEventCards}
        </div>
    )
}

export default EventCards


// function SingleEventCardImageTop({ event }) {
//     let dateTimeString = formatDate(event.dateTime)
//     return (
//         <div className="event-card col-sm-6 col-md-4">
//             <div className="card border-1">
//                 <div className="darkener">
//                     <div className="card-image-top rounded-top" style={{ backgroundImage: `url(${event.img})`, backgroundSize: "cover", backgroundPosition: "center", height: 8+"rem"}} alt="...">
//                         <div className="overlay rounded-top"></div>
//                     </div>
//                 </div>
//                 <div className="card-body text-start">
//                     <p className="card-subtitle mb-1" style={{color: "#585C63"}}>{dateTimeString}</p>
//                     <h5 className="card-title fw-bold" style={{fontSize: 1.25+"rem"}}>{event.eventName}</h5>
//                     <p className="card-text" style={{color: "#585C63"}}>{event.description}</p>
//                     <div className="container">
//                         <div className="row align-items-center">
//                             <ClubTags clubName={event.clubName} />
//                             <EventTags tags={event.tags} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }