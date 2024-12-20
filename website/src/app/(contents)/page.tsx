import CaseStudy from "@/components/top/case-study";
import PaymentGateway from "@/components/top/payment";
import Service from "@/components/top/service";
import Slider from "@/components/top/slider";
import PaymentGatewayService from "@/components/top/payment-service";
import FormRequest from "@/components/top/form-request";
import Testimonial from "@/components/top/testimonial";
import LatestBlog from "@/components/top/blog";

export default function Home() {
  return (
    <main className="content">
      <Slider />
      <Service />
      <PaymentGateway />
      <CaseStudy />
      <PaymentGatewayService />
      <FormRequest />
      <Testimonial />
      <LatestBlog />
    </main>
  );
}
