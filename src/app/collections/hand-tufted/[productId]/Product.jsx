"use client";
import useFetchHandTufted from "@/helper/useFetchHandTufted";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
const Enquiry = dynamic(()=>import("@/components/ProductEnquiry/Enquiry"),{loading:()=><Loader/>});
import dynamic from "next/dynamic";
import Fancybox from "@/components/ImageZoom/Fancybox";

export default function Product({ productId }) {
  const pathname = usePathname();
  const router = useRouter();
  const [productCategory, setProductCategory] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState(false);

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length >= 3) {
      setProductCategory(pathSegments[1]);
    }
  }, [pathname]);

  const { data, loading, error } = useFetchHandTufted(
    productId,
    productCategory
  );

  return (
    <section className="section">
      <div className="product-section">
        {/* <div className="product-top-level">
          <div className="back-btn" onClick={handleBackClick}>
            <i className="hgi-stroke hgi-arrow-left-01" />
          </div>
          <div className="current-path">
            <p>
              <i className="hgi-stroke hgi-home-04" /> {pathname}
            </p>
          </div>
        </div> */}
        {loading ? (
          <Loader />
        ) : (
          <div className="product-body">
            <div className="product-name">
            <div className="back-btn" onClick={handleBackClick}>
                <i className="hgi-stroke hgi-arrow-left-01" />
              </div>
              <h1>
                {data.color} {data.category} carpet
              </h1>
            </div>
            <div className="product-wraper">
              <div className="single-product-image">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-0">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <Fancybox>
                              <div data-fancybox="gallery" href={data?.src}>
                                <Image
                                  src={data?.src}
                                  alt={data?.alt}
                                  width={500}
                                  height={500}
                                  className="w-full"
                                />
                              </div>
                            </Fancybox>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="single-product-details">
                <div className="product-title">
                  <h1>{data?.name}</h1>
                </div>
                <div className="product-description">
                  <p>
                    <span>Product ID:</span> {data?.id}
                  </p>
                  <p>
                    <span>Category:</span> {data?.category}
                  </p>
                  <p>
                    <span>Color: </span>
                    {data?.color}
                  </p>
                  <p>
                    <span>Collection:</span> {data?.collection}
                  </p>
                  {/* <p>
                    <span>Material:</span> {data?.material}
                  </p> */}
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: data.material.replaceAll("&", "<br/>"),
                    }}
                  ></h2>
                </div>
                <div className="product-cta">
                  <button className="btn" onClick={() => setEnquiryForm(true)}>
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {enquiryForm && <Enquiry closeBtn={setEnquiryForm} category={data.category} name={data.name} />}
    </section>
  );
}
