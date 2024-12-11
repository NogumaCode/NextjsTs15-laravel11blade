import AboutSection from "@/components/about";
import Breadcrumb from "@/components/breadcrumb";
import Counter from "@/components/about/counter";
import Service from "@/components/top/service";
import serviceData from "@/data/service.json";

const AboutPage = () => {
  return (
    <>
      <main className="content">
        <Breadcrumb
          link="About Us"
          img="/images/header.webp"
          title="About Us"
          desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
        />
        <AboutSection />
        <Counter classname="lg:pb-[50px] sm:pb-16 pb-10" />
        <Service data={serviceData} />
      </main>
    </>
  );
};

export default AboutPage;
