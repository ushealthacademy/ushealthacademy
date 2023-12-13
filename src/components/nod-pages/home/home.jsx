const { default: Section } = require("./section/section");
import { useEffect } from "react";
import { HOME_SECTIONS } from "./constants";
import { useRouter } from "next/router";

const HomePage = (props) => {

  const {currentSection,setCurrentSection} = props;

const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".home_section");
      
      let visibleDiv = null
      for(const section of sections){
        const rect = section.getBoundingClientRect();
       // if(Math.ceil(rect.top) <= 100 && Math.ceil(rect.bottom) >=  0){
        if(Math.ceil(rect.top) <= 100 && Math.ceil(rect.bottom) >=  window.innerHeight){
        // if(Math.ceil(rect.top) <= window.innerHeight/2 && Math.ceil(rect.bottom) >= window.innerHeight/2){
          visibleDiv = section;
        }
      }

      if(visibleDiv){
        const updatedPath = `/#${visibleDiv.id}`
        window.history.replaceState(null, '', updatedPath)
        // console.log();
        if(window.location.hash !== currentSection){
          setCurrentSection(window.location.hash)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);


    // return ()=>{
    //   window.removeEventListener('scroll')
    // }
  }, []);

  return (
    <div >
      {HOME_SECTIONS.map((section) => (
        <Section
          varient={section.varient}
          key={section.id}
          heading={section.heading}
          inEffect={section.inEffect}
          id={section.id}
        >
          {section.component}
        </Section>
      ))}
    </div>
  );
};

export default HomePage;
