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
/// industry section
export interface IndustryShort {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
}

export interface Category {
  id: string;
  storeId: string;
  billboardId: string;
  name: string;
  name_ar: string;
  createdAt: string;
  updatedAt: string;
}

export interface IndustryDetailesPoint {
  id: string;
  industrydetailesId: string;
  text: string;
}

export interface IndustryDetailes {
  id: string;
  storeId: string;
  industryId: string;
  title: string;
  title_ar: string;
  industryDetailesPoint: IndustryDetailesPoint[];
  industryDetailesPointAr: IndustryDetailesPoint[];
}

export interface IndustryDetailesPoint2 {
  id: string;
  detaId: string;
  text: string;
}

export interface IndustryDetailes2 {
  id: string;
  storeId: string;
  industryId: string;
  title: string;
  title_ar: string;
  industryDetailesPoint2: IndustryDetailesPoint2[];
  industryDetailesPointAr2: IndustryDetailesPoint2[];
}

export interface Industry {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
  category: Category;
  industryDetailes: IndustryDetailes[];
  industryDetailes2: IndustryDetailes2[];
}
