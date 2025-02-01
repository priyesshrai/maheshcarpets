import Image from "next/image";
import React from "react";

export default function Certificates() {
  return (
    <section className="section" style={{ paddingTop: "20px" }} id="compliance">
      <div className="certificate-section">
        <div className="benefit-heading">
          <h2>Our Certificate</h2>
          <p>"Certified Excellence: Quality with a Conscience"</p>
        </div>

        <div className="certificate-desc">
          <p>
            At Mahesh Carpets, our dedication to quality and ethical practices
            is backed by globally recognized industry certifications. These
            certifications reflect our unwavering commitment to excellence,
            sustainability, fair trade practices, and social responsibility.
            When you choose Mahesh Carpets, you choose products crafted with
            superior quality and a conscience for a better world.
          </p>
        </div>

        <div className="certificate-container">
          <div className="certificate-wraper">
            <a
              href="https://www.cbp.gov/border-security/ports-entry/cargo-security/CTPAT"
              target="_blank"
            >
              <Image
                src="/images/certificates/C-tpat.jpg"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
            <a
              href="https://www.care-fair.org/en/start-english/"
              target="_blank"
            >
              <Image
                src="/images/certificates/care.jpg"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
            <a href="https://goodweave.org/" target="_blank">
              <Image
                src="/images/certificates/Goodweave.jpg"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
            <a>
              <Image
                src="/images/certificates/Handmade.jpg"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
            <a href="https://www.iso.org/home.html" target="_blank">
              <Image
                src="/images/certificates/Q-Mark.png"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
            <a href="https://www.sedex.com/" target="_blank">
              <Image
                src="/images/certificates/Sedex.jpg"
                width={200}
                height={200}
                alt="certificate1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
