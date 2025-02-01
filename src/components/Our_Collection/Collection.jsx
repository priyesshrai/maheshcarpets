import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Collection() {
  return (
    <section className="section" style={{ backgroundColor: "#fff" }}>
      <div className="collection-section">
        <div className="collection-heading">
          <h2>Step into the luxury, where comfort meets style, one weave at a time </h2>
        </div>
        <div className="collection-sub-heading">
          <p style={{ fontSize: "1.2vw", color: "#1e1e1e" }}>
            Discover a world of elegance and craftsmanship with our meticulously designed carpets and rugs. Whether you seek timeless artistry or modern sophistication, our collection offers unmatched quality to elevate every space.
          </p>
        </div>

        <div className="collection-cards-container">
          
          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/gallery/img-02.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collections/handloom">
                    <span>Handloom</span>
                  </Link>
                </div>
                <div className="collection-btn">
                  <Link href="/collections/handloom">
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/handTufted/collection.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collections/hand-tufted">
                    <span>Hand Tufted</span>
                  </Link>
                </div>
                <div className="collection-btn">
                  <Link href="/collections/hand-tufted">
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/shaggy/collection.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collections/shaggy">
                    <span>Shaggy</span>
                  </Link>
                </div>

                <div className="collection-btn">
                  <Link href="/collections/shaggy">
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-cards">
            <div className="collection-body">
              <div className="card-img">
                <Image
                  src="/images/hand-knotted/collection.jpg"
                  alt="collection1"
                  width={3000}
                  height={3000}
                />
              </div>

              <div className="collection-details">
                <div className="collection-name">
                  <Link href="/collections/hand-knotted">
                    <span>Hand Knotted</span>
                  </Link>
                </div>
                <div className="collection-btn">
                  <Link href="/collections/hand-knotted">
                    <div className="icon">
                      <i className="hgi-stroke hgi-arrow-up-right-01" />
                      <i className="hgi-stroke hgi-arrow-up-right-01 copy" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
