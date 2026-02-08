import React from 'react'
import { MapPin } from 'lucide-react';
import { GmailIcon,  PhoneVolume, } from "../../ui/icons";

const ContactInfoPanel = () => {
    const convenors = [
      { name: "Debangshi Roy", phone: "+91 73845 6340" },
        { name: "Kaustubh Upadhyay", phone: "+91 99394 26962" }

    ];

    return (
                   <div
              className="flex-1 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center gap-6 relative"
              style={{
                backgroundColor: "var(--surface-black)",
                border: "1px solid var(--yellow-border-soft)",
                boxShadow: "0 0 20px rgba(255, 202, 40, 0.12)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-8 h-8 rounded-tr-lg"
                style={{
                  borderTop: "2px solid var(--yellow-primary)",
                  borderRight: "2px solid var(--yellow-primary)",
                }}
              ></div>

              <div className="flex items-center gap-4 group">
                <div
                  className="p-3 rounded-lg transition-all"
                  style={{
                    backgroundColor: "var(--yellow-border-soft)",
                    border: "1px solid var(--yellow-border-soft)",
                  }}
                >
                  <MapPin className="w-6 h-6" color="var(--yellow-primary)" />
                </div>
                <div>
                  <h4
                    className="font-bold text-sm tracking-wide"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    LOCATION
                  </h4>
                  <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                    Behind Urbana Complex Near,Ruby General Hospital, Anandapur
                    Rd, Uchhepota, Kolkata, West Bengal 700150
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div
                  className="flex items-center p-3 rounded-lg transition-all"
                  style={{
                    backgroundColor: "var(--yellow-border-soft)",
                    border: "1px solid var(--yellow-border-soft)",
                  }}
                >
                  <PhoneVolume
                    className="w-6 h-6"
                    color="var(--yellow-primary)"
                  />
                </div>
                <div>
                  <h4
                    className="font-bold text-sm tracking-wide"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    CONTACT
                  </h4>
                  {convenors.map((convenor, index) => (
                    <p key={index} className="text-sm mt-2 gap-2" style={{ color: "var(--gray-text)" }}>
                      {convenor.name} - {convenor.phone}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div
                  className="p-3 rounded-lg transition-all"
                  style={{
                    backgroundColor: "var(--yellow-border-soft)",
                    border: "1px solid var(--yellow-border-soft)",
                  }}
                >
                  <GmailIcon
                    className="w-6 h-6"
                    color="var(--yellow-primary)"
                  />
                </div>
                <div>
                  <h4
                    className="font-bold text-sm tracking-wide"
                    style={{ color: "var(--yellow-primary)" }}
                  >
                    EMAIL
                  </h4>
                  <p className="text-sm" style={{ color: "var(--gray-text)" }}>
                    megatronixmsitofficial@gmail.com
                  </p>
                </div>
              </div>
            </div>

    )
}

export default ContactInfoPanel
