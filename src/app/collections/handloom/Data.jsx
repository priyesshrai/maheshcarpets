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
                  Experience the artistry of tradition with Mahesh Carpets’ Handloom Collection, where every weave tells a story. Crafted by skilled artisans in Varanasi, our handloom rugs and carpets embody a seamless blend of heritage and contemporary elegance.
                  <br />
                  <br />
                  Using time-honoured techniques, each piece is meticulously woven with high-quality natural fibres, ensuring durability, softness, and a rich texture. From intricate floral motifs to minimalist modern patterns, our collection offers a versatile range to complement any décor. Whether you seek warmth for your living space or a statement piece for your office, our handloom carpets elevate interiors with timeless charm. At <a href="/" style={{ color: "blue" }}>Mahesh Carpets</a>, we take pride in preserving the legacy of handmade craftsmanship while innovating for today’s aesthetic needs. Explore our exclusive Handloom Collection and bring home the essence of tradition, woven with passion and precision. Luxury, sustainability, and artistry—crafted just for you
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
