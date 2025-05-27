import React from 'react'
import place from '../images/Place.svg'
import { NavLink } from 'react-router-dom';

function EventCard({event}) {


  return (
    <div className="event-card">
      <div className="card-header"><p>{event.category}</p></div>
      <div className="card-body">
        <NavLink to={`/events/${event.id}`} className="event-name">{event.name}</NavLink>  
        <p className="location"><img src={place} alt="" />{event.location}</p>          
      </div>
      <div className="card-footer">
          <p>{event.date}</p>
          <p className="price">{event.price}kr</p>
      </div>       
    </div>
  )
}

export default EventCard