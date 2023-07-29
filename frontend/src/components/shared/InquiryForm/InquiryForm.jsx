import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import { submitInquiry } from "../../../actions/productAction";

const InquiryForm = ({id, onClose}) => {
  const [companyName, setcompanyName] = useState("");
  const [email_inquiry, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const productId = id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        productId,
        companyName,
        email_inquiry,
        number,
        location,
        message,
      };
      submitInquiry(formData);

      setcompanyName("");
      setEmail("");
      setNumber("");
      setLocation("");
      setMessage("");

      setSuccessMessage('We have received your enquiry, Will reach out to you soon!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.inquiryForm}>
        <div className={styles.inquiryModal}>
      <button onClick={onClose} className={styles.closeButton}>
            <img src="/images/close.png" alt="close" />
      </button>
        <h2 className={styles.heading}>Inquiry Form</h2>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <form onSubmit={handleSubmit} className={styles.formDiv}>
          <input
            type="text"
            id="companyName"
            value={companyName} onChange={(e) => setcompanyName(e.target.value)}
            placeholder="Company Name"
            required
          />

          <input
            type="email"
            id="email"
            value={email_inquiry} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="number"
            id="phone"
            value={number} onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            id="Location"
            value={location} onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          <textarea
            id="message"
            value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
