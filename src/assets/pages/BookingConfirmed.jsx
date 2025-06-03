import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import EventInfo from '../components/EventInfo'

function BookingConfirmation() {
  const { id } = useParams();
  const { state } = useLocation();
  const [event, setEvent] = useState(null);

  const name = state?.name || 'Okänd';
  const email = state?.email || 'Ingen e-post';

  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(`https://dennis-eventservice-ggebbngthpcxd6g2.swedencentral-01.azurewebsites.net/api/events/${id}`);
      if (res.ok) {
        const data = await res.json();
        setEvent(data.result);
      }
    };
    getEvent();
  }, [id]);

  if (!event) return <p>Laddar eventinfo...</p>;

  return (
    <div className="details-wrapper">
      <div className="booking-box">
        <div className="confirmed-event">          
          <h3>Välkommen <strong>{name}</strong>!</h3>
        </div>
        
        <div className="confirmed-info">
           <p>Bekräftelsemail har skickats till:</p>
          <p className="booking-email">{email}</p>
        </div>
       <h2>Du har bokat eventet:</h2>
      </div>
     
      <EventInfo event={event} />
    </div>
  );
}

export default BookingConfirmation;