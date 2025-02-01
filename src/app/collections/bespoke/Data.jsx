"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { bespoke } from "@/data/productdata.js";
import Loader from "@/components/Loader/Loader";

export default function Data() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setData(bespoke);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className="section">
      <div className="product-section">
        {/* <div className="product-top-level">
          <div className="back-btn" onClick={handleBackClick}>
            <i className="hgi-stroke hgi-arrow-left-01" />
          </div>
          <div className="current-path">
            <p>
              <i className="hgi-stroke hgi-home-04" /> {pathname}
            </p>
          </div>
        </div> */}

        <div className="product-desc">
          <div className="product-title">
            <h1>Bespoke Rugs</h1>
          </div>
          <div className="product-content">
            <p>
            Crafting rugs that combine artistry, craftsmanship, and individuality. Each piece is custom-designed to perfectly suit the unique style, space, and vision. Whether you are looking for a bold statement or a subtle touch of elegance, our bespoke rugs are tailored to bring your dream design to life.
            </p>
          </div>
        </div>

        {loading ? (
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
                        <span>Color : </span>
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
