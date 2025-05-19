import React from 'react'
import logo from '../images/Symbol.svg'
import ticket from '../images/Ticket.svg'

function Nav() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <img src={logo} alt="" />
        <h4>Ventixe</h4>
      </div>

      <div className="nav-link">
        <img src={ticket} alt="" />
      </div>
    </div>
  )
}

export default Nav