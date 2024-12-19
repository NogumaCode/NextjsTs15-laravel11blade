export interface BreadType{
  link:string;
  img:string;
  title?:string;
  desc?: string | null;
  }
export interface CounterType{
  classname:string;
}

export interface BlogItemType {
  id: number;
  tag: string;
  category: string;
  img: string;
  title: string;
  author: string;
  avatar: string;
  date: string;
  desc: string;
  listImg: string[];
}
export interface BlogListType {
  data: BlogItemType[];
}

export interface SliderType {
  id: number;
  heading: string;
  description: string | null;
  link: string;
  image: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface ServiceType {
  id: number;
  service_name: string;
  slug: string;
  service_short: string | null;
  service_desc: string | null;
  icon: string | null;
  image: string | null;
  created_at: string | null;
  updated_at: string | null;

}

export interface ServiceItemType {
  data: ServiceType;
  number: number;
}

export interface ServiceDetailsType {
  id: number;
  service_name: string;
  slug: string;
  service_short: string | null;
  service_desc: string | null;
  icon: string | null;
  image: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface GatewayType {
  id: number;
  title: string;
  phone: string;
  description: string | null;
  image: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface GatewayServiceType {
  id: number;
  title: string;
  description: string | null;
  project: string;
  review: string;
  experience: string;
  image: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  message: string;
  created_at: string | null;
  updated_at: string | null;
}
