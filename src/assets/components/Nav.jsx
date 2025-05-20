import React from 'react'
import logo from '../images/Symbol.svg'
import ticket from '../images/darkticket.svg'
import ticketActive from '../images/Ticket.svg'
import vector from '../images/Vector.svg'
import vectorActive from '../images/VectorActive.svg'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="logo">
        <img src={logo} alt="" />
        <h4>Ventixe</h4>
      </div>

    <div className="nav-links">

      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >
        {({ isActive }) => (
          <>
            <img src={isActive ? ticketActive : ticket} alt="" />
            <p className="nav-name">Events</p>
          </>
        )}        
      </NavLink>

      <NavLink to="/inbox" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >
        {({ isActive }) => (
          <>
            <img src={isActive ? vectorActive : vector} alt="" />
            <p className="nav-name">Inbox</p>
          </>
        )}        
      </NavLink>

    </div>
      
    </nav>
  )
}

export default Nav