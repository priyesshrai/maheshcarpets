import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { src: "/images/gallery/gallery-pic-01.jpg", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-02.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-03.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-04.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-05.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-06.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-07.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-08.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-09.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-10.png", alt: "Gallery Picture" },
  { src: "/images/gallery/gallery-pic-11.png", alt: "Gallery Picture" },
];

export default function Slide() {
  return (
    <section className="section">
      <div className="slider-container">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
