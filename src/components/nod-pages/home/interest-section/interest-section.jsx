import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./interest-section.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom-button/custom_button";

const InterestSection = () => {
  return (
    <div className={styles.interest_section}>
      <div className={styles.img_overlay} />
      <CustomContainer>
        <Row>
          <Col md={7}>
            <div className={styles.content} data-aos="zoom-in-down">
              <h1>INTERESTING IN TAKING A COURSE?</h1>
              <p>
                If you register now, you will get one course for free! Be quick,
                because only the first 100 submissions will be picked!
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div className={styles.register_box} data-aos="zoom-in">
              <div className={styles.top}>
                <h1>Register Now</h1>
              </div>
              <div  className={styles.bottom}>
                <input placeholder="Your Name" />
                <input placeholder="Your Phone No" />
                <input placeholder="Course Name" />
                <CustomButton>Register</CustomButton>
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
};

export default InterestSection;
