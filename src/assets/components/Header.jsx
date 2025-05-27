import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  const getPageTitle = () => {    
      if (location.pathname === '/') return 'Events';
      if (location.pathname === '/inbox') return 'Inbox';
      if (location.pathname === '/bookEvent') return 'Book event';
      if (location.pathname == '/bookingConfirmed') return 'Confirmed Booking';
      if (location.pathname.startsWith('/events/') && location.pathname.split('/').length === 3) return 'Event Details';
      return '';
    }  

  return (
    <header>
      <h4>
        {getPageTitle()}
      </h4>
    </header>
  )
}

export default Header