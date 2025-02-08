"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import Fancybox from "../ImageZoom/Fancybox";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="testimonials-section">
        <div className="benefit-heading mb-4">
          <h2>Trade Shows</h2>
        </div>

        <div className="trade-show-img-container">
          <div className="trade-show-img-wraper">
            {
              testimonials.map((data, index) => (
                <Fancybox key={index}>
                  <div className="trade-show-img" key={index} data-fancybox="gallery" href={data?.src}>
                    <Image src={data.src} alt={data.name} width={500} height={500} />
                    <div className="trade-show-names">
                      <span>{data.name}</span>
                    </div>
                  </div>
                </Fancybox>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Indian Carpet Expo, Badhoi",
    src: "/images/fair/fair_badhoi.jpg",
  },
  {
    name: "Indian Carpet Expo, New Delhi",
    src: "/images/fair/fair_delhi.JPG",
  },
  {
    name: "DOMOTEX Germany, Hannover",
    src: "/images/fair/fair_domotex.jpg",
  },
];
