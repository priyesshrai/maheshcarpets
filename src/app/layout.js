import dynamic from "next/dynamic";
import { Jura } from "next/font/google";
import { Akaya_Kanadaka } from "next/font/google";
import { Yatra_One } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Footer = dynamic(() => import("@/components/Footor/Footer"));
const ContactUs = dynamic(() => import("@/components/Contact_us/ContactUs"));
import { IBM_Plex_Sans } from "next/font/google";
import Providers from "@/components/Nprogress";
import { GoogleAnalytics } from "@next/third-parties/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jura",
});
const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  variable: "--font-akaya",
  weight: "400",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

const yatraOne = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--logo-font",
});

export const metadata = {
  title: "Mahesh Carpets - Premium Handcrafted Carpets & Rugs",
  description:
    "Discover the timeless elegance of Mahesh Carpets, where tradition meets modernity. Explore our exquisite collection of handcrafted carpets and rugs, woven with precision and passion. Elevate your living spaces with our premium, durable, and stylish designs that blend heritage craftsmanship with contemporary aesthetics. Experience luxury underfoot with Mahesh Carpets.",
};
import { ReactLenis } from "lenis/react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
      </head>
      <body
        className={`${jura.variable} ${akayaKanadaka.variable} ${raleway.variable} ${yatraOne.variable} ${ibmPlexSans.variable}`}
      >
        <ReactLenis root>
          <main className="main">
            <Navbar />
            <Providers>{children}</Providers>
            <ContactUs />
            <Footer />
          </main>
        </ReactLenis>
        <GoogleAnalytics gaId="G-X87N2F0D8F" />
      </body>
    </html>
  );
}
