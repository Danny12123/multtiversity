import "./style.css";
import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="vis_bg" data-aos="fade-up">
      <Container>
        <div className="vis_head">
          <h2>Our Vision</h2>
          <hr />
        </div>
        <div>
          <p>
            To make higher education possible, for the African Dream through
            collaborations
            <br /> and revised educational contents for the African youths who
            are ready for ownership!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
