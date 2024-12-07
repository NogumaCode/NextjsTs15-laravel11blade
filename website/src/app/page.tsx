import Header from "@/components/Header/page";
import Service from "@/components/Service/page";
import Slider from "@/components/Sidebar/page";
import serviceData from '@/data/service.json';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="content">
        <Slider />
        <Service data={serviceData} />
      </main>
    </div>
  );
}
