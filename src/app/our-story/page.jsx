import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="section">
      <div className="about-section">
        <div className="about-section-first-part">
          <div className="about-content">
            <div className="about-heading">
              <h1>Crafting Timeless Elegance Since 1976.</h1>
            </div>
            <div className="about-para">
              <p>
                Founded in 1976 by the visionary Late{" "}
                <strong>Ram Kumar Maheshwari</strong> ,{" "}
                <strong>Mahesh Carpets</strong> has been a trailblazer in the
                art of carpet manufacturing. Building on a legacy of excellence,
                the second generation took the reins in 1998, with{" "}
                <strong>Mr. Maniessh Maheshwari</strong> leading the way to
                elevate the brand to new heights. Nestled on the serene banks of
                the Ganges in Varanasi—a city renowned for its rich cultural
                heritage—we bring over 50 years of expertise to every piece we
                create.
              </p>
              <br />
              <p>
                Our motto,{" "}
                <strong>
                  {" "}
                  <em>“Creativity Beyond Imagination,”</em>{" "}
                </strong>{" "}
                reflects our passion for designing rugs that blend timeless
                craftsmanship with innovative artistry. From stunning product
                ranges to exquisite designs and intricate color combinations,
                Mahesh Carpets has earned a reputation for unparalleled quality
                and elegance.
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/our-story.jpeg" alt="" />
          </div>
        </div>

        <div className="about-sec-part">
          <div className="about-next-hed">
            <h2>Our Expertise</h2>
          </div>
          <div className="about-para">
            <p>
              At Mahesh Carpets, we master the craft of carpet making by
              combining ancient traditions with modern techniques. Our portfolio
              encompasses an extensive array of handcrafted indoor rugs,
              tailored to enhance any space—from cozy bedrooms to luxurious
              living areas. With a team of skilled designers and artisans, we
              specialize in transforming your unique vision into reality.
            </p>
            <br />
            <p>
              Beyond carpets, we curate an exclusive selection of home décor
              accessories, including:
            </p>
            <ol start="I">
              <li>I. Plush cushions</li>
              <li>II. Wall Arts</li>
              <li>III. Versatile ottomans</li>
            </ol>
          </div>
        </div>

        <div className="about-sec-part">
          <div className="about-next-hed">
            <h2>Our Legacy & Commitment</h2>
          </div>
          <div className="about-para">
            <p>
              Carpet making is more than a craft—it's an enduring art form. Over
              the decades, we have partnered with skilled artisans to preserve
              and celebrate these time-honored processes. As a dynamic and
              ethical manufacturer, we believe in creating pieces that transcend
              trends, offering art that stands the test of time.
            </p>
            <br />
            <p>
              Whether you're seeking a statement rug to anchor your room or
              thoughtful décor to enrich your space, Mahesh Carpets is dedicated
              to delivering products that embody beauty, quality, and
              creativity.
            </p>
            <strong>
              Discover a world where craftsmanship meets imagination.
            </strong>
          </div>
        </div>

        <div className="membership-container">
          <div className="certificate-section our-sty">
            <div className="benefit-heading">
              <h2>Memberships</h2>
              <p>"Trusted Partnerships, Certified Excellence"</p>
            </div>

            <div className="certificate-desc">
              <p>
                The memberships signify that the company adheres to the highest industry standards, ensuring quality, ethical practices, and compliance with global export norms. This translates to confidence in receiving superior products crafted with precision and backed by certified excellence. Furthermore, our association with these reputed bodies highlights our commitment to continuous improvement, innovation, and responsible business practices, offering customers the assurance of partnering with a reliable and globally recognized brand. The memberships provide the company with access to global markets, trade fairs, and networking opportunities, enhancing its visibility among international buyers.
              </p>
            </div>

            <div className="certificate-container">
              <div className="certificate-wraper">
                <a
                  href="https://www.epch.in/"
                  target="_blank"
                >
                  <Image
                    src="/images/certificates/1.jpg"
                    width={200}
                    height={200}
                    alt="certificate1"
                    style={{ height: "100%" }}
                  />
                </a>
                <a
                  href="http://cepc.co.in/"
                  target="_blank"
                >
                  <Image
                    src="/images/certificates/2.jpg"
                    width={200}
                    height={200}
                    alt="certificate1"
                    style={{ height: "100%" }}
                  />
                </a>
                <a href="https://msme.gov.in/" target="_blank">
                  <Image
                    src="/images/certificates/3.png"
                    width={200}
                    height={200}
                    alt="certificate1"
                    style={{ height: "100%" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
