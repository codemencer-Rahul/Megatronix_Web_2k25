import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import LetterGlitch from "./LetterGlitch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- DATA ---
const facultyCoordinators = [
  {
    domain: "Core Technical",
    coordinator: "Dr. A. Sharma",
    phone: "+91 90000 12345",
    email: "asharma@techfest.edu",
    image: "/api/placeholder/100/100", // Replace with real image
  },
  {
    domain: "Management",
    coordinator: "Prof. B. Sen",
    phone: "+91 90000 54321",
    email: "bsen@techfest.edu",
    image: "/api/placeholder/100/100",
  },
  {
    domain: "Media & Publicity",
    coordinator: "Dr. C. Verma",
    phone: "+91 90000 67890",
    email: "cverma@techfest.edu",
    image: "/api/placeholder/100/100",
  },
];

const faqs = [
  {
    question: "How do I register for events?",
    answer: "You can register for events through our events page. Click on any event and use the registration button. Online registration closes 24 hours before each event.",
  },
  {
    question: "What is the registration fee?",
    answer: "Registration fees vary by event. Individual events range from ₹500-₹2000 per team. Check the specific event page for detailed pricing.",
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Yes! You can participate in multiple events across different domains. However, please check the schedule to avoid timing conflicts.",
  },
  {
    question: "Is accommodation provided?",
    answer: "Yes, we provide accommodation for outstation participants. Contact us at least 15 days before the event to book your stay.",
  },
  {
    question: "What should I bring to the event?",
    answer: "Bring your college ID, registration confirmation, and any specific materials mentioned in your event guidelines. All basic facilities will be provided.",
  },
  {
    question: "Are there any age restrictions?",
    answer: "TechFest is primarily for college students. However, some events are open to professionals and school students. Check individual event requirements.",
  },
];

