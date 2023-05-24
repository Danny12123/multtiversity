import './courseStyle.css'
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import AOS from "aos";
import "aos/dist/aos.css";
import Diploma from './CoursesTab/Diploma';
import Hnd from './CoursesTab/Hnd';
import Degree from './CoursesTab/Degree';
import BootCamp from './CoursesTab/BootCamp';

const Courses = () => {
  const [coursesTab, setCoursesTab] = useState(1);
  const handleCourseTab = (tab) => setCoursesTab(tab);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="coirses">
      <Container>
        <div className="course_head" data-aos="fade-up">
          <h2>Our Courses</h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p> */}
          <hr />
        </div>

        <div className="course_tab">
          <ul>
            <li
              className={coursesTab === 1 ? "course_active" : null}
              onClick={() => handleCourseTab(1)}
            >
              Programs
            </li>
            {/* <li
              className={coursesTab === 2 ? "course_active" : null}
              onClick={() => handleCourseTab(2)}
            >
              HND Programs
            </li>
            <li
              className={coursesTab === 3 ? "course_active" : null}
              onClick={() => handleCourseTab(3)}
            >
              Degree Programs
            </li> */}
            <li
              className={coursesTab === 4 ? "course_active" : null}
              onClick={() => handleCourseTab(4)}
            >
              BootCamp
            </li>
          </ul>
        </div>

        <div className="course_tab_box" data-aos="fade-up">
          <div
            className={
              coursesTab === 1 ? "cou_tab_box_item_active" : "cou_tab_box_item"
            }
          >
            <Diploma />{" "}
          </div>
          {/* <div
            className={
              coursesTab === 2 ? "cou_tab_box_item_active" : "cou_tab_box_item"
            }
          >
            <Hnd />{" "}
          </div>
          <div
            className={
              coursesTab === 3 ? "cou_tab_box_item_active" : "cou_tab_box_item"
            }
          >
            <Degree />{" "}
          </div> */}
          <div
            className={
              coursesTab === 4 ? "cou_tab_box_item_active" : "cou_tab_box_item"
            }
          >
            <BootCamp />{" "}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Courses
