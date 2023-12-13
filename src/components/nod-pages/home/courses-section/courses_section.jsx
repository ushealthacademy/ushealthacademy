import { Container } from "react-bootstrap";
import styles from "./courses_section.module.scss";
import CourseCard from "./course-card/course_card";
import { COURSES } from "../constants";

const Courses = () => {
  return (
    <div className={styles.courses_section}>
      <Container className={styles.courses}>
        <h5>
          Explore our diverse range of courses, designed to enhance your skills
          and knowledge. Choose from expert-led classes to enrich your learning
          journey today!
        </h5>

        <div className={styles.cards}>
          {COURSES.map((course) => (
            <CourseCard key={course.id} courseData={course} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
