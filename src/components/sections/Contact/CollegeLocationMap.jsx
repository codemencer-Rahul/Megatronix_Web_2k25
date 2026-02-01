import React from 'react'

const CollegeLocationMap = () => {
    return (
           <div
              className="relative h-64 backdrop-blur-sm rounded-xl overflow-hidden"
              style={{
                backgroundColor: "var(--surface-black)",
                border: "1px solid var(--yellow-border-soft)",
                boxShadow: "0 0 20px rgba(255, 202, 40, 0.12)",
              }}
            >
              <iframe
                title="TechFest Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789!2d88.4150829!3d22.5105296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
                }} 
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
    )
}

export default CollegeLocationMap
