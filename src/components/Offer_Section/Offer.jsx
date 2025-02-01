import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <section className="section">
      <div className="offer-section">
        <div className="benefit-heading">
          <h2>Creativity Beyond Imagination</h2>
        </div>

        <div className="offer-container">
          {/* <div className="offer-image-section">
            <Image
              src="/images/offer-img.jpg"
              alt="offer"
              width={5000}
              height={500}
            />
          </div> */}
          <div className="offer-details-section">
            {/* <div className="details-heading">
              <h3>We offer professional guarantee on our products.</h3>
            </div> */}

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
                At MaheshCarpets, we are more than just manufacturers; we are innovators, artisans, and community builders—crafting carpets that make a global impact while staying rooted in our heritage.
              </p>
            </div>

            <div className="details-badge-container">
              <div className="badge-container">
                <span>50+</span>
                <p>Years of Experience</p>
              </div>
              <div className="badge-container">
                <span>60,000</span>
                <span style={{ fontSize: "15px", marginLeft: "3px" }}>sq/ft</span>
                <p>Manufacturing Area</p>
              </div>
              <div className="badge-container">
                <span>200+</span>
                <p>Artisans</p>
              </div>
              <div className="badge-container">
                <span>35+</span>
                <p>Countries we Export</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
