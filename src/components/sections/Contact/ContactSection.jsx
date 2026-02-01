import "react-toastify/dist/ReactToastify.css";
import LetterGlitch from "../../ui/animatedComponents/LetterGlitch";
import FaqAccordian from "./FaqAccordian";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { contactUsService } from "../../../lib/services/contactUsService";
import CollegeLocationMap from "./CollegeLocationMap";
import ContactInfoPanel from "./ContactInfoPanel";
import FacultyCoordinator from "./FacultyCoordinator";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function callAppwriteFunction(data) {
    return await contactUsService(data);
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const submissionData = {
        ...data,
        source: 'website',
        userAgent: navigator.userAgent,
        pageUrl: window.location.href,
      };

      await callAppwriteFunction(submissionData);
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
      <div className="min-h-screen pt-35 pb-12 px-4 sm:px-6 lg:px-8 font-orbitron">
        <ToastContainer theme="dark" position="bottom-right" />

        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* --- LEFT COLUMN: FEEDBACK FORM (Spans 7 columns) --- */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className="relative backdrop-blur-sm rounded-xl p-8 overflow-hidden"
              style={{
                backgroundColor: "var(--surface-black)",
                border: "1px solid var(--yellow-border-soft)",
                boxShadow: "0 0 20px rgba(255, 202, 40, 0.12)",
              }}
            >
              {/* Decorative Corner */}
              <div
                className="absolute top-0 left-0 w-8 h-8 rounded-tl-lg"
                style={{
                  borderTop: "2px solid var(--yellow-primary)",
                  borderLeft: "2px solid var(--yellow-primary)",
                }}
              ></div>

              <h2
                className="text-2xl font-bold font-orbitron flex items-center mb-8 tracking-widest pb-2"
                style={{
                  color: "var(--yellow-primary)",
                  borderBottom: "1px solid var(--yellow-border-soft)",
                }}
              >
                <MessageSquare
                  className="h-7 w-7 mr-3"
                  style={{ color: "var(--yellow-primary)" }}
                />{" "}
                Send us a Feedback
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <input
                      {...register("firstName", { required: "Required" })}
                      placeholder="FIRST NAME"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--yellow-border-soft)",
                        color: "var(--white)",
                      }}
                    />
                    {errors.firstName && (
                      <span className="text-red-400 text-xs">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <input
                      {...register("lastName", { required: "Required" })}
                      placeholder="LAST NAME"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--yellow-border-soft)",
                        color: "var(--white)",
                      }}
                    />
                    {errors.lastName && (
                      <span className="text-red-400 text-xs">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <input
                      {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid Email",
                        },
                      })}
                      placeholder="EMAIL ADDRESS"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--yellow-border-soft)",
                        color: "var(--white)",
                      }}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <input
                      {...register("phone", { required: "Required" })}
                      placeholder="PHONE NUMBER"
                      className="w-full p-3 focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--yellow-border-soft)",
                        color: "var(--white)",
                      }}
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-xs">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    {...register("college")}
                    placeholder="COLLEGE / ORGANIZATION"
                    className="w-full p-3 focus:outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--yellow-border-soft)",
                      color: "var(--white)",
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <input
                    {...register("subject", { required: "Required" })}
                    placeholder="SUBJECT"
                    className="w-full p-3 focus:outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--yellow-border-soft)",
                      color: "var(--white)",
                    }}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Honeypot Field for spam prevention, DONT REMOVE THIS */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="space-y-1">
                  <textarea
                    {...register("message", { required: "Required" })}
                    rows="5"
                    placeholder="ENTER YOUR MESSAGE DATA..."
                    className="w-full p-3 focus:outline-none transition-all resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--yellow-border-soft)",
                      color: "var(--white)",
                    }}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* CYBER BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background:
                      "linear-gradient(to right, var(--yellow-primary), var(--yellow-hover))",
                    border: "1px solid var(--yellow-primary)",
                    color: "var(--black)",
                  }}
                  className="w-full font-bold py-4 px-6 rounded-2xl tracking-widest uppercase transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT COLUMN STACK (Spans 5 columns) --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* 1. MAP PANEL */}
            <CollegeLocationMap/>

            {/* 2. INFO PANEL */}
            <ContactInfoPanel/>

          </div>

          {/* FACULTY SECTION */}
          {/* <FacultyCoordinator/> */}

          {/* FAQ SECTION (Accordion) */}
          <FaqAccordian/>
        </div>
      </div>
    </LetterGlitch>
  );
};

export default ContactSection;
