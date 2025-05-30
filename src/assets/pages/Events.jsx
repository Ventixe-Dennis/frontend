import React, { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://dennis-eventservice-ggebbngthpcxd6g2.swedencentral-01.azurewebsites.net/api/events")

        if (res.ok) {
            const data = await res.json()
            setEvents(data.result);
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className="event-wrapper">
        {
            events.map(event => (
                <EventCard key={event.id} event={event}/>
            ))
        }
    </div>
  )
}

export default Events