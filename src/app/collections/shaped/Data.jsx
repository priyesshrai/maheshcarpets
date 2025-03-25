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
                <h1>Asymmetrical Rugs</h1>
              </div>
              <div className="product-banner">
                <Image src='/images/shaped/banner.png' style={{ height: '500px', objectFit: "cover" }} width={1000} height={1000} alt="Flatweave banner" className="bann-img" />
              </div>
              <div className="product-content">
                <p>
                  Step away from tradition and embrace the unique charm of Asymmetrical Rugs—distinctive floor coverings that challenge conventional design norms. Featuring uneven shapes, irregular edges, and dynamic patterns, these rugs bring an artistic flair to any space, transforming floors into statement pieces.
                  <br /> <br />
                  Designed for those who dare to be different, asymmetrical rugs add movement and depth, making them the perfect focal point for modern and eclectic interiors. Whether you choose a fluid, organic form or a striking geometric layout, these rugs inject personality and creativity into your décor.
                  <br /> <br />
                  At <a href="/" style={{ color: "blue" }}>Mahesh Carpets</a>, we celebrate design that defies expectations. Our Asymmetrical Rug Collection blends innovation with craftsmanship, offering a seamless mix of style, comfort, and individuality. Elevate your space with a rug that is as bold and unique as you are—because true artistry knows no boundaries.
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
