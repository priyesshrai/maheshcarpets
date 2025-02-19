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
                <h1>Asymmetrical Rugs</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/shaped/banner.png' style={{ height: '500px', objectFit: "cover" }} width={1000} height={1000} alt="Flatweave banner" className="bann-img" />
              </div>
              <div className="product-content">
                <p>
                  Distinctive and unconventional floor coverings that break away from the traditional symmetrical designs. Feature uneven shapes, irregular edges, or patterns that create a dynamic and artistic look, making them a focal point in interior design.
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
                        <span>Colour : </span>
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
