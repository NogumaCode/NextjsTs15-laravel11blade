"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ServiceItem from "./item";
import useFetchServices from "@/hooks/useFetchServices";

const Service = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const { services, error } = useFetchServices();

  if (error) {
    return (
      <div className="text-center text-red-500">
        エラーが発生しました: {error.message}
      </div>
    );
  }

  return (
    <div>
      <section
        className="service-block lg:mt-[100px] sm:mt-16 mt-10 mb-6"
        ref={ref}
      >
        <div className="container">
          <h3 className="heading3 text-center">Our Services</h3>
          <div
            className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
            style={{
              transform: isInView ? "none" : "translateY(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55,1) 0.3s",
            }}
          >
            {services.slice(0, 6).map((item, index) => (
              <ServiceItem key={item.id} data={item} number={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
