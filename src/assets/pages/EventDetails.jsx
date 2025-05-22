import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import calendar from '../images/calendar.svg'
import location from '../images/Place.svg'

function EventDetails() {
    const { id } = useParams()
    const [event, setEvent] = useState(null);

    const getEvent = async () => {
      const res = await fetch(`https://localhost:7217/api/events/${id}`);

      if (res.ok) {
        const data = await res.json()
        setEvent(data)
      }
    }

    useEffect(() => {
      getEvent()
    }, [id]);

    if (!event) return <div>Laddar event...</div>;
    
  return (
    <div>
      <div className="details-wrapper">
        <div className="card-header">        
          <p>{event.description}</p>        
        </div>
        <div className="event-header">
          <h1>{event.name}</h1>
          <div className="event-details">
            <div className="info">
              <p className="location"><img src={calendar} alt="" />{event.date}</p>
              <p className="location"><img src={location} alt="" />{event.location}</p>
            </div>
              <p className="price">{event.price} kr</p>
          </div> 
        </div>
        <div className="divider" />
        <div className="about-event">
          <h6>About Event</h6>
          <p>The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.</p>
        </div>   
  
      </div>
      <div className="terms-conditions">
        <div className="terms">
            <h5>1. </h5>
            <ul>
              <li>All attendees must possess a valid ticket for entry.</li>
              <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
              <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
            </ul>
        </div>
        <div className="terms">
            <h5>2. </h5>
            <ul>
              <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
              <li>Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
              <li>The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
            </ul>
        </div>
        <div className="terms">
            <h5>3. </h5>
            <ul>
              <li>Attendees are expected to behave responsibly and respectfully toward others..</li>
              <li>Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund.</li>
              <li></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default EventDetails