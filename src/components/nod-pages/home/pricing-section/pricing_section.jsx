import { Col, Container, Row } from "react-bootstrap";
import styles from "./pricing_section.module.scss";

import PriceCard from "./price-card/price_card";
import { useState } from "react";
import { PRICINGS_DATA } from "./cosntants";
import Nodbutton from "@/components/nod-ui/nod-button/nod_button";

const PricingSection = () => {
  const [showInfoFor, setShowInfoFor] = useState(null);

  return (
  <Container>
      <div className={styles.pricing_section}>
      <Row>
        {PRICINGS_DATA.map((priceData, idx) => (
          <PriceCard
            key={priceData.id}
            priceData={priceData}
            index={idx}
            showInfoFor={showInfoFor}
            setShowInfoFor={setShowInfoFor}
          />
        ))}
      </Row>
      <br/>
      <Row>
        <Nodbutton>Quote for 2999/-</Nodbutton>
      </Row>
      <br/>
    </div>
  </Container>
  );
};

export default PricingSection;
