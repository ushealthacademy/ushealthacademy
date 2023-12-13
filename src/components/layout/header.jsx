const { default: NodLogo } = require("../nod-ui/nod-logo/nod_logo");
import { useEffect, useState } from "react";


import styles from "./header.module.scss";
import HeaderDrawer from "./header-drawer/header_drawer";

import Link from "next/link";

import { HOME_SECTIONS } from "../nod-pages/home/constants";
import {

  ArrowRight,
  EnvelopeAtFill,
  List,
  TelephoneFill,
} from "react-bootstrap-icons";
import CustomContainer from "../ui/custom_container/custom_container";

const NodHeader = (props) => {
  const { currentSection, setCurrentSection } = props;

  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={styles.nod_header_wrap}>
        <div className={`${styles.header_top} ${scrolled && styles.hidden}`}>
          <CustomContainer className={styles.wrapper}>
            <div>
              <div className={styles.left}>
                <Link href='#resgister'>
                Register With Us <ArrowRight/>
                </Link>
              </div>

              <div className={styles.contact}>
                <div>
                  <TelephoneFill
                    style={{ marginBottom: "4px", fontSize: "13px" }}
                  />
                  <p>+91 8248366954</p>
                </div>

                |

                <div>
                  <EnvelopeAtFill
                    style={{ marginBottom: "4px", fontSize: "16px" }}
                  />
                  <p>jrkhealth@outlook.com</p>
                </div>
              </div>
            </div>
          </CustomContainer>
        </div>
        <CustomContainer className={styles.nod_header}>
          <div className={styles.header_logo}>
            <NodLogo />
            <p>U S Health Academy</p>
          </div>
          <nav className={styles.nav}>
            {HOME_SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`${styles.nav_link} ${
                  currentSection?.includes(section.id) && styles.active
                }`}
              >
                <p>{section.name}</p>
              </Link>
            ))}
          </nav>
          <nav className={styles.menu_toogle}>
            <List
              onClick={() => {
                setShowDrawer(true);
              }}
            />
          </nav>
        </CustomContainer>
      </header>
      <HeaderDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
};
export default NodHeader;
