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
      <h2>Du har bokat eventet:</h2>
      <p><strong>Namn:</strong> {name}</p>

      <p>Bekräftelse mail har skickats till:</p>
      <p><strong>E-post:</strong> {email}</p>

      <EventInfo event={event} />
    </div>
  );
}

export default BookingConfirmation;