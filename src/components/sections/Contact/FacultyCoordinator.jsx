import React from 'react'
import { MailFilledIcon, PhoneVolume } from '../../ui/icons';

const FacultyCoordinator = () => {

// faculty coordinator data
const facultyCoordinators = [
  {
    domain: "Technical Head",
    coordinator: "Soumya Shubra Khan",
    phone: "+91 90000 12345",
    email: "asharma@techfest.edu",
    image: "/api/placeholder/100/100", // Replace with real image
  }
];

    return (
       <div
            className="lg:col-span-12 backdrop-blur-sm rounded-xl p-3 shadow-lg relative self-start"
            style={{
              backgroundColor: "var(--surface-black)",
              border: "1px solid var(--yellow-border-soft)",
              boxShadow: "0 0 20px rgba(255, 202, 40, 0.12)",
            }}
          >
            <div
              className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-lg"
              style={{
                borderBottom: "2px solid var(--yellow-primary)",
                borderLeft: "2px solid var(--yellow-primary)",
              }}
            ></div>
            <h3
              className="text-base font-bold mb-2 tracking-widest pb-1.5"
              style={{
                color: "var(--yellow-primary)",
                borderBottom: "1px solid var(--yellow-border-soft)",
              }}
            >
              Faculty Coordinators
            </h3>

            <div className="items-center">
              {facultyCoordinators.map((member, idx) => (
                <div
                  key={idx}
                  className="backdrop-blur-md rounded-xl p-3 transition-all group flex items-center gap-3"
                  style={{
                    backgroundColor: "var(--surface-black)",
                    border: "1px solid var(--yellow-border-soft)",
                    boxShadow: "0 0 18px rgba(255, 202, 40, 0.12)",
                  }}
                >
                  {/* LEFT: Image + Name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-16 h-16 rounded-full overflow-hidden shrink-0"
                      style={{
                        backgroundColor: "rgba(255, 202, 40, 0.06)",
                        border: "2px solid var(--yellow-border-soft)",
                      }}
                    >
                      {/* You can put an <img> tag here */}
                    </div>

                    <div className="min-w-0">
                      <h4
                        className="font-bold text-base leading-tight truncate"
                        style={{ color: "var(--yellow-primary)" }}
                      >
                        {member.coordinator}
                      </h4>
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {member.domain}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: Contact info */}
                  <div className="ml-auto space-y-2 text-right">
                    <div className="flex items-center justify-center space-x-2 text-xs">
                      <PhoneVolume
                        className="h-3.5 w-3.5 shrink-0"
                        color="var(--yellow-primary)"
                      />
                      <span
                        className="truncate"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {member.phone}
                      </span>
                    </div>

                    <div className="flex items-center justify-end space-x-2 text-xs">
                      <MailFilledIcon
                        className="h-3.5 w-3.5 shrink-0"
                        color="var(--yellow-primary)"
                      />
                      <span
                        className="truncate"
                        style={{ color: "var(--gray-text)" }}
                      >
                        {member.email}
                      </span>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
    )
}

export default FacultyCoordinator
