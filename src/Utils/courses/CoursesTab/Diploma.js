import React, { useRef, useState } from "react";
import "./ctab.css";

const Diploma = () => {
  return (
    <div>
      <div className="co_select">
        <div className="co_box">
          <h3>INFORMATION TECHNOLOGY- </h3>
          <div className="co_box_content">
            <ul>
              <li> BUSINESS LAW</li>
              <li> HUMAN RESOURCE DEVELOPMENT 1</li>
              <li> BUSINESS MANAGEMENT & ADMINISTRATION</li>
              <li> INTERNATIONAL BUSINESS COMMUNICATION</li>
            </ul>
          </div>
          <button>Apply now</button>
        </div>
        <div className="co_box">
          <h3>INFORMATION TECHNOLOGY- </h3>
          <div className="co_box_content">
            <ul>
              <li>MARKETING</li>
              <li>HUMAN RESOURCE</li>
              <li>INFORMATION SYSTEMS</li>
              <li>INFORMATION TECHNOLOGY</li>
              <li>HARDWARE & NETWORKING</li>
            </ul>
          </div>
          <button>Apply now</button>
        </div>

        <div className="co_box">
          <h3>COMMERCIAL AND PROJECT MANAGEMENT</h3>
          <div className="co_box_content">
            <ul>
              <li>COMMERCIAL MANAGEMENT</li>
              <li>PROJECT MANAGEMENT</li>
              <li>RISK MANAGEMENT</li>
              <li>LOGISTICS & SUPPLY CHAIN MANAGEMENT</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>BUSINESS ADMINISTRATION</h3>
          <div className="co_box_content">
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
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>HEALTH & SAFETY MANAGEMENT</h3>
          <div className="co_box_content">
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
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>JOURNALISM & MEDIA STUDIES</h3>
          <div className="co_box_content">
            <ul>
              <li>SUB EDITING</li>
              <li>MEDIA LAW & ETHICS</li>
              <li>NEWSPAPER REPORTING</li>
              <li>BROADCAST JOURNALISM</li>
              <li>FREELANCE & FEATURE WRITING</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>PURCHASING & SUPPLY MANAGEMENT</h3>
          <div className="co_box_content">
            <ul>
              <li>STORES MANAGEMENT & STOCK CONTROL</li>
              <li>QUANTITATIVE METHODS FOR MANAGERS</li>
              <li>SUPPLY CHAIN MANAGEMENT</li>
              <li>CUSTOMER SERVICE</li>
              <li>NEGOTIATION</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>COMPUTER SCIENCE & CYBER SECURITY</h3>
          <div className="co_box_content">
            <ul>
              <li>COMPUTER SYSTEMS</li>
              <li>SOFTWARE TESTING</li>
              <li>COMPUTER SCIENCE</li>
              <li>COMPUTER SECURITY</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>MARKETING</h3>
          <div className="co_box_content">
            <ul>
              <li>ADVERTISING</li>
              <li>MARKETING</li>
              <li>PUBLIC RELATIONS</li>
              <li>QUANTITATIVE METHODS FOR MANAGERS</li>
              <li>INTERNATIONAL BUSINESS COMMUNICATION</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>HOSPITALITY MANAGEMENT</h3>
          <div className="co_box_content">
            <ul>
              <li>FUNDAMENTALS OF THE HOTEL & CATERING INDUSTRY</li>
              <li>HOUSEKEEPING & ACCOMMODATION STUDIES</li>
              <li>RESTAURANT SERVICES</li>
              <li>FRONT OFFICE OPERATIONS & ADMINISTRATION</li>
              <li>FOOD AND BEVERAGE MANAGEMENT</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>OFFICE MANAGEMENT - (WAEC ABCE)</h3>
          <div className="co_box_content">
            <ul>
              <li>OFFICE MANAGEMENT - (WAEC ABCE)</li>
              <li>INFORMATION TECHNOLOGY</li>
              <li>OFFICE ADMINISTRATION AND PRACTICE</li>
              <li>BUSINESS LAW</li>
              <li>MARKETING</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>PUBLIC RELATIONS</h3>
          <div className="co_box_content">
            <ul>
              <li>INTERNATIONALL BUSINESS COMMUNICATION</li>
              <li>BUYER BEHAVIOUR & CONSUMERISM</li>
              <li>PUBLIC RELATIONS</li>
              <li>ADVERTISING</li>
              <li>MARKETING</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>BUSINESS ADMINISTRATION - (WAEC ABCE)</h3>
          <div className="co_box_content">
            <ul>
              <li>BUSINESS COMMUNICATIONS</li>
              <li>MARKETING</li>
              <li>HUMAN RESOURCE MANAGEMENT</li>
              <li>BUSINESS FINANCE</li>
              <li>BUSINESS LAW</li>
            </ul>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="co_box">
          <h3>ACCOUNTING AND FINANCE</h3>
          <div className="co_box_content">
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
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Diploma;
