// services section
export interface ServiceShort {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
}
interface ServiceDesc {
  id: string;
  storeId: string;
  serviceId: string;
  title: string;
  desc_1: string;
  desc_2: string;
}

interface ServiceDescAr {
  id: string;
  storeId: string;
  serviceId: string;
  title_ar: string;
  desc_1_ar: string;
  desc_2_ar: string;
}

interface ExpertService {
  id: string;
  storeId: string;
  serviceId: string;
  expert_name: string;
  expert_name_ar: string;
  expert_title: string;
  expert_title_ar: string;
  expert_mail: string;
  expert_phone: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
  createdAt: string;
  category: Category;
  serviceDesc: ServiceDesc[];
  serviceDescAr: ServiceDescAr[];
  expertService: ExpertService[];
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
  category: Category; // Added to match the structure of your API response
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

export interface ExpertIndustry {
  id: string;
  storeId: string;
  industryId: string;
  expert_name: string;
  expert_name_ar: string;
  expert_title: string;
  expert_title_ar: string;
  expert_mail: string;
  expert_phone: string;
  imageUrl: string;
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
  expertIndustry: ExpertIndustry[];
}
