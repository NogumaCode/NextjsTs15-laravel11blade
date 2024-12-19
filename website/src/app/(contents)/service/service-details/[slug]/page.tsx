"use client"
import Breadcrumb from "@/components/breadcrumb";
import Loader from "@/components/loader";
import { IMAGE_BASE_URL } from "@/config/config";
import useFetchServiceDetails from "@/hooks/useFetchServiceDetails";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const ServiceDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const { serviceDetails, loading, error } = useFetchServiceDetails(slug);

  const getTextFromHTML = (html: string | null): string => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!serviceDetails) {
    return <div className="text-center">No service details found.</div>;
  }

  return (
    <>
      <main className="content">
      <Breadcrumb
          link="Our Services Details"
          img="/images/header.webp"
          title={serviceDetails.service_name}
          desc={serviceDetails.service_short}
        />

        <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
          <div className="container">
            <div className="flex max-xl:flex-col gap-y-8">
              <div className="w-full xl:w-3/4">
                <div className="w-full xl:pr-[80px]">
                <div className="heading3">{serviceDetails.service_name}</div>
                  <div className="bg-img mt-5 mb-5">
                  <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full rounded-xl"
                      src={`${IMAGE_BASE_URL}/${serviceDetails.image}`}
                      alt={serviceDetails.service_name}
                    />
                  </div>
                  <div className="body2 text-secondary mt-4">
                    {getTextFromHTML(serviceDetails.service_desc)}
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/4">
                <div className="more-infor border border-line rounded-xl py-8 px-8">
                  <div className="heading6">The best our Services</div>
                  <div className="body3 text-secondary mt-2">
                    Lorem Ipsum passages, and more recently with desktop
                  </div>

                  <div className="list-nav mt-4">
                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        payment solution
                      </div>
                    </Link>

                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        personal finance
                      </div>
                    </Link>

                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        online banking
                      </div>
                    </Link>

                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        financial planning
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                  <div className="bg-img">
                    <Image
                      width={5000}
                      height={5000}
                      src="/images/ads.webp"
                      alt="img"
                    />
                  </div>

                  <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                    <div className="title">
                      <div className="heading5 text-white">Lets Talk</div>
                      <div className="body3 text-white mt-4">
                        If you have project contact us
                      </div>
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main hover:bg-black hover:text-white inline-block bg-white text-button"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceDetails;
