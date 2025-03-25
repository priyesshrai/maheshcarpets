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
                <h1>HandTufted</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/handTufted/banner.jpg' style={{ height: '500px', objectFit: "cover" }} width={1000} height={1000} alt="Flatweave banner" className="bann-img" />
              </div>
              <div className="product-content">
                <p>
                  Experience the perfect blend of tradition and contemporary design with our Hand-Tufted Collection at <a href="/" style={{color:"blue"}}>Mahesh Carpets</a>. Expertly crafted by skilled artisans, these carpets are made using a meticulous hand-tufting technique that ensures durability, comfort, and intricate detailing.
                  <br /> <br />
                  Designed to add warmth and sophistication to any space, our hand-tufted rugs feature a variety of patterns, textures, and colours—from classic motifs to modern abstracts. Made with high-quality wool and silk blends, each piece offers a plush feel underfoot while being resilient to everyday use.
                  <br /> <br />
                  Whether you seek a bold statement rug or a subtle, elegant accent, our collection caters to diverse tastes and interiors. Elevate your home or office with a handcrafted masterpiece that exudes charm and refinement. Explore our Hand-Tufted Collection today and bring home the artistry of Mahesh Carpets.
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
                <Link href={`hand-tufted/${data.uri}`} key={data.id}>
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
                      <Link href={`hand-tufted/${data.uri}`}>View Product</Link>
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
