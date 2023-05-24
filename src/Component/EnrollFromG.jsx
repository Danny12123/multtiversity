import React, { useState } from "react";
import {
  EnrollFromGTitle,
  Gender,
  countries,
  MaritalStatus,
} from "./Data/EnrollData";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Payment from "../Pages/Payment/Payment";

const EnrollFromG = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [activeContactNumber, setActiveContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [location, setLocation] = useState("");

  const [formSent, setFormSent] = useState('');
  const [isError, setIsError] = useState(false);
  const [displayPayment, setDisplayPayment] = useState(false);

  const handleSubmit = async () => {
    const detels = {
      underGraduate: "UNDERGRADUATE ADMISSION",
      title,
      firstName,
      middleName,
      surname,
      gender,
      dateOfBirth,
      nationality,
      email,
      maritalStatus,
      activeContactNumber,
      whatsappNumber,
      location,
    };
    try {
      const res = await axios.post(
        "undergraduate/",
        detels
      );
      setFormSent(res.data);

      // const tokenUrl = "https://sandbox.momodeveloper.mtn.com/collection/token";
      // await axios
      //   .post(tokenUrl, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "X-Reference-Id": "123456789",
      //       "Ocp-Apim-Subscription-key": "d303de8076544dbe8a17ddeed6571ff7",
      //     },
      //   })
      //   .then((res) => {
      //     console.log("token", res);
      //     const token = res.data.token;
      //     const paymentUrl =
      //       "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay";
      //     axios.post(paymentUrl, {
      //       amount: 30,
      //       currency: "Ghc",
      //       externalId: "123456789",
      //       payer: {
      //         partyIdType: "MSISDN",
      //         partyId: `233${activeContactNumber}`,
      //       },
            
      //     });
      //   });
    } catch (err) {
      setIsError(err);
    }
    setDisplayPayment(!displayPayment);
  };
  return (
    <div>
      {/* {["success"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))} */}
      <div >
        <div className="card_holder under_bt">
          <div className="ch_under_head">
            <div className="ch_under_head_img">
              <img src="./image/icon.jpg" alt="" />
            </div>
            <div className="ch_under_head_content">
              <h3>MULTIVERSITY OF AFRICA</h3>
              <h5>APPLICATION FOR UNDERGRADUATE ADMISSION</h5>
              <h5>All fields marked with * are mandatory</h5>
            </div>
          </div>
        </div>

        <div className="card_holder">
          <label>
            Title <span className="span">*</span>{" "}
          </label>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            {EnrollFromGTitle.map((title) => {
              return <option>{title.label}</option>;
            })}
          </select>
        </div>
        <div className="card_holder">
          <label>
            First Name <span className="span">*</span>{" "}
          </label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>
            Middle Name <span className="span">*</span>
          </label>
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>
            Surname Name <span className="span">*</span>{" "}
          </label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>
            Gender <span className="span">*</span>{" "}
          </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            {Gender.map((title) => {
              return <option value={title.value}>{title.label}</option>;
            })}
          </select>
        </div>
        <div className="card_holder">
          <label>
            Date of birth <span className="span">*</span>
          </label>
          <input
            type="date"
            value={dateOfBirth}
            required
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="card_holder">
          <label for="nationality">
            Nationality <span className="span">*</span>
          </label>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            {countries.map((title) => {
              return <option>{title.title}</option>;
            })}
          </select>
        </div>

        <div className="card_holder">
          <label>
            Email <span className="span">*</span>
          </label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>
            Marital status <span className="span">*</span>
          </label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            {MaritalStatus.map((title) => {
              return <option>{title.title}</option>;
            })}
          </select>
        </div>
        <div className="card_holder">
          <label>Active contact number</label>
          <input
            type="number"
            value={activeContactNumber}
            onChange={(e) => setActiveContactNumber(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>Whatsapp number </label>
          <input
            type="number"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
          />
        </div>
        <div className="card_holder">
          <label>Location/Digital address </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="card_holder under_bt">
          <button className="btn-submit" onClick={handleSubmit}>
            submit
          </button>
          <p>Copyright © 2023 multiversityofafrica.org</p>
        </div>
      </div>

      <div className={displayPayment && "dis_pament_active"}>
        <Payment userInfo={formSent} />
      </div>
    </div>
  );
};

export default EnrollFromG;
