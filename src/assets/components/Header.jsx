import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Events';
      case '/inbox':
        return 'Inbox';
        default:
          return '';
    }
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