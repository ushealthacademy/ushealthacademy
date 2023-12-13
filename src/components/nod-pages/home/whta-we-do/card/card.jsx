import { Col } from "react-bootstrap";
import styles from "./card.module.scss";

const Card = ({ data,index }) => {
  return (
    <Col xs={12} sm={6} lg={4} xl={3}>
      <div className={styles.card} data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
        <div className={styles.top}>
          <div
          
          >{data.icon}</div>
        </div>
        <h1>{data.head}</h1>
        <p>{data.content}</p>
      </div>
    </Col>
  );
};

export default Card;
