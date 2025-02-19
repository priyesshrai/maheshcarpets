import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

export default function Data({ data }) {

  return (
    <section className="section">
      <div className="product-section">

        <div className="product-desc">
          <div className="pro-details-container">
            <div className="pro-text-container">
              <div className="product-title">
                <h1>HandLoom</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/handloom/banner.jpg' width={1000} height={1000} alt="handloom banner" />
              </div>
              <div className="product-content">
                <p>
                  A versatile weaving technique where artisans weave yarns on loom
                  to create intricate designs. The construction is known for their
                  clean lines, geometric patterns, and contemporary aesthetics. A
                  perfect blend of traditional craftsmanship with modern style.
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
              {data?.map((data) => (
                <Link href={`${data.category}/${data.uri}`} key={data.id}>
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
                      <div className="product-btn">
                        {/* <Link href={`${data.category}/${data.uri}`}>
                        View Product
                      </Link> */}
                      </div>
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
