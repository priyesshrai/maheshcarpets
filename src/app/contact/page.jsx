import ContactUs from "@/components/Contact_us/ContactUs";
import Footer from "@/components/Footor/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function page() {

  return (
    <>
      <Navbar />
      <section className='section' style={{ backgroundColor: "#fff", paddingBottom: "0" }}>
        <div className="section-wraper">
          <div className="contact-img-container">
            <Image src='/images/contact.JPG' width={1000} height={300} alt="contact" />
          </div>

          <div className="section-wraper-box">
            <div className="location-container">
              <div className="location-heading">
                <h1><strong>Varanasi Office (Headquaters)</strong></h1>
              </div>
              <p>Araji No. 90D GT Road JAGATPUR, VARANASI
              </p>
              <p>Uttar Pradesh - 221302</p>

              <span>
                <i className="hgi-stroke hgi-flip-phone" /> +91-9517292555
              </span>
            </div>
          </div>

          <div className="section-wraper-box">
            <div className="location-container">
              <div className="location-heading">
                <h5><strong>Bhadhoi Office (Production)</strong></h5>
              </div>
              <p>Main Road, Maryadpatti
                Bhadohi.</p>
              <p>Uttar Pradesh - 221401</p>

              <span>
                <i className="hgi-stroke hgi-flip-phone" /> +91-9415201178
              </span>
            </div>
          </div>

          <div className="section-wraper-box">
            <div className="location-container">
              <div className="location-heading">
                <h5><strong>New Delhi Office (Marketing)</strong></h5>
              </div>
              <p>GK-1 C-7 3rd Floor Near M-Block Market.</p>
              <p>New Delhi - 110048</p>

              <span>
                <i className="hgi-stroke hgi-flip-phone" /> +91-9918639000
              </span>
            </div>
          </div>

        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  )
}


export const metadata = {
  title: 'Contact Mahesh Carpets | Get in Touch for Custom Rugs',
  description: 'Have questions or need a custom carpet? Contact Mahesh Carpets today for inquiries, orders, or expert assistance. We\'re here to help!',
}