import React, {useState}  from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Hero = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div id="hero">
      <div className="hero_content">
        <h2>Multiversity Of Africa </h2>
        <p>
          Leading the Pack is fun when you are EXACTLY what Employers need in
          this post-covid era. Any day, Anywhere; you are guaranteed of
          STANDING-TALLER!
        </p>
        <button onClick={handleShow}>Enroll now</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Multiversity Of Africa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Executive Short Courses</h3>
            <Button>
              <Link
                to="/enroll"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Apply online
              </Link>
            </Button>
          </div>
          <div>
            <h3>Undergraduate Courses</h3>
            <Button>Apply online</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Hero
