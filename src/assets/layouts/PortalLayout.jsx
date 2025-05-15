import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function PortalLayout() {
  return (
    <div className="portal-wrapper">
       <Nav />
       <Header />
       <main>
        <Outlet /> 
       </main> 
       <Footer />
    </div>
  )
}

export default PortalLayout