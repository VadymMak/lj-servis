export interface Service {
  icon: string;
  title: string;
  description: string;
  priceFrom: string;
}

export interface TrustItem {
  icon: string;
  number: string;
  label: string;
}

export interface WhyUsItem {
  num: string;
  title: string;
  description: string;
}

export interface PriceCategory {
  icon: string;
  category: string;
  items: PriceItem[];
  note: string;
}

export interface PriceItem {
  service: string;
  cost: string;
}

export interface Review {
  stars: number;
  text: string;
  initials: string;
  name: string;
  device: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface GalleryItem {
  label: string;
  large?: boolean;
}
