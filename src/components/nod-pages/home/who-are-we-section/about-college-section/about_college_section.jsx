import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about_college_section.module.scss";
import { useState } from "react";
import { Check2 } from "react-bootstrap-icons";

const AboutCollege = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <CustomContainer>
      <div className={`${styles.about_college} ${expanded && styles.expanded}`}>
        <div>
          <h4>About Our College</h4>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; The U S HEALTH ACADEMY, COIMBATORE AND
            NILGIRIS, is a private institution. With a legacy of excellence, we
            empower future healthcare leaders through cutting-edge courses,
            experienced faculty, and state-of-the-art facilities. Our commitment
            to advancing paramedical knowledge ensures that our graduates
            thrive in this dynamic field, shaping a healthier tomorrow. Join us
            in this journey of discovery and innovation.
            {/* The college is approved by BHARAT SEVAK SAMAJ, NEW
            DELHI. */}
          </p>
        </div>
        <div className={`${!expanded ? styles.notExpanded : ""}`}>
          <h4>Our Vision</h4>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;Our goal is to be the national leader
            among academic health centres of Nursing and Allied Health Sciences.
            We are building on our traditional mission of patient care, health
            education and research by:
          </p>
          <ul>
            <li>
              <div className={styles.vision_item}>
                {/* <Check2 /> */}
                <p>
                  Creating innovation in nursing and delivery of health care.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.vision_item}>
                {/* <Check2 /> */}
                <p>
                  Educating nurses and paramedical technicians in an appropriate
                  learning environment to be efficient and safe practitioners by
                  adapting our organization to the changing environment.
                </p>
              </div>
            </li>

            {/* <li>
              <div className={styles.vision_item}>
               

                <p>
                  Educating nurses and paramedical technicians in an appropriate
                  learning environment to be efficient and safe practitioners by
                  adapting our organization to the changing environment.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
        <div className={`${!expanded ? styles.notExpanded : ""}`}>
          <h4>Our Mission</h4>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;The mission of our College of Nursing /
            Allied Health Sciences is to provide exemplary and innovative
            education, research, practice, service, and leadership that improves
            state health, national health and global health.
          </p>
        </div>
        <small
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          ...{expanded ? "Less" : "More"}
        </small>
      </div>
    </CustomContainer>
  );
};

export default AboutCollege;
