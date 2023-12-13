import { Col } from "react-bootstrap";
import { Check, X, XCircleFill, InfoCircleFill } from "react-bootstrap-icons";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";
import styles from "./price_card.module.scss";


const PriceCard = (props) => {
  const { priceData, index, showInfoFor, setShowInfoFor } = props;

 


  return (
    <Col xs={12} md={8} lg={4}>
      <div
        className={`${styles.price_card} ${
          priceData.isRecommended && styles.card_recommended
        }`}

        onClick={() => {
            setShowInfoFor((prev) => (prev === index ? null : index));
          }}
          data-aos="flip-right"
      >
        <div
          className={styles.btn}
          
        >
          {showInfoFor === index ? <XCircleFill /> : <InfoCircleFill />}
        </div>
        <div className={styles.recommended}>
          {priceData.isRecommended && <p>Recommended</p>}
        </div>
        <div className={styles.details}>
          <h1>{priceData.name}</h1>
          <p>{priceData.description}</p>
          <br />
          <small>₹{priceData.actualPrice}</small>
          <h1>₹{priceData.currentPrice}</h1>
          <div className={styles.benifits}>
            {priceData.benifits.map((benifit) => (
              <div className={styles.benifit} key={benifit.id}>
                {benifit.applicable ? (
                  <Check size="30px" />
                ) : (
                  <X size="30px" />
                )}

                <p>{benifit.text}</p>
              </div>
            ))}
          </div>
          <Nodbutton>Get Started</Nodbutton>
        </div>

        {showInfoFor === index && (
          <div className={styles.info}>
            <div>
              {
                <ul>
                  {priceData.info.map((i) => {
                    return (
                      <li key={i.id}>
                        <p>{i.text}</p>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};

export default PriceCard;
