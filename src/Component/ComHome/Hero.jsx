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
          We are excited to have <br /> you join our educational community.
          <br /> Get ready for an inspiring journey of learning and growth
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
            <Button className="under_btnn">
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
            <Button className="under_btnn">
              <Link
                to="/enrollunderg"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Apply online
              </Link>
            </Button>
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
