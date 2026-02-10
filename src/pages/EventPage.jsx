import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventSection from '../components/sections/Event/EventSection'
import DomainEventsPage from './DomainEventsPage'
import DomainPage from './DomainPage'
// import OrientationPage from './OrientationPage'
import Orientation2k26_Page from './Orientation2k26_Page'

function EventPage() {
  return (
   <Routes>
      {/* components inside the event's page */}
  <Route index element={<EventSection />} />
  {/* <Route path="orientation" element={<OrientationPage />} /> */}
  <Route path='orientation' element={<Orientation2k26_Page/>}/>
  <Route path=":mainEvent" element={<DomainPage />} />
  <Route path=":mainEvent/:domain" element={<DomainEventsPage />} />
</Routes>
  )
}

export default EventPage