// --- STYLES ---
// Custom Clip Path for Cyber Buttons
const cyberClipPath = {
  clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "feedbacks"), {
        ...data,
        timestamp: new Date(),
      });
      toast.success("Message Transmitted Successfully!");
      reset();
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast.error("Transmission Failed. Retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LetterGlitch>
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-orbitron">
        <ToastContainer theme="dark" position="bottom-right" />
        
        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- LEFT COLUMN: FEEDBACK FORM (Spans 7 columns) --- */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="relative h-full backdrop-blur-sm rounded-xl p-8 overflow-hidden"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1px solid var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
              }}
            >
              {/* Decorative Corner */}
              <div
                className="absolute top-0 left-0 w-8 h-8 rounded-tl-lg"
                style={{ borderTop: '2px solid var(--yellow-primary)', borderLeft: '2px solid var(--yellow-primary)' }}
              ></div>

              <h2
                className="text-2xl font-bold font-orbitron flex items-center mb-8 tracking-widest pb-2"
                style={{ color: 'var(--yellow-primary)', borderBottom: '1px solid var(--yellow-border-soft)' }}
              >
                <MessageSquare className="h-7 w-7 mr-3" style={{ color: 'var(--yellow-primary)' }} /> Send us a Feedback
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <input
                      {...register("firstName", { required: "Required" })}
                      placeholder="FIRST NAME"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--yellow-border-soft)',
                        color: 'var(--white)'
                      }}
                    />
                    {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName.message}</span>}
                  </div>
                  <div className="space-y-1">
                    <input
                      {...register("lastName", { required: "Required" })}
                      placeholder="LAST NAME"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--yellow-border-soft)',
                        color: 'var(--white)'
                      }}
                    />
                    {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <input
                      {...register("email", { required: "Required", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })}
                      placeholder="EMAIL ADDRESS"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--yellow-border-soft)',
                        color: 'var(--white)'
                      }}
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                  </div>
                  <div className="space-y-1">
                    <input
                      {...register("phone", { required: "Required" })}
                      placeholder="PHONE NUMBER"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--yellow-border-soft)',
                        color: 'var(--white)'
                      }}
                    />
                    {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    {...register("college")}
                    placeholder="COLLEGE / ORGANIZATION"
                    className="w-full p-3 focus:outline-none transition-all"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--yellow-border-soft)',
                      color: 'var(--white)'
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <input
                    {...register("subject")}
                    placeholder="SUBJECT"
                    className="w-full p-3 focus:outline-none transition-all"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--yellow-border-soft)',
                      color: 'var(--white)'
                    }}
                  />
                </div>

                <textarea
                  {...register("message", { required: "Required" })}
                  rows="5"
                  placeholder="ENTER YOUR MESSAGE DATA..."
                  className="w-full p-3 focus:outline-none transition-all resize-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--yellow-border-soft)',
                    color: 'var(--white)'
                  }}
                ></textarea>

                {/* CYBER BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...cyberClipPath,
                    background: 'linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))',
                    border: '1px solid var(--yellow-primary)',
                    color: 'var(--black)'
                  }}
                  className="w-full font-bold py-4 px-6 tracking-widest uppercase transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT COLUMN STACK (Spans 5 columns) --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. MAP PANEL */}
            <div
              className="relative h-64 backdrop-blur-sm rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1px solid var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
              }}
            >
               <iframe
                title="TechFest Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789!2d88.4150829!3d22.5105296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }} // Dark Mode Map Filter
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* 2. INFO PANEL */}
            <div
              className="flex-1 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center gap-6 relative"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1px solid var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
              }}
            >
              <div
                className="absolute top-0 right-0 w-8 h-8 rounded-tr-lg"
                style={{ borderTop: '2px solid var(--yellow-primary)', borderRight: '2px solid var(--yellow-primary)' }}
              ></div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg transition-all" style={{ backgroundColor: 'var(--yellow-border-soft)', border: '1px solid var(--yellow-border-soft)' }}>
                  <MapPin className="w-6 h-6" style={{ color: 'var(--yellow-primary)' }} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide" style={{ color: 'var(--yellow-primary)' }}>LOCATION</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-text)' }}>TechFest 2024, NIT, Tech City, State - 123456</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg transition-all" style={{ backgroundColor: 'var(--yellow-border-soft)', border: '1px solid var(--yellow-border-soft)' }}>
                  <Phone className="w-6 h-6" style={{ color: 'var(--yellow-primary)' }} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide" style={{ color: 'var(--yellow-primary)' }}>CONTACT</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-text)' }}>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg transition-all" style={{ backgroundColor: 'var(--yellow-border-soft)', border: '1px solid var(--yellow-border-soft)' }}>
                  <Mail className="w-6 h-6" style={{ color: 'var(--yellow-primary)' }} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide" style={{ color: 'var(--yellow-primary)' }}>EMAIL</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-text)' }}>info@techfest2024.edu</p>
                </div>
              </div>

               <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg transition-all" style={{ backgroundColor: 'var(--yellow-border-soft)', border: '1px solid var(--yellow-border-soft)' }}>
                  <Clock className="w-6 h-6" style={{ color: 'var(--yellow-primary)' }} />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide" style={{ color: 'var(--yellow-primary)' }}>HOURS</h4>
                  <p className="text-sm" style={{ color: 'var(--gray-text)' }}>Weekdays: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* 3. SOCIALS STRIP */}
            <div
              className="backdrop-blur-sm rounded-xl p-4 flex justify-between items-center"
              style={{
                backgroundColor: 'var(--surface-black)',
                border: '1px solid var(--yellow-border-soft)',
                boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
              }}
            >
                <p className="text-xl font-bold tracking-widest hidden sm:block" style={{ color: 'var(--yellow-primary)' }}>Connect_with_us //</p>
                <div className="flex gap-4 mx-auto sm:mx-0">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="transition-colors hover:scale-110 transform" style={{ color: 'var(--gray-text)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--yellow-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-text)'}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
            </div>
          </div>

          {/* --- BOTTOM ROW: FACULTY (Left) & FAQ (Right) --- */}
          
          {/* FACULTY SECTION */}
          <div
            className="lg:col-span-7 backdrop-blur-sm rounded-xl p-6 shadow-lg relative flex flex-col"
            style={{
              backgroundColor: 'var(--surface-black)',
              border: '1px solid var(--yellow-border-soft)',
              boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
            }}
          >
             <div
               className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-lg"
               style={{ borderBottom: '2px solid var(--yellow-primary)', borderLeft: '2px solid var(--yellow-primary)' }}
             ></div>
             <h3
               className="text-2xl font-bold mb-6 tracking-widest pb-2"
               style={{ color: 'var(--yellow-primary)', borderBottom: '1px solid var(--yellow-border-soft)' }}
             >
               Faculty Coordinators
             </h3>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 grow items-center">
               {facultyCoordinators.map((member, idx) => (
                 <div
                   key={idx}
                   className="backdrop-blur-md rounded-lg p-4 transition-all group flex flex-col justify-center"
                   style={{
                     backgroundColor: 'var(--surface-black)',
                     border: '1px solid var(--yellow-border-soft)',
                     boxShadow: '0 0 12px rgba(255, 202, 40, 0.08)'
                   }}
                 >
                    <div
                      className="w-16 h-16 mx-auto rounded-full mb-3 overflow-hidden"
                      style={{ backgroundColor: 'rgba(255, 202, 40, 0.06)', border: '2px solid var(--yellow-border-soft)' }}
                    >
                       {/* You can put an <img> tag here */}
                    </div>
                    <h4 className="font-bold text-sm text-center" style={{ color: 'var(--yellow-primary)' }}>{member.coordinator}</h4>
                    <p className="text-xs mb-3 text-center" style={{ color: 'var(--gray-text)' }}>{member.domain}</p>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center space-x-2 text-xs">
                        <Phone className="h-3 w-3 shrink-0" style={{ color: 'var(--yellow-primary)' }} />
                        <span className="truncate" style={{ color: 'var(--gray-text)' }}>{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <Mail className="h-3 w-3 shrink-0" style={{ color: 'var(--yellow-primary)' }} />
                        <span className="truncate" style={{ color: 'var(--gray-text)' }}>{member.email}</span>
                      </div>
                    </div>
                    <button
                      className="w-full text-[10px] uppercase px-3 py-1.5 rounded font-semibold transition-colors"
                      style={{
                        border: '1px solid var(--yellow-border-soft)',
                        color: 'var(--yellow-primary)',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--yellow-primary)'; e.currentTarget.style.color = 'var(--surface-black)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--yellow-primary)'; }}
                    >
                      Contact Coordinator
                    </button>
                 </div>
               ))}
             </div>
          </div>

          {/* FAQ SECTION (Accordion) */}
          <div
            className="lg:col-span-5 backdrop-blur-sm rounded-xl p-6 shadow-lg relative"
            style={{
              backgroundColor: 'var(--surface-black)',
              border: '1px solid var(--yellow-border-soft)',
              boxShadow: '0 0 20px rgba(255, 202, 40, 0.12)'
            }}
          >
             <div
               className="absolute bottom-0 right-0 w-8 h-8 rounded-br-lg"
               style={{ borderBottom: '2px solid var(--yellow-primary)', borderRight: '2px solid var(--yellow-primary)' }}
             ></div>
             <h3
               className="text-xl font-bold mb-6 tracking-widest pb-2"
               style={{ color: 'var(--yellow-primary)', borderBottom: '1px solid var(--yellow-border-soft)' }}
             >
               Frequently Asked Questions
             </h3>
             
             <div className="space-y-3">
               {faqs.map((faq, index) => (
                 <div
                   key={index}
                   className="rounded-lg overflow-hidden backdrop-blur-md"
                   style={{
                     backgroundColor: 'var(--surface-black)',
                     border: '1px solid var(--yellow-border-soft)'
                   }}
                 >
                   <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-3 text-left text-sm font-semibold transition-colors"
                    style={{ color: 'var(--gray-text)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--yellow-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-text)')}
                   >
                     {faq.question}
                     {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                   </button>
                   
                   <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                     <p
                       className="p-3 pt-0 text-xs leading-relaxed"
                       style={{
                         color: 'var(--gray-text)',
                         borderTop: '1px solid var(--yellow-border-soft)'
                       }}
                     >
                       {faq.answer}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </LetterGlitch>
  );
};

export default ContactSection;