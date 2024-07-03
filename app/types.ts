export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  name_ar: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
export interface IndustryShort {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
}
export interface ServiceShort {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
}
export interface CourseShort {
  id: string;
  storeId: string;
  categoryId: string;
  c_title: string;
  c_title_ar: string;
  imageUrl: string;
  c_short_intro: string;
  c_short_intro_ar: string;
}
