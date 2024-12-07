"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';

const Slider = () => {
   // スライドデータを定義
   const slides = [
    {
      id: 1,
      image: "/images/slider/one.jpg",
      title: "全てをコンポーネント化する",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      link: "/service",
      linkText: "サービスとは",
    },
    {
      id: 2,
      image: "/images/slider/two.jpg",
      title: "使用するのは簡単です",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      link: "/service",
      linkText: "サービスとは",
    },
  ];
  return (
    <>
      <div className="slider-block">
        <div className="prev-arrow items-center justify-center">
          <CaretLeft className="text-white heading6" weight="bold" />
        </div>
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
            modules={[Pagination, Autoplay, Navigation]}
            className="h-full relative"
            autoplay={{ delay: 4000 }}
          >
             {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider-item slider-first">
                <div className="bg-img">
                  <Image
                    src={slide.image}
                    width={4000}
                    height={3000}
                    alt={`slide-${slide.id}`}
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-column-between">
                    <div className="heading2">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {slide.title}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-secondary">
                      {slide.description}
                    </div>
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
        <div className="next-arrow items-center justify-center">
          <CaretRight className="text-white heading6" weight="bold" />
        </div>
      </div>
    </>
  );
};

export default Slider;
