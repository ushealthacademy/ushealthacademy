import {
  BagHeart,
  BoxFill,
  CloudFog2Fill,
  PhoneFlip,
} from "react-bootstrap-icons";

const WHAT_WE_DO = [
  {
    id: "1",
    head: "Responsive Web Design",
    content:
      "We believe in creating websites that look and function flawlessly on all devices. With responsive design, your website will adapt seamlessly to various screen sizes, ensuring an optimal user experience.",
    icon: <PhoneFlip />,
  },
  {
    id: "2",
    head: "E-Commerce Solutions",
    content:
      "Boost your online sales with our powerful e-commerce solutions. We'll create a secure, easy-to-navigate online store that showcases your products and ensures smooth transactions for your customers.",
    icon: <BagHeart />,
  },
  {
    id: "3",
    head: "Web Hosting and Maintenance",
    content:
      "We provide reliable web hosting services and ongoing maintenance to ensure your website is always running smoothly and securely.",
    icon: <CloudFog2Fill />,
  },
  {
    id: "4",
    head: "Content Management",
    content:
      "Take control of your website with our user-friendly CMS platforms. Update and manage your content effortlessly without any technical knowledge.",
    icon: <BoxFill />,
  },
];

export default WHAT_WE_DO;
