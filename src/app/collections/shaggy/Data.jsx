"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { shaggy } from "@/data/productdata.js";
import Loader from "@/components/Loader/Loader";

export default function Data() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setData(shaggy);
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
            <h1>Shaggy Construction</h1>
          </div>
          <div className="product-content">
            <p>
              Offering unmatched comfort underfoot, crafted using long yarns
              which gives a cozy feel and an inviting look. Available in solid
              colors and abstract patterns.
            </p>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-wraper">
              {data.map((data) => (
                <Link href={`shaggy/${data.uri}`} key={data.id}>
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
                        <span>Category : </span>
                        <span>{data.category}</span>
                      </div>
                      {/* <div className="product-btn">
                      <Link href={`shaggy/${data.uri}`}>View Product</Link>
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
