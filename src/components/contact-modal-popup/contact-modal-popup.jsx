import { useState } from "react";
import { COURSES } from "../nod-pages/home/constants";
import CustomButton from "../ui/custom-button/custom_button";
import styles from "./contact-modal-popup.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const { Modal } = require("react-bootstrap");

const ContactModalPopUp = (props) => {
  const onHide = () => props.setShow(false);

  const { dfeaultCourse } = props;

  const [formControl, setFormControl] = useState({
    name: "",
    phone: "",
    course: dfeaultCourse || COURSES[0].name,
  });

  const sendMessage = () => {
    let uri = `Name : ${formControl.name}  Phone : ${formControl.phone} Course : ${formControl.course}
    `;
    let encoded = encodeURI(uri);

    const waLink = `https://wa.me/918248366954?text=${encoded}`;

    return waLink;
  };

  return (
    <Modal
      //   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={onHide}
      className={styles.contact_popup}
    >
      <div className={styles.register_box}>
        <div className={styles.top}>
          <h1>Register Now</h1>
        </div>
        <div className={styles.bottom}>
          <input
            placeholder="Your Name"
            value={formControl.name}
            onChange={(e) => {
              setFormControl((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <input
            placeholder="Your Phone No"
            value={formControl.phone}
            onChange={(e) => {
              setFormControl((prev) => ({
                ...prev,
                phone: e.target.value,
              }));
            }}
          />
          <select
            value={formControl.course}
            onChange={(e) => {
              setFormControl((prev) => ({
                ...prev,
                course: e.target.value,
              }));
            }}
          >
            {COURSES.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Modal.Footer>
        {formControl.name || !formControl.phone.length < 10 ? (
          <Link href={sendMessage()} target="_blank">
            <CustomButton
              disabled={!formControl.name || formControl.phone.length < 10}
            >
              Register
            </CustomButton>
          </Link>
        ) : (
          <CustomButton
            disabled={!formControl.name || formControl.phone.length < 10}
          >
            Register
          </CustomButton>
        )}
        <CustomButton clickHandler={onHide}>Close</CustomButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModalPopUp;
