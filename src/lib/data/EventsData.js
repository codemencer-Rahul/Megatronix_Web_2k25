import rebootPoster from "../../assets/images/rebootPoster.jpg";
import orientationPoster from "../../assets/images/orientationPoster.jpeg";
import  { UsersIcon, RocketIcon, CodeXmlIcon } from "../../components/ui/icons";

 const upcomingEvents = [
    {
      title: "Workshop on Robotics, Coding, Electrical and Civil",
      date: "TBD",
      time: "3:00 PM - 5:00 PM",
      type: "Workshop",
    },
    {
      title: "Techxtra",
      date: "TBD",
      time: "10:00 AM - 5:00 PM",
      type: "Flagship Event",
    },
    {
      title: "Paridhi",
      date: "TBD",
      time: "10:00 AM - 5:00 PM",
      type: "Flagship Event",
    },
  ];

  const mainEvents = [
    {
      key: "reboot",
      title: "Reboot 2025",
      description:
        "REBOOT 2K25 is a dynamic online tech event by Megatronix, bringing innovators together through exciting challenges, collaboration, and opportunities to showcase creativity and skills.",
      date: "July 6 - 12, 2025",
      location: "Online",
      time: "NA",
      participants: "200+ Participants",
      icon: RocketIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "completed",
      comingSoon: false,
      poster: rebootPoster,
    },

    {
      key: "orientation",
      title: "Orientation for 1st year Students",
      description:
        "An orientation program for first-year MSIT students introducing club domains, activities, and upcoming events, with interactive sessions to help students explore interests and get involved.",
      date: "Feb 2nd-6th, 2026",
      location: "JC Bose Auditorium ( BSH Seminar Hall ), MSIT",
      time: "3:00 PM - 5:00 PM",
      participants: "100+ Participants",
      icon: UsersIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "completed",
      comingSoon: false,
      poster: orientationPoster,
    },
    {
      key: "workshop",
      title: "Workshops for 1st year Students",
      description:
        "Comprehensive workshop series covering latest technologies including AIML, Electronics, Web Development, Robotics and more",
      date: "15th Dec, 2025",
      location: "MSIT Campus",
      time: "3:00 PM - 5:00 PM",
      participants: "50 per session",
      icon: CodeXmlIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
    {
      key: "techxtra",
      title: "Intra College Tech Fest ( Techxtra )",
      description:
        "Techxtra is Megatronix’s flagship intra-college tech fest celebrating innovation through thrilling competitions in robotics, electrical, civil and coding domains.",
      date: "TBD",
      location: "MSIT Campus",
      time: "10:00 AM - 5:00 PM",
      participants: "200+ Participants",
      icon: CodeXmlIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
    {
      key: "paridhi",
      title: "Paridhi",
      description:
        "Our flagship annual tech festival featuring cutting-edge technology showcases, competitions, and workshops",
      date: "TBD",
      location: "MSIT Campus",
      time: "10:00 AM - 5:00 PM",
      participants: "500+ Expected",
      icon: RocketIcon,
      gradient: "from-teal-800/40 to-red-500/40",
      status: "upcoming",
      comingSoon: true,
      poster: null,
    },
  ];

  export default {upcomingEvents, mainEvents}