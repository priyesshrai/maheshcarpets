"use client";
import axios from "axios";
import React, { useState } from "react";
import FormLoader from "../FormLoader/FormLoader";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { id, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    toast.promise(
      axios
        .post("/api/contact", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Message sent successfully", response);
          if (response.status === 200) {
            setData({
              name: "",
              email: "",
              subject: "",
              message: "",
              contactNo: "",
            });
          }
        })
        .catch((error) => {
          console.log("Error sending message", error.message);
          throw error;
        })
        .finally(() => {
          setLoading(false);
        }),
      {
        loading: "Sending message...",
        success: "We will reply within 24-48 hours",
        error: "Error sending message. Please try again.",
      }
    );
  }

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="contact-us-section">
        <div className="benefit-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="form-input"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="form-input"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="contactNo" className="form-label">
                  Contact
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  placeholder="Your Phone Number"
                  className="form-input"
                  value={data.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={data.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="message" className="form-label">
                  Describe your Enquiry
                </label>
                <textarea
                  id="message"
                  placeholder="Describe your Enquiry.....!"
                  rows="4"
                  className="form-textarea"
                  value={data.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <span style={{ display: "block", fontSize: "12px", marginBottom: "8px", textAlign: "center" }}>We will reply within 24-48 hours</span>

            <button type="submit" className="submit-button">
              {loading ? <FormLoader /> : "Submit"}
            </button>
          </form>

          <div className="contact-info-container">
            <div className="info-heading">
              <h4>Contact Info</h4>
            </div>
            <div className="info-dets" style={{ marginTop: "30px" }}>
              <div className="info-icon" style={{ borderColor: "#28a745" }}>
                <i className="hgi-stroke hgi-telephone" style={{ color: "#28a745" }} />
              </div>
              <div className="info-con">
                <a href="tel:+919517292555"><span>+91 9517292555</span></a>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon" style={{ borderColor: "#C5221F" }}>
                <i className="hgi-stroke hgi-mail-at-sign-01" style={{ color: "#C5221F" }} />
              </div>
              <div className="info-con">
                <a href="mailto:sales@maheshcarpets.com"><span>sales@maheshcarpets.com</span></a>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon" style={{ borderColor: "#007bff" }}>
                <i className="hgi-stroke hgi-location-03" style={{ color: "#007bff" }} />
              </div>
              <div className="info-con">
                <a href="https://www.google.com/maps/place/Mahesh+Carpets/@25.2788299,82.9040077,17z/data=!3m1!4b1!4m12!1m5!3m4!2zMjXCsDE2JzQzLjkiTiA4MsKwNTQnMzEuMCJF!8m2!3d25.2788506!4d82.9086227!3m5!1s0x398e335bd619aa8f:0xb489a27d964108e5!8m2!3d25.2788251!4d82.9086211!16s%2Fg%2F11yc0zdjkp?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <span>Araji No. 90D GT Road JAGATPUR, VARANASI-221302 Uttar Pradesh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
}
