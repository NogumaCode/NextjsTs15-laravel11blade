export interface BreadType{
  link:string;
  img:string;
  title?:string;
  desc?:string;
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
export interface ServiceItemType {
  icon: string;
  category: string;
  title: string;
  desc: string;
  shortDesc: string;
  number?: number;
}
