import CaseStudy from "@/components/top/case-study";
import PaymentGateway from "@/components/top/payment";
import Service from "@/components/top/service";
import Slider from "@/components/top/slider";
import PaymentGatewayService from "@/components/top/payment-service";
import FormRequest from "@/components/top/form-request";
import Testimonial from "@/components/top/testimonial";
import serviceData from "@/data/service.json";
import blogData from "@/data/blog.json";
import LatestBlog from "@/components/top/blog";

export default function Home() {
  return (
    <main className="content">
      <Slider />
      <Service data={serviceData} />
      <PaymentGateway />
      <CaseStudy />
      <PaymentGatewayService />
      <FormRequest />
      <Testimonial />
      <LatestBlog data={blogData} />
    </main>
  );
}
