import { Col, Image, Row } from "react-bootstrap";
import styles from "./who-are-we-section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import AboutCollege from "./about-college-section/about_college_section";
import Link from "next/link";

const WhoAreWeSection = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.cards_wrapper}>
        <CustomContainer>
          <Row>
            <Col xs={12} md={6}>
              <Link href="#courses">
                <div className={styles.card} data-aos="fade-right">
                  <div className={styles.left}>5</div>
                  <div>
                    <p className={styles.head}>Courses</p>
                    <p className={styles.details}>
                      We currently offer 5 courses
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.card} data-aos="fade-left">
                <div className={styles.left}>2</div>
                <div>
                  <p className={styles.head}>Locations</p>
                  <p className={styles.details}>
                    We currently operate in 2 locations
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </div>

      <AboutCollege />

      <div className={styles.about}>
        <CustomContainer>
          <div className={styles.box}>
            <div className={styles.img} data-aos="flip-left">
              <Image src="/images/owner.jfif" fluid alt="sq" />
            </div>

            <div className={styles.details}>
              <p className={styles.name} data-aos="fade-left">
                Mr.JayaramKrishna
              </p>

              <p data-aos="fade-left">
                Mr.JayaramKrishnan, who served in paramedical institutions over
                three decades in teaching and he placed more than five thousand
                students in various medical and paramedical departments.
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
