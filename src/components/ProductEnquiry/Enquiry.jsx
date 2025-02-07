"use client";
import { useState, useEffect, useRef } from "react";
import FormLoader from "../FormLoader/FormLoader";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Enquiry({ closeBtn, name, category }) {
  const [data, setData] = useState({
    productName:name,
    category:category,
    name: "",
    contact: "",
    email: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    toast.promise(
      axios
        .post("/api/product-enquiry", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setData({
              name: "",
              email: "",
              location: "",
              message: "",
              contact: "",
            });
            closeBtn(false);
          }
        })
        .catch((error) => {
          console.log("Error sending message", error.message);
          closeBtn(false);
          throw error;
        })
        .finally(() => {
          closeBtn(false);
          setLoading(false);
        }),
      {
        loading: "Sending your enquiry...",
        success: "Enquiry sent, we will reply within 24-48 hours",
        error: "Error sending enquery. Please try again.",
      }
    );
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeBtn(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeBtn]);
  
  return (
    <section className="enquiry-section">
      <div className="enquiry-wrapper">
        <div className="enquiry-form" ref={formRef}>
          <form onSubmit={handleSubmit}>
            <div className="enquiry-input-container">
              <input
                className="enq-in"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                aria-label="Name"
                required
              />
            </div>
            <div className="enquiry-input-container">
              <input
                className="enq-in"
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                value={data.email}
                onChange={handleChange}
                aria-label="Email"
                required
              />
            </div>
            <div className="enquiry-input-container">
              <input
                className="enq-in"
                type="number"
                name="contact"
                id="contact"
                placeholder="+91 9873592343"
                value={data.contact}
                onChange={handleChange}
                aria-label="Contact"
                required
              />
            </div>
            <div className="enquiry-input-container">
              <input
                className="enq-in"
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location, city, state"
                value={data.location}
                onChange={handleChange}
                aria-label="Location"
                required
              />
            </div>
            <div className="enquiry-input-container">
              <textarea
                name="message"
                id="message"
                placeholder="Type your Message or Instruction or Query"
                value={data.message}
                onChange={handleChange}
                aria-label="Message"
                required
              ></textarea>
            </div>
            <div className="enquiry-input-container">
              <button type="submit" aria-label="Send Enquiry">
                {loading ? <FormLoader /> : "Send Enquiry"}
              </button>
            </div>
          </form>
          <div className="form-close-btn" onClick={() => closeBtn(false)}>
            <i className="hgi-stroke hgi-cancel-01" />
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
