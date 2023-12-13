const { Col, Row, Image } = require("react-bootstrap");
import { HOME_SECTIONS } from "../../constants";
// import Image from 'next/image';
import {
  Envelope,
  Whatsapp,
  Telephone,
  PersonCircle,
  Instagram,
  Linkedin,
  Link45deg,
  Facebook,
} from "react-bootstrap-icons";
import styles from "./about.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}
    
    >
      <Row style={{margin:'0'}}
    data-aos='fade-left'
      
      >
        <Col XS={3}>
          <Image src="/images/logo/logo.png" fluid alt="logo" />
        </Col>
        <Col xs={9} className={styles.top}>
          <div className={styles.brand}>
            <h1>Namma Ooru</h1>
            <div>
              <hr />
              <small>Dev</small>
              <hr />
            </div>
          </div>
        </Col>
      </Row>

      <div className={styles.details}>
        <div className={styles.contact_details}
    // data-aos='fade-left'
        
        >
          <div>
            <PersonCircle />
            <p>Raja Rathinam</p>
          </div>
          <div>
            <Envelope />
            <p>nammoorudev@gmail.com</p>
          </div>
          <div>
            <Telephone />
            <p>+91 78128 04856</p>
          </div>
          <div>
            <Whatsapp />
            <p>+91 79042 36030</p>
          </div>
        </div>

        <hr />

        <div className={styles.contact_details}>
          {HOME_SECTIONS.map((link) => (
            <div key={link.id}
    // data-aos='fade-right'
            
            >
              <Link45deg />
              <Link href={`#${link.id}`}>
                <p>{link.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.social_media}>
        <div className={styles.head}>
          {/* <hr /> */}
          <p>Find us on</p>
          {/* <hr /> */}
        </div>

        <div className={styles.links}>
          <Link
            href="https://api.whatsapp.com/send?phone=917904236030"
            target="_blank"
          >
            <Whatsapp size="20px" />
          </Link>
          <Link
            href="https://instagram.com/namma_ooru_developer?igshid=MmU2YjMzNjRlOQ=="
            target="_blank"
          >
            <Instagram size="20px" />
          </Link>
          <Link href="#">
            <Facebook size="20px" />
          </Link>
          <Link href="#">
            <Linkedin size="20px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
