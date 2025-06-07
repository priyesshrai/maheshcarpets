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
                <h1>Hand Knotted</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/hand-knotted/banner.png' width={1000} height={1000} style={{ height: "600px" }} alt="Flatweave banner" />
              </div>
              <div className="product-content">
                <p>
                  A true masterpiece of craftsmanship, Hand-Knotted Carpets are the epitome of luxury and tradition. Created by skilled artisans who meticulously tie individual knots, each piece showcases intricate patterns, breathtaking detail, and unparalleled durability. This age-old technique ensures that no two carpets are ever the same, making every hand-knotted rug a unique work of art.

                  <br /> <br />
                  Renowned for their longevity and exquisite beauty, these carpets blend heritage with sophistication, bringing a touch of timeless elegance to any space. Whether adorning a classic interior or enhancing a modern setting, their rich textures and refined patterns make a lasting impression.
                  <br /> <br />
                  At <a href="/" style={{ color: "blue" }}>Mahesh Carpets</a>, we take pride in preserving this centuries-old tradition while offering designs that cater to contemporary tastes. Experience the charm of handcrafted luxury with our Hand-Knotted Collection, where every thread weaves a story of artistry, passion, and excellence.
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
                <Link href={`hand-knotted/${data.uri}`} key={data.id}>
                  <div className="product-card">
                    <div className="product-img">
                      <Image
                        src={data.src}
                        width={280}
                        height={420}
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
