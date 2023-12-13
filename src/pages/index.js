import ContactModalPopUp from "@/components/contact-modal-popup/contact-modal-popup";
import NodHeader from "@/components/layout/header";
import HomePage from "@/components/nod-pages/home/home";
import WhatsappButton from "@/components/whatsapp_button/whatsapp_button";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("/#home");
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContactPopup(true);
    }, 5000);
  }, []);

  return (
    <>

      <ContactModalPopUp
        show={showContactPopup}
        setShow={setShowContactPopup}
        
      />
      <NodHeader
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <HomePage
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <WhatsappButton/>
    </>
  );
};

export default Home;
