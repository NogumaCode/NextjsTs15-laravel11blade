"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/bundle";

const Slider = () => {
  // スライドデータを定義
  const slides = [
    {
      id: 1,
      image: "/images/slider/one.jpg",
      title: ["Simplify and Secure", "Our Solution"],
      description:
        "justify items along the center of the container’s main axis <br/>justify items along the center of the container’s main axis",
      link: "/service",
      linkText: "Discover Now",
    },
    {
      id: 2,
      image: "/images/slider/two.jpg",
      title: ["Easy to Use", "Our Solution"],
      description:
        "justify items along the center of the container’s main axis <br/>justify items along the center of the container’s main axis",
      link: "/service",
      linkText: "Discover Now",
    },
  ];

  return (
    <div className="slider-block">
      {/* 前のスライドボタン */}
      <div className="prev-arrow items-center justify-center">
        <Icon.CaretLeft className="text-white heading6" weight="bold" />
      </div>

      {/* スライダー本体 */}
      <div className="slider-main">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
          loop={true}
          pagination={{ clickable: true }}
          speed={400}
          modules={[Pagination, Autoplay, Navigation]}
          className="h-full relative"
          autoplay={{
            delay: 4000,
          }}
        >
          {/* スライドを動的に生成 */}
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider-item slider-first">
                {/* 背景画像 */}
                <div className="bg-img">
                  <Image
                    src={slide.image}
                    width={4000}
                    height={3000}
                    alt={`slider-${slide.id}`}
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* テキストコンテンツ */}
                <div className="container">
                  <div className="text-content flex-column-between">
                    <div className="heading2">
                      {slide.title.map((text, index) => (
                        <div key={index} className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            {text}
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="body2 mt-3 text-secondary"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main bg-blue-700 text-white hover:bg-blue-500"
                        href={slide.link}
                      >
                        {slide.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 次のスライドボタン */}
      <div className="next-arrow items-center justify-center">
        <Icon.CaretRight className="text-white heading6" weight="bold" />
      </div>
    </div>
  );
};

export default Slider;
