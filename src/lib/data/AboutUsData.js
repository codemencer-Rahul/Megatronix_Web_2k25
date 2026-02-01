//import the icons from lucide-react and custom icons
import {
  Gamepad,
  Trophy
} from "lucide-react";
import { CodeXmlIcon, TargetIcon, RocketIcon } from "../../components/ui/icons";

//import the vides from assets folder
import gamingEvent from "../../assets/videos/gamingEvent.mp4";
import paridhiVid from "../../assets/videos/paridhiVid.mp4";
import techxtraVid from "../../assets/videos/techxtraVid.mp4";
import warVid from "../../assets/videos/warVid.mp4";

//importing all the logo from the assets folder
import FriendFm from "../../assets/images/91.9 Friends FM.jpg"
import BengalChess from "../../assets/images/Bengal Chess.jpg"
import BigBasket from "../../assets/images/Bigbasket.png"
import Bloggeradda from "../../assets/images/bloggeradda.jpeg"
import CalcuttaCacophony from "../../assets/images/Calcutta Cacophony.png"
import CollegeRivals from "../../assets/images/cllgrivals.jpeg"
import CocaCola from "../../assets/images/Coca-Cola.jpg"
import GamersGrub from "../../assets/images/gamersGrub.jpeg"
import Gfg from "../../assets/images/gfglogo.png"
import IntelSoftware from "../../assets/images/Intel Software.jpg"
import Lic from "../../assets/images/LIC-Logo.jpg"
import Microcenter from "../../assets/images/Micro Center India.png"
import CodingNinja from "../../assets/images/Coding Ninja.png"
import OhKolkata from "../../assets/images/Oh!Kolkata.jpg"
import Otaku from "../../assets/images/otaku.jpeg"
import PizzaHut from "../../assets/images/Pizza Hut.jpg"
import Popski from "../../assets/images/popski.jpeg"
import SIUK from "../../assets/images/SI-UK.jpg"
import SITICable from "../../assets/images/SITI Digital Cable Television.png"
import Tatacopper from "../../assets/images/tatacopper.jpeg"
import Tea from "../../assets/images/tea.jpeg"
import Xenon from "../../assets/images/Team Xenon.jpg"
import Tvs from "../../assets/images/TVS.png"
import WowMomo from "../../assets/images/Wow! Momo.jpg"

