import Header from "@/components/Header/page";
import Service from "@/components/Service/page";
import Slider from "@/components/Slider/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="content">
        <Slider />
        <Service />
      </main>
    </div>
  );
}
