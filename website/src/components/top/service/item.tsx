import Link from "next/link";
import { ServiceItemType } from "@/types/service";

const ServiceItem = ({
  icon,
  title,
  desc,
  number = 0,
}: ServiceItemType) => {
  return (
    <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
       <Link className='service-item-main h-full' href={'/service/service-details/[slug]'}
            as={`/service/service-details/${title.toLowerCase().replace(/ /g,'-')}`}
            >
        <div className="heading flex items-center justify-between">
          <i className={`${icon} text-blue md:text-6xl text-5xl`}></i>
          <div className="number heading3 text-placeholder text-slate-400">
            {number + 1}
          </div>
        </div>
        <div className="heading6 hover:text-blue duration-300">{title}</div>
        <div className="text-secondary mt-2">{desc}</div>
      </Link>
    </div>
  );
};

export default ServiceItem;
