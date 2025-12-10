import { Route, Routes } from 'react-router-dom'
import { DomainEventsPage, DomainPage, EventSection, OrientationPage } from '../components'
import React from 'react'

function EventPage() {
  return (
    <Routes>
      <Route path="/" element={<EventSection/>}/>
      <Route path="orientation" element={<OrientationPage/>}/>
      <Route path=":mainEvent" element={<DomainPage/>}/>
      <Route path=":mainEvent/:domain" element={<DomainEventsPage />} />
    </Routes>
  )
}

export default EventPage