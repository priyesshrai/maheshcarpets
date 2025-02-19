import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

export default function Data({ data }) {
  return (
    <section className="section">
      <div className="product-section">

        <div className="product-desc">
          <div className="product-title">
            <h1>Shaggy</h1>
          </div>
          <div className="product-content">
            <p>
              Offering unmatched comfort underfoot, crafted using long yarns
              which gives a cozy feel and an inviting look. Available in solid
              colors and abstract patterns.
            </p>
          </div>
        </div>

        {!data ? (
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
