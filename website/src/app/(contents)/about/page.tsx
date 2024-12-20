"use client";
import AboutSection from "@/components/about";
import Breadcrumb from "@/components/breadcrumb";
import Counter from "@/components/about/counter";
import Service from "@/components/top/service";
import Loader from "@/components/loader";
import useFetchAbout from "@/hooks/useFetchAbout";

const AboutPage = () => {
  const { aboutData, loading, error } = useFetchAbout();

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

  if (!aboutData) {
    return <div className="text-center">No data available.</div>;
  }

  return (
    <>
      <main className="content">
        <Breadcrumb
          link="About Us"
          img="/images/header.webp"
          title="About Us"
          desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher"
        />
        <AboutSection about={aboutData} />
        <Counter about={aboutData} classname="lg:pb-[50px] sm:pb-16 pb-10" />
        <Service />
      </main>
    </>
  );
};

export default AboutPage;
