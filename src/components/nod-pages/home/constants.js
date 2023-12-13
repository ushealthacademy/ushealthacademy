import BannerSection from "./banner-section/banner_section";
import Courses from "./courses-section/courses_section";
import FooterSection from "./footer-section/footer-section";
import InterestSection from "./interest-section/interest-section";
import WhoAreWeSection from "./who-are-we-section/who-are-we-section";

export const HOME_SECTIONS = [
  {
    id: "home",
    varient: "banner",
    name: "Home",
    // heading: 'Hello',
    component: <BannerSection />,
    inEffect: "fade-in",
  },
  {
    id: "whoAreWe",
    varient: "white",
    name: "About Us",
    // heading: 'Who Are We?',
    component: <WhoAreWeSection />,
    inEffect: "fade-in",
  },
  {
    id: "courses",
    varient: "courses",
    name: "Courses",
    heading: "Courses We Offer",
    component: <Courses />,
    inEffect: "fade-in",
  },
  {
    id: "resgister",
    varient: "interses",
    name: "Register",
    // heading: "Cources We Offer",
    component: <InterestSection />,
    inEffect: "fade-in",
  },
  {
    id: "contact",
    varient: "contact",
    name: "Contact Us",
    // heading: "Cources We Offer",
    component: <FooterSection />,
    // inEffect: "fade-in",
  },
];

export const COURSES = [
  {
    id: "medical_lab_technology",
    name: "DIPLOMA IN MEDICAL LAB TECHNOLOGY",
    shortName: "Medical Lab Technology",
    details:' The science that deals with the prevention, diagnosis, and treatment of various diseases with clinical laboratory tests.'
  },
  {
    id: "operation_theatre_technology",
    name: " DIPLOMA IN OPERATION THEATRE TECHNOLOGY",
    shortName: "Operation Theatre Technology",
    details:'Concerned with the diagnosis, treatment, and prevention of diseases and ailments through the use of clinical laboratory tests.'
  },
  {
    id: "critical_care_management",
    name: "DIPLOMA IN CRITICAL CARE MANAGEMENT",
    shortName: "Critical Care Management",
    details:'Medical care for people who have life-threatening injuries and illnesses, usually takes place in an intensive care unit (ICU).'
  },
  {
    id: "x_ray_technology",
    name: "DIPLOMA IN X-RAY TECHNOLOGY",
    shortName: "X-Ray Technology",
    details:'Deals with electromagnetic radiation that enters the human body and uses photographic film to depict solid structures.'
  },
  {
    id: "patient_care",
    name: "DIPLOMA IN PATIENT CARE",
    shortName: "Patient Care",
    details:'Designed to imparts the knwoledge for Nursing and caring patients. Patient Care is an important part of healthcare sector.'
  },
];
