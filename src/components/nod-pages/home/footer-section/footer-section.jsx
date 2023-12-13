import { Col, Image, Row } from "react-bootstrap";
import styles from "./footer-section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Link from "next/link";
import {
  EnvelopeAtFill,
  GeoAltFill,
  Instagram,
  TelephoneFill,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import { COURSES, HOME_SECTIONS } from "../constants";
import { useState } from "react";
import ContactModalPopUp from "@/components/contact-modal-popup/contact-modal-popup";
// import Image from "react-bootstrap";

const FooterSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <ContactModalPopUp
        show={!!showPopup}
        setShow={setShowPopup}
        dfeaultCourse={showPopup}
      />

      

      <footer className={styles.footer_section}>
        <CustomContainer>
          <h1>U S HEALTH ACADEMY</h1>
          <hr />
          <Row>
            <Col xs={12} md={4}>
              <div className={`${styles.footer_items} ${styles.contact}`}>
                <h4>Contact Us</h4>
                <div>
                  <GeoAltFill />
                  <p>Coimbatore</p>
                </div>
                <div>
                  <TelephoneFill />
                  <p>+91 82483 66954</p>
                </div>
                <div>
                  <EnvelopeAtFill />
                  <p>jrkhealth@outlook.com</p>
                </div>
                <div>
                  <EnvelopeAtFill />
                  <p>jrkhelp@outlook.com</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={styles.footer_items}>
                <h4>Links</h4>
                {HOME_SECTIONS.slice(0, -1).map((section) => (
                  <Link href={`#${section.id}`} key={section.id}>
                    {section.name}
                  </Link>
                ))}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={styles.footer_items}>
                <h4>Courses</h4>
                {COURSES.map((course) => {
                  return (
                    <span
                      key={course.id}
                      onClick={() => {
                        setShowPopup(course.name);
                      }}
                    >
                      {course.shortName}
                    </span>
                  );
                })}
              </div>
            </Col>
          </Row>
          <div className={styles.social}>
            <p>Find Us on</p>
            <div>
              <Whatsapp />
              <Instagram />
              <Youtube />
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <p>
              Designed & Maintained By{" "}
              <Link href="https://www.nammaoorudev.online/" target="_blank">
                nammaoorudev.online
              </Link>
            </p>
          </div>
        </CustomContainer>
      </footer>
    </>
  );
};

export default FooterSection;
