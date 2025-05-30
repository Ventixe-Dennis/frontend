import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BookEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getEvents = async () => {
        try {
            const res = await fetch('https://dennis-eventservice-ggebbngthpcxd6g2.swedencentral-01.azurewebsites.net/api/events');
            const data = await res.json();
    
           
            if (res.ok && data.success) {
              setEvents(data.result);
            } else {
              throw new Error(data.error || 'Kunde inte hämta events');
            }
          } catch (err) {
            setError(err.message); 
          } finally {
            setLoading(false); 
          }
    };

    getEvents();
  }, []);

  useEffect(() => {
    const found = events.find(e => e.id === selectedEventId);
    setSelectedEvent(found || null);
  }, [selectedEventId, events]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Booking submitted:', {
      eventId: selectedEventId,
      userName,
      email
    });

    const bookingData = {
        eventId: selectedEventId,
        name: userName,
        email: email
      };
    
      try {
        const res = await fetch('https://dennis-bookingserivce-hqcdhpanfha9cuea.swedencentral-01.azurewebsites.net/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        });
    
        if (res.ok) {
            navigate(`/bookingConfirmed/${selectedEventId}`, {
                state: { name: userName, email: email }
              });
            } else {
              const errorText = await res.text();
              alert('Booking failed: ' + errorText);
            }
          } catch (error) {
            console.error('Error submitting booking:', error);
            alert('An error occurred during booking.');
          }
      };

    
    if (loading) return <p>Laddar event...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;       


  return (
    <div className="form-wrapper">
      <h2>Book an Event</h2>
        
        <form onSubmit={handleSubmit} className="booking-form">
            <label>
            Select Event:
            <select value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)}>
                <option value="">-- Choose an event --</option>
                {events.map(event => (
                <option key={event.id} value={event.id}>
                    {event.name}
                </option>
                ))}
            </select>
            </label>

            {selectedEvent && (
            <p className="price">
                Price: <strong>{selectedEvent.price} kr</strong>
            </p>
            )}

            <label>
            Name:
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </label>

            <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>

            <button type="submit" className="book-btn">Confirm Booking</button>
        </form>  
         
      
    </div>
  );
};

export default BookEvent;