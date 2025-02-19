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
                <h1>Hand Knotted</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/hand-knotted/banner.jpg' width={500} height={500} alt="Flatweave banner" />
              </div>
              <div className="product-content">
                <p>
                  A masterpiece of craftsmanship, created by skilled artisans who
                  meticulously tie individual knots to form intricate patterns.
                  Known for their unparalleled durability and exquisite detail. Each
                  hand-knotted piece is a unique work of art, combining heritage and
                  luxury or a truly sophisticated statement.
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
