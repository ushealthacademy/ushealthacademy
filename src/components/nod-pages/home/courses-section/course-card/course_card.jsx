import { Image } from "react-bootstrap";
import styles from "./course-card.module.scss";
import CustomButton from "@/components/ui/custom-button/custom_button";
import { ArrowRight } from "react-bootstrap-icons";
import { useState } from "react";
import ContactModalPopUp from "@/components/contact-modal-popup/contact-modal-popup";

const CourseCard = (props) => {
  const { courseData } = props;

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_img}>
          <Image src={`/images/courses/${courseData.id}.jpg`} fluid alt="img" />
          <div className={styles.overlay}>Register Now</div>
        </div>
        <div className={styles.course_details}>
          <p className={styles.head}>{courseData.name}</p>
          <p className={styles.detail}>{courseData.details}</p>
        </div>
        <div className={styles.control}>
          <CustomButton
          clickHandler={()=>{
            setShowPopup(true)
          }}
          >
            Enroll Now &nbsp;
            <ArrowRight />
          </CustomButton>
        </div>
      </div>
      <ContactModalPopUp
        show={showPopup}
        setShow={setShowPopup}
        dfeaultCourse={courseData.name}
      />
    </>
  );
};

export default CourseCard;
