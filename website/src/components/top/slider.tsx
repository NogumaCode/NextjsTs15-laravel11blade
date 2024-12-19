"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/bundle";
import { IMAGE_BASE_URL } from "@/config/config";
import useFetchSliders from "@/hooks/useFetchSlider";

const Slider = () => {
  const { sliders, error } = useFetchSliders();

  if (error) {
    return <div className="text-red-500">エラー: {error.message}</div>;
  }
  return (
    <>
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
            {sliders.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div className="slider-item slider-first">
                  {/* 背景画像 */}
                  <div className="bg-img">
                    <Image
                      src={`${IMAGE_BASE_URL}/${slider.image}`}
                      width={4000}
                      height={3000}
                      alt={slider.heading}
                      priority={true}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="container">
                    <div className="text-content flex-column-between">
                      <div className="heading2">
                        <div className="relative overflow-hidden">
                          <span className="block relative overflow-hidden">
                            {slider.heading}
                          </span>
                          <span className="block absolute top-0 left-0 w-full h-full">
                            {slider.heading}
                          </span>
                        </div>
                      </div>
                      <div className="body2 mt-3 text-secondary">
                        {" "}
                        {slider.description}
                      </div>
                      <div className="button-block md:mt-10 mt-6">
                        <Link
                          className="button-main bg-blue-700 text-white hover:bg-blue-500"
                          href={slider.link}
                        >
                          詳細を見る
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
    </>
  );
};

export default Slider;