const milestones = [
    {
      year: "2009",
      event: "Megatronix Founded",
      description:
        "In 2009, Megatronix was born as the official technical club of MSIT — a hub for curiosity, innovation, and creativity. What began as a small team with a vision soon became a space where students could explore, experiment, and bring ideas to life.",
    },
    {
      year: "2012",
      event: "First Paridhi",
      description:
        "In 2012, we organized our very first flagship event, Paridhi. It was more than just an event; it marked the beginning of a tradition—a platform where talent could shine and the spirit of innovation could take center stage. Over time, Paridhi grew to become one of Eastern India’s largest technical festivals, uniting creativity, competition, and cutting-edge ideas on a grand stage.",
    },
    {
      year: "2024",
      event: "First 15kg Robo War",
      description:
        "Fast forward to 2024, we witnessed the thrill of our inaugural 15kg Robo War competition. Students engineered, strategized, and battled, turning creativity into action. The event became a testament to the skills and determination nurtured within our community over the years.",
    },
    {
      year: "2025",
      event: "First App Launch",
      description:
        "In 2025, we embraced the digital era by launching our very first official app for Paridhi. This app streamlined event management and registrations, making it easier for participants to engage while showcasing our commitment to innovation and seamless experiences.",
    },
    {
      year: "2025",
      event: "Organized MegaExpo for the first time",
      description:
        "The same year marked the debut of MegaExpo, a grand platform where ideas transformed into impact. From technological innovations to social solutions, young innovators from multiple institutions and diverse backgrounds pitched their bold concepts to panels of startup founders, industry experts, and mentors, igniting collaboration and inspiration across the campus.",
    },
    {
      year: "2025",
      event: "Organized Proto-X for the first time",
      description:
        "Proto-X made its first appearance as an inter-college event, welcoming innovators beyond just college students from diverse backgrounds. Participants built and showcased hardware and software prototypes, transforming ideas into tangible solutions. Guided by experts, the event became a hands-on journey of learning and discovery.",
    },
    {
      year: "2026",
      event: "14 Years Strong",
      description:
        "By 2026, Megatronix marked 14 unforgettable years of dreams, dedication, and determination. From the first spark of an idea to shared moments of pride, our journey has been driven by passion, creativity, and a deep sense of belonging. Each milestone brought us closer as a family, inspiring generations and leaving a legacy of growth and endless possibilities.",
    },
  ];

  const events = [
      {
        title: "Gaming Events",
        description:
          "Quarterly gaming events bringing students together in thrilling battles of strategy, skill, and teamwork.",
        icon: Gamepad,
        videoSrc: gamingEvent,
      },
  
      {
        title: "Paridhi",
        description:
          "Our flagship annual technical festival featuring thrilling competitions, workshops, and cutting-edge tech showcases.",
        icon: Trophy,
        videoSrc: paridhiVid,
      },
      {
        title: "TechXtra",
        description:
          "An annual intra-college competition sparking imagination and experimentation among first-year students.",
        icon: CodeXmlIcon,
        videoSrc: techxtraVid,
      },
      {
        title: "RoboWar",
        description:
          "Intense robotics combat where participants design and battle robots in a controlled arena.",
        icon: RocketIcon,
        videoSrc: warVid,
      },
      {
        title: "Coding Competitions",
        description:
          "Quarterly coding competitions and hackathons where creativity meets real-world problem-solving.",
        icon: CodeXmlIcon,
      }, 
      {
        title: "Robo Race",
        description:
          "Fast-paced robotics competition focused on speed, control, and precision through challenging tracks.",
        icon: TargetIcon,
      },
      {
        title: "Robotics Workshops",
        description:
          "Hands-on workshops introducing students to fundamentals of robotics and autonomous systems.",
        icon: TargetIcon,
      }
    ];

    
      const logo1 = [
        {
          src: FriendFm,
          alt: "91.9 Friends FM",
        },
        {
          src: BengalChess,
          alt: "Bengal Chess",
        },
        {
          src: BigBasket,
          alt: "Big Basket",
        },
        {
          src: Bloggeradda,
          alt: "Bloggeradda",
        },
        {
          src: CalcuttaCacophony,
          alt: "Calcutta Cacophony",
        },
        {
          src: CollegeRivals,
          alt: "College Rivals",
        },
        {
          src: CocaCola,
          alt: "Coca Cola",
        },
        {
          src: GamersGrub,
          alt: "Gamers Grub",
        },
        {
          src: Gfg,
          alt: "GeeksforGeeks",
        },
        {
          src: IntelSoftware,
          alt: "Intel Software",
        },
        {
          src: Lic,
          alt: "LIC",
        },
        {
          src: Microcenter,
          alt: "Micro Center",
        }
      ];
    
      const logo2 = [
        {
          src: CodingNinja,
          alt: "Coding Ninjas",
        },
        {
          src: OhKolkata,
          alt: "Ohi Kolkata",
        },
        {
          src: Otaku,
          alt: "Otaku",
        },
        {
          src: PizzaHut,
          alt: "Pizza Hut",
        },
        {
          src: Popski,
          alt: "Popski",
        },
        {
          src: SIUK,
          alt: "Study in UK",
        },
        {
          src: SITICable,
          alt: "SITI Cable",
        },
        {
          src: Tatacopper,
          alt: "Tata Copper",
        },
        {
          src: Tea,
          alt: "Tea",
        },
        {
          src: Xenon,
          alt: "Xenon",
        },
        {
          src: Tvs,
          alt: "TVS",
        },
        {
          src: WowMomo,
          alt: "Wow! Momo",
        },
      ]
    

  export default { milestones, events, logo1, logo2 };