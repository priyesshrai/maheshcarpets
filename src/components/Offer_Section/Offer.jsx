"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function Offer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="offer-section">
        <div className="benefit-heading">
          <h2>Creativity Beyond Imagination</h2>
        </div>

        <div className="offer-container">
          {/* Uncomment the Image section if needed */}
          {/* <div className="offer-image-section">
            <Image
              src="/images/offer-img.jpg"
              alt="offer"
              width={5000}
              height={500}
            />
          </div> */}

          <div className="offer-details-section">
            <div className="details-description">
              <p>
                We bring cutting-edge innovation and timeless craftsmanship together to create premium carpets that redefine luxury, comfort, and sustainability. With over 50 years of expertise, Mahesh Carpets has set the benchmark in combining tradition and technology to craft products that inspire and elevate every space.
              </p>
              <br />
              <p>
                Sustainability is at the heart of everything we do. As a compliant and eco-conscious company, we are committed to reducing our environmental impact through innovative processes and responsible practices. Beyond carpets, we actively engage in community service in Varanasi, contributing to the region's development and supporting local initiatives to make a positive difference.
              </p>
              <br />
              <p>
                At Mahesh Carpets, we are more than just manufacturers; we are innovators, artisans, and community builders—crafting carpets that make a global impact while staying rooted in our heritage.
              </p>
            </div>

            {/* Badge section with CountUp effect */}
            <div className="details-badge-container">
              <div className="badge-container">
                <span>
                  {isVisible ? <CountUp start={0} end={50} duration={3} /> : "0"}+
                </span>
                <p>Years of Experience</p>
              </div>
              <div className="badge-container">
                <span>
                  {isVisible ? <CountUp start={0} end={60000} duration={6} /> : "0"}
                </span>
                <span style={{ fontSize: "15px", marginLeft: "3px" }}>sq/ft</span>
                <p>Manufacturing Area</p>
              </div>
              <div className="badge-container">
                <span>
                  {isVisible ? <CountUp start={0} end={200} duration={4} /> : "0"}+
                </span>
                <p>Artisans</p>
              </div>
              <div className="badge-container">
                <span>
                  {isVisible ? <CountUp start={0} end={35} duration={3} /> : "0"}+
                </span>
                <p>Countries we Export</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
