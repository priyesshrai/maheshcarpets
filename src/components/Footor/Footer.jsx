import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <div className="footer-icon" style={{ borderColor: "#0A66C2" }}>
            <a
              href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-linkedin-02" style={{ color: "#0A66C2" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#FF0033" }}>
            <a
              href="https://www.youtube.com/@Mahesh_Carpets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-youtube" style={{ color: "#FF0033" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#0A66C2" }}>
            <a
              // href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-facebook-02" style={{ color: "#0A66C2" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#dc2743" }}>
            <a
              href="https://www.instagram.com/mahesh_carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-instagram" style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }} />
            </a>
          </div>
        </div>

        <div className="first-container">
          <div className="footer-container-wraper">
            <div className="footer-logo">
              <Image
                src="/images/logo/logo-01.jpeg"
                alt="logo"
                width={180}
                height={80}
              />
            </div>
            {/* <div className="footer-description">
              <h2>MAHESH CARPETs</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div> */}
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Quick Links</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/compliance">Compliance</Link>
                </li>
                {/* <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Privacy & Policy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Terms & Conditions</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Categories</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-knotted">Hand Knotted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-tufted">Hand Tufted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/shaggy">Shaggy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/handloom">Handloom</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/flat-weave">Flat Weave</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Contact Us</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-telephone" />
                  <Link href="/">
                    <span>+91 9517292555</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-mail-at-sign-01" />
                  <Link href="mailto:info@maheshcarpets.com">
                    <span>info@maheshcarpets.com</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-location-03" />
                  <span>90 D, JAGATPUR, G.T. ROAD VARANASI-221302 Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="base-footer">
        <span>
          Copyright &copy; {new Date().getFullYear()} Mahesh Carpets | All
          rights reserved | Developed & Maintained by{" "}
          <a href="https://wizards.co.in/" target="_blank">
            Wizards Next
          </a>
        </span>
      </div>
    </footer>
  );
}
