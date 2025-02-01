// "use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {

  return (
    <section className="">
      <div className="hero-vdo-container">
        <div className="hero-vdo">
          <video preload="none" autoPlay loop muted playsInline>
            <source src="/video/hero_vdo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <div className="hero-section" style={{ padding: "146px 0" }}>
        <div className="hero-heading">
          <h1>Great Collection of Vintage Rugs with a Legacy of 25 Years</h1>
        </div>
        <div className="hero-sub-heading">
          <p>
            Exclusive Range of Carpets of All Make, Sizes and Colours for Homes
            everywhere.
          </p>
        </div>
      </div> */}
    </section>
  );
}
  