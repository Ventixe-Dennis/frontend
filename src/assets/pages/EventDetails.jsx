import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetails() {
    const { id } = useParams()

    
  return (
    <div>EventDetails</div>
  )
}

export default EventDetails