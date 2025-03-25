import React from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

export default function Data({data}) {

  return (
    <section className="section">
      <div className="product-section">

        <div className="product-desc">
          <div className="pro-details-container">
            <div className="pro-text-container">
              <div className="product-title">
                <h1>Flatweave</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/flatWeave/banner.jpg' width={1000} height={1000} alt="Flatweave banner" />
              </div>
              <div className="product-content">
                <p>
                Discover the charm of our Flatweave Collection at Mahesh Carpets, where tradition meets modern aesthetics. Handwoven by skilled artisans in Varanasi, these rugs are lightweight, durable, and incredibly versatile. Crafted using premium wool and cotton, our flatweave rugs showcase intricate patterns, rich textures, and a seamless finish.
                <br /> <br />
                Perfect for both contemporary and classic interiors, these rugs add warmth and sophistication to any space. Their reversible design offers flexibility, allowing you to refresh your décor effortlessly. Whether you prefer bold geometric designs or subtle earthy tones, our collection has something for every taste.
                <br /> <br />
                At <a href="/" style={{color:"blue"}}>Mahesh Carpets</a>, we take pride in sustainable craftsmanship, ensuring that each piece is made with eco-friendly materials and ethical practices. Elevate your home with the timeless beauty of our Flatweave Collection—where artistry and functionality come together in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </div>

        {!data ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-wraper">
              {data.map((data) => (
                <Link href={`flat-weave/${data.uri}`} key={data.id}>
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
                        <span>Category : </span>
                        <span>{data.category}</span>
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
