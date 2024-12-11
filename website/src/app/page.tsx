import CaseStudy from "@/components/top/case-study";
import Header from "@/components/header";
import PaymentGateway from "@/components/top/payment";
import Service from "@/components/top/service";
import Slider from "@/components/top/slider";
import PaymentGatewayService from "@/components/top/payment-service";
import FormRequest from "@/components/top/form-request";
import Testimonial from "@/components/top/testimonial";
import serviceData from "@/data/service.json";
import blogData from "@/data/blog.json";
import LatestBlog from "@/components/top/blog";

import Footer from "@/components/footer";
import Partner from "@/components/footer/partner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="content">
        <Slider />
        <Service data={serviceData} />
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayService />
        <FormRequest />
        <Testimonial />
        <LatestBlog data={blogData} />
        <div className="lg:mt-[100px] sm:mt-16 mt-10">
          <Partner />
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
