import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    
  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
      <p>{event.price} kr</p>
    </div>
  )
}

export default EventDetails