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
        success: "Message sent successfully!",
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
                  placeholder="Your name"
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
                  placeholder="Your email"
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
                  placeholder="Your phone number"
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
                  placeholder="Describe your Enquiry..."
                  rows="4"
                  className="form-textarea"
                  value={data.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">
              {loading ? <FormLoader /> : "Submit"}
            </button>
          </form>

          <div className="contact-info-container">
            <div className="info-heading">
              <h4>Contact Info</h4>
            </div>
            <div className="info-dets" style={{ marginTop: "30px" }}>
              <div className="info-icon">
                <i className="hgi-stroke hgi-telephone" />
              </div>
              <div className="info-con">
                <span>+91 9517292555</span>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon">
                <i className="hgi-stroke hgi-mail-at-sign-01" />
              </div>
              <div className="info-con">
                <span>info@maheshcarpets.com</span>
              </div>
            </div>
            <div className="info-dets">
              <div className="info-icon">
                <i className="hgi-stroke hgi-location-03" />
              </div>
              <div className="info-con">
                <span>Jagatpur GT Road Varanasi 221302 Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
}
