import React from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

export default function Data({ data }) {

  return (
    <section className="section">
      <div className="product-section">
        <div className="product-desc">
          <div className="product-title">
            <h1>Bespoke Rugs</h1>
          </div>
          <div className="product-content">
            <p>
              At Mahesh Carpets, we believe that every space deserves a rug as unique as its owner. Our Bespoke Rugs are a perfect blend of artistry, craftsmanship, and individuality, designed to complement your personal style and vision. Whether you seek a bold statement piece or a subtle touch of elegance, we work closely with you to create a rug that perfectly fits your space.
              <br /> <br />
              From selecting the finest materials to choosing colours, patterns, and textures, every detail is meticulously tailored to bring your dream design to life. Our skilled artisans ensure that each bespoke rug is not just a floor covering but a masterpiece that reflects your taste and personality.
              <br /> <br />
              With <a href="/" style={{ color: "blue" }}>Mahesh Carpets</a>’ Bespoke Collection, luxury is redefined—where your imagination meets exceptional craftsmanship. Transform your interiors with a one-of-a-kind creation that speaks to you and your space like no other.
            </p>
          </div>
        </div>

        {!data ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-wraper">
              {data.map((data) => (
                <Link href={`bespoke/${data.uri}`} key={data.id}>
                  <div className="product-card">
                    <div className="product-img">
                      <Image
                        src={data.src}
                        width={500}
                        height={500}
                        alt={data.alt}
                      />
                    </div>
                    <div className="product-details">
                      <div className="product-color">
                        <span>Colour : </span>
                        <span>{data.color}</span>
                      </div>
                      <div
                        className="product-category"
                        style={{ marginTop: "0" }}
                      >
                        <span>Collection : </span>
                        <span>{data.collection}</span>
                      </div>
                      {/* <div className="product-btn">
                        <Link href={`flat-weave/${data.uri}`}>
                          View Product
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
