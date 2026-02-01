import React from 'react'
import EventsData from '../../../lib/data/EventsData'
import { Calendar, Clock } from 'lucide-react'

const UpcomingEventsCard = () => {
    return (
     <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Upcoming Events
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {EventsData.upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="group backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 animate-fade-in-up hover:shadow-2xl w-full md:w-80"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        backgroundColor: 'var(--surface-black)',
                        border: '1.5px solid',
                        borderColor: 'var(--yellow-border-soft)',
                        boxShadow: '0 0 20px rgba(255, 202, 40, 0.1), inset 0 0 20px rgba(255, 202, 40, 0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Animated gradient accent */}
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 from-transparent via-yellow-primary to-transparent group-hover:h-1 transition-all duration-500"
                        style={{ background: 'linear-gradient(to right, transparent, var(--yellow-primary), transparent)' }}
                      />
    
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <span
                            className="text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 group-hover:scale-105"
                            style={{
                              color: 'var(--black)',
                              background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))',
                            }}
                          >
                            {event.type}
                          </span>
                        </div>
    
                        <h3 className="text-base font-bold mb-4 leading-snug transition-colors duration-300" style={{ color: 'var(--white)' }}>
                          {event.title}
                        </h3>
    
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-sm transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                            <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--yellow-border-soft)' }}>
                              <Calendar className="h-4 w-4" style={{ color: 'var(--yellow-primary)' }} />
                            </div>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-sm transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                            <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--yellow-border-soft)' }}>
                              <Clock className="h-4 w-4" style={{ color: 'var(--yellow-primary)' }} />
                            </div>
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    )
}

export default UpcomingEventsCard
