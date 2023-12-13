import { Carousel, Image } from "react-bootstrap";
import styles from "./banner_section.module.scss";
// import { useRouter } from "next/router";

const BannerSection = () => {
  // const router = useRouter();

  return (
    <div className={styles.banner_section}>
      <Carousel>
      <Carousel.Item>
        <Image src="/images/banner/1.jpg" fluid alt="1"/>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image src="/images/banner/3.jpg" fluid alt="1"/>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/images/banner/2.jpg" fluid alt="1"/>

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default BannerSection;
