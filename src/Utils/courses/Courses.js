import './courseStyle.css'
import { Container } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Courses = () => {
  return (
    <div id="coirses">
      <Container>
        <div className="course_head">
          <h2>Our Courses</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
          <hr />
        </div>

        <div className="course_holder">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>HUMAN RESOURCE MANAGEMENT</h3>
                <ul>
                  <li>BUSINESS LAW</li>
                  <li>HUMAN RESOURCE DEVELOPMENT 1</li>
                  <li>BUSINESS MANAGEMENT & ADMINISTRATION</li>
                  <li>INTERNATIONAL BUSINESS COMMUNICATION</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>INFORMATION TECHNOLOGY- (WAEC ABCE)</h3>
                <ul>
                  <li>MARKETING</li>
                  <li>HUMAN RESOURCE</li>
                  <li>INFORMATION SYSTEMS</li>
                  <li>INFORMATION TECHNOLOGY</li>
                  <li>HARDWARE & NETWORKING</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>COMMERCIAL AND PROJECT MANAGEMENT</h3>
                <ul>
                  <li>COMMERCIAL MANAGEMENT</li>
                  <li>PROJECT MANAGEMENT</li>
                  <li>RISK MANAGEMENT</li>
                  <li> LOGISTICS & SUPPLY CHAIN MANAGEMENT</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>BUSINESS ADMINISTRATION</h3>
                <ul>
                  <li>BUSINESS MANAGEMENT & ADMINISTRATION</li>
                  <li>INTERNATIONAL BUSINESS COMMUNICATIONS</li>
                  <li>MARKETING</li>
                  <li>NUMERACY & STATISTICS</li>
                  <li>ACCOUNTING</li>
                  <li>BUSINESS LAW</li>
                  <li>ECONOMICS FOR BUSINESS</li>
                  <li>ORGANISATIONAL BEHAVIOUR</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>HEALTH & SAFETY MANAGEMENT</h3>
                <ul>
                  <li>ESSENTIALS OF HEALTH & SAFETY MANAGEMENT</li>
                  <li>WORKING PRACTICES, HAZARDS & CONTROLS</li>
                  <li>WORKING ENVIRONMENT & OCCUPATIONAL HEALTH</li>
                  <li>ACCIDENT & EMERGENCY PROCEDURES</li>
                  <li>FRAMEWORK FOR SUCCESSFUL HEALTH & SAFETY MANAGEMENT</li>
                  <li>PROMOTING A POSITIVE HEALTH & SAFETY CULTURE</li>
                  <li>PRINCIPLES OF CONTROL</li>
                  <li>EFFECTIVE LEADERSHIP OF HEALTH & SAFETY</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>JOURNALISM & MEDIA STUDIES</h3>
                <ul>
                  <li>SUB EDITING</li>
                  <li>MEDIA LAW & ETHICS</li>
                  <li>NEWSPAPER REPORTING</li>
                  <li>BROADCAST JOURNALISM</li>
                  <li>FREELANCE & FEATURE WRITING</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>PURCHASING & SUPPLY MANAGEMENT</h3>
                <ul>
                  <li>STORES MANAGEMENT & STOCK CONTROL</li>
                  <li>QUANTITATIVE METHODS FOR MANAGERS</li>
                  <li>SUPPLY CHAIN MANAGEMENT</li>
                  <li>CUSTOMER SERVICE</li>
                  <li>NEGOTIATION</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>COMPUTER SCIENCE & CYBER SECURITY</h3>
                <ul>
                  <li>COMPUTER SYSTEMS</li>
                  <li>SOFTWARE TESTING</li>
                  <li>COMPUTER SCIENCE</li>
                  <li>COMPUTER SECURITY</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>MARKETING</h3>
                <ul>
                  <li>ADVERTISING</li>
                  <li>MARKETING</li>
                  <li>PUBLIC RELATIONS</li>
                  <li>QUANTITATIVE METHODS FOR MANAGERS</li>
                  <li>INTERNATIONAL BUSINESS COMMUNICATION</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>HOSPITALITY MANAGEMENT</h3>
                <ul>
                  <li>FUNDAMENTALS OF THE HOTEL & CATERING INDUSTRY</li>
                  <li>HOUSEKEEPING & ACCOMMODATION STUDIES</li>
                  <li>RESTAURANT SERVICES</li>
                  <li>FRONT OFFICE OPERATIONS & ADMINISTRATION</li>
                  <li>FOOD AND BEVERAGE MANAGEMENT</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>OFFICE MANAGEMENT - (WAEC ABCE)</h3>
                <ul>
                  <li>OFFICE MANAGEMENT - (WAEC ABCE)</li>
                  <li>INFORMATION TECHNOLOGY</li>
                  <li>OFFICE ADMINISTRATION AND PRACTICE</li>
                  <li>BUSINESS LAW</li>
                  <li>MARKETING</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>PUBLIC RELATIONS</h3>
                <ul>
                  <li>INTERNATIONALL BUSINESS COMMUNICATION</li>
                  <li>BUYER BEHAVIOUR & CONSUMERISM</li>
                  <li>PUBLIC RELATIONS</li>
                  <li>ADVERTISING</li>
                  <li>MARKETING</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>BUSINESS ADMINISTRATION - (WAEC ABCE)</h3>
                <ul>
                  <li>BUSINESS COMMUNICATIONS</li>
                  <li>MARKETING</li>
                  <li>HUMAN RESOURCE MANAGEMENT</li>
                  <li>BUSINESS FINANCE</li>
                  <li>BUSINESS LAW</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course">
                <div className="cou_img">
                  <img src="./image/ss3.jpg" alt="" />
                </div>
                <h3>ACCOUNTING AND FINANCE</h3>
                <ul>
                  <li>BOOKKEEPING</li>
                  <li>BUSINESS MANAGEMENT & ADMINISTRATION</li>
                  <li>ECONOMICS FOR BUSINESS</li>
                  <li>NUMERACY & STATISTICS</li>
                  <li>ACCOUNTING II</li>
                  <li>BUSINESS LAW</li>
                  <li>COMPUTER APPRECIATION & APPLICATIONS</li>
                  <li>COST ACCOUNTING</li>
                </ul>
                <button>Apply Now</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Courses
