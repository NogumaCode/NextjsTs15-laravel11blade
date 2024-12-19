"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { ClipLoader } from "react-spinners";
import useFetchTestimonials from "@/hooks/useFetchTestimonials";
import { API_BASE_URL } from "@/config/config";
import { TestimonialType } from "@/types/content";

const Testimonial = () => {
  const { testimonials, loading, error } = useFetchTestimonials(`${API_BASE_URL}/gettestimonial`);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="testimonial-block bg-slate-100">
        <div className="container">
          <div className="testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center">
            <div className="content sm:w-2/3 w-[85%]">
              <div className="heading3 text-center">
                Trusted By Professionals
              </div>
              {
        loading ? (
            <div className='flex justify-center items-center h-[500px]'>
            <ClipLoader color='#3498db' size={50} />
        </div>
        ) : (

              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                speed={400}
                modules={[Pagination, Autoplay, Navigation]}
                className="h-full relative lg:mt-10 mt-7"
                autoplay={{
                  delay: 4000,
                }}
              >
                {testimonials.slice(0,3).map((item: TestimonialType) => (
            <SwiperSlide className='lg:pb-24 pb-20' key={item.id}>
            <div className='text-2xl font-medium text-center'>
                {String.raw`"`}{item.message} {String.raw`"`}
            </div>
            <div className='text-button text-center mt-5'>
            {item.name} - {item.position}
            </div>
         </SwiperSlide>
        ))}
              </Swiper>
               )  }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
