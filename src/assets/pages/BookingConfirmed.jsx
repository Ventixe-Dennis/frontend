import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import calendar from '../images/calendar.svg';
import locationIcon from '../images/Place.svg';

function BookingConfirmation() {
  const { id } = useParams();
  const { state } = useLocation();
  const [event, setEvent] = useState(null);

  const name = state?.name || 'Okänd';
  const email = state?.email || 'Ingen e-post';

  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(`https://localhost:7217/api/events/${id}`);
      if (res.ok) {
        const data = await res.json();
        setEvent(data);
      }
    };
    getEvent();
  }, [id]);

  if (!event) return <p>Laddar eventinfo...</p>;

  return (
    <div className="details-wrapper">
      <h2>Du har bokat eventet:</h2>
      <p><strong>Namn:</strong> {name}</p>
      <p><strong>E-post:</strong> {email}</p>

      <div className="card-header">
        <p>{event.category}</p>
      </div>

      <div className="event-header">
        <h1>{event.name}</h1>
        <div className="event-details">
          <div className="info">
            <p className="location"><img src={calendar} alt="" />{event.date}</p>
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
  );
}

export default BookingConfirmation;