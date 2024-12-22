export interface BreadType{
  link:string;
  img:string;
  title?:string;
  desc?: string | null;
  }
export interface CounterType{
  classname:string;
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

export type BlogPostType = {
  id: number;
  blogcat_id: number;
  post_title: string;
  post_slug: string;
  image: string;
  long_descp: string | null;
  created_at: string | null;
  updated_at: string | null;
  category_name: string; // 結合されたカテゴリー名を追加
};

export type BlogCategoryType = {
  id: number;
  blog_category: string;
  slug: string;
  created_at: string | null;
  updated_at: string | null;
};

interface BaseType {
  created_at: string | null;
  updated_at: string | null;
}

export interface BlogListType extends BaseType {
  id: number;
  blogcat_id: number;
  post_title: string;
  post_slug: string;
  image: string;
  long_descp: string | null;
  category_name?: string; // 関連するカテゴリ名
}

export interface CategoryType extends BaseType {
  id: number;
  blog_category: string;
  slug: string;
}

export interface AboutType  {
  id: number;
  title: string;
  description: string;
  image: string;
  phone: string;
  setup_growth: number;
  passive_income: number;
  problem_solving: number;
  goal_achiever: number;
};

// src/types/content.ts
export interface SiteSettingType {
  address: string;
  email: string;
  facebook?: string;
  youtube?: string;
};

export interface FooterType {
  footer_message?: string;
  facebook?: string;
  youtube?: string;
  phone?: string;
  address?: string;
};

export interface ContactFormType {
  name: string;
  subject: string;
  email: string;
  message: string;
};
