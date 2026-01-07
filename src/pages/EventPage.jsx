import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DomainEventsPage, DomainPage, EventSection, OrientationPage } from '../components'

function EventPage() {
  return (
   <Routes>
  <Route index element={<EventSection />} />
  <Route path="orientation" element={<OrientationPage />} />
  <Route path=":mainEvent" element={<DomainPage />} />
  <Route path=":mainEvent/:domain" element={<DomainEventsPage />} />
</Routes>
  )
}

export default EventPage