import React from 'react';
import calendar from '../images/calendar.svg';
import locationIcon from '../images/Place.svg';

function EventInfo({ event }) {
  if (!event) return null;

  return (
    <div>        
       <div className="card-header">
            <p>{event.category}</p>
          </div>
    
          <div className="event-header">
            <h1>{event.name}</h1>
            <div className="event-details">
              <div className="info">
                <p className="location"><img src={calendar} alt="" />{new Date(event.date).toLocaleDateString('sv-SE')}</p>
                <p className="location"><img src={locationIcon} alt="" />{event.location}</p>
              </div>
              <p className="price">{event.price} kr</p>
            </div>
          </div>
    
          <div className="divider" />
          <div className="about-event">
            <h6>About Event</h6>
            <p>{event.description}</p>
          </div>
    </div>
  )
}

export default EventInfo