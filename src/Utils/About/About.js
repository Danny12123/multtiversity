import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './about.css';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="about">
      <Container>
        <div className="why_head">
          <h2>About Us</h2>
          <hr />
        </div>
        <Row style={{ margin: "20px 0" }}>
          <Col md>
            <div className="abt_img" data-aos="flip-left">
              <img src="./image/about.jpg" alt="" />
            </div>
          </Col>
          <Col md>
            <div className="abt_content" data-aos="flip-right">
              <p>
                "Empowering the AfriCAN Is Our Hallmark!" So GRAB this smart
                challenge and be Self-Propelling in funding your dreams! "Make
                Money whiles studying with us! Refer as many friends as you can
                and get paid at every count! YES, thats how to make FREE Money"
                "Also, we ensure every student that come to us completes his/her
                course with a well-paying business in hand;" IT'S OUR PRIORITY!
                "Plus, you get borderless qualifications for the global academic
                and professional job market"
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About
