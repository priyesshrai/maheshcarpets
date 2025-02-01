"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { shaped } from "@/data/productdata.js";
import Loader from "@/components/Loader/Loader";

export default function Data() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setData(shaped);
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
          <div className="pro-details-container">
            <div className="pro-text-container">
              <div className="product-title">
                <h1>Asymmetrical Rugs</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/shaped/banner.jpg' style={{ height: '500px', objectFit: "cover" }} width={1000} height={1000} alt="Flatweave banner" className="bann-img" />
              </div>
              <div className="product-content">
                <p>
                  Distinctive and unconventional floor coverings that break away from the traditional symmetrical designs. Feature uneven shapes, irregular edges, or patterns that create a dynamic and artistic look, making them a focal point in interior design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-wraper">
              {data.map((data) => (
                <Link href={`shaped/${data.uri}`} key={data.id}>
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
