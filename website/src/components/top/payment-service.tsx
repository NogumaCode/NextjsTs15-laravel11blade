"use client";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PaymentGatewayService = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <div>
      <section
        className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10"
        ref={ref}
      >
        <div className="container">
          <div className="content flex items-center gap-8">
            <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
              <h3 className="heading3">Payment Gateway Services</h3>
              <div className="body3 text-secondary">
                Get personalized financial advice to help reach your financial
                goals. Get personalized financial advice to help reach your
                financial goals.
              </div>

              <div className="button-block">
                <Link
                  className="button-main bg-black hover:bg-black text-white bg-blue rounded-full"
                  href="/"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="w-11/12 xl:w-7/12">
              <div
                className="right pl-10"
                style={{
                  transform: isInView ? "none" : undefined,
                  opacity: isInView ? 1 : undefined,
                }}
              >
                <div className="bg-img relative w-full h-[400px]">
                  <Image
                    src="/images/gateway2-bg.webp"
                    alt="image"
                    fill
                    style={{ objectFit: "cover" }} // `style.height`を削除
                  />
                </div>

                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-list text-2xl p-4 rounded-2xl bg-red-400"></i>
                  <div className="text">
                    <div className="heading7">2K+</div>
                    <div className="heading7 text-secondary">Projects</div>
                  </div>
                </div>

                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <Star weight="fill" className="text-yellow-600 text-3xl" />
                  <div className="text">
                    <div className="heading7">4.8</div>
                    <div className="heading7 text-secondary">Satisfaction</div>
                  </div>
                </div>

                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-user text-2xl p-4 rounded-2xl bg-red-600"></i>
                  <div className="text">
                    <div className="heading7">6 Years</div>
                    <div className="heading7 text-secondary">
                      Product Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGatewayService;
