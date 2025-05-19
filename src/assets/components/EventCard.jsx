import React from 'react'

function EventCard({event}) {


  return (
    <div className="event-card">
        <h5>{event.name}</h5>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.price}</p>
    </div>
  )
}

export default EventCard