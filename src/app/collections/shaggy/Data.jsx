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
              Experience the plush luxury of Shaggy Carpets, designed to offer unmatched comfort underfoot. Crafted using long, soft yarns, these carpets create a warm and inviting atmosphere, making every step feel like a dream. Their high-pile texture adds a touch of sophistication while providing a cosy retreat for your feet.
              <br /> <br />
              Available in a range of solid colours and abstract patterns, our shaggy carpets effortlessly complement any décor—whether you’re looking to add a pop of colour to your living room, create a snug bedroom setting, or enhance your office space with a touch of modern elegance.
              <br /> <br />
              At <a href="/" style={{ color: "blue" }}>Mahesh Carpets</a>, we combine premium craftsmanship with contemporary aesthetics to bring you carpets that are not just stylish but also durable and easy to maintain. Indulge in the soft embrace of our Shaggy Carpet Collection and transform your space into a haven of comfort and warmth.
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
