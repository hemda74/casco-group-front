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

/// industry section
export interface IndustryShort {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  name_ar: string;
  category: Category; // Added to match the structure of your API response
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
export interface CaseStudyPoint {
  id: string;
  p1: string;
  caseId: string;
}

export interface CaseStudyPointAr {
  id: string;
  p1: string;
  caseId: string;
}

export interface CaseStudy {
  id: string;
  storeId: string;
  title: string;
  title_ar: string;
  sub_title: string;
  sub_title_ar: string;
  paragraph_1: string;
  paragraph_1_ar: string;
  paragraph_2: string;
  paragraph_2_ar: string;
  industryId: string;
  imageUrl: string;
  industry: Industry;
  caseStudyPoint: CaseStudyPoint[];
  caseStudyPointAr: CaseStudyPointAr[];
}
/// courses section ///////////
export interface CourseShort {
  id: string;
  storeId: string;
  categoryId: string;
  c_title: string;
  c_title_ar: string;
  imageUrl: string;
  c_short_intro_en: string;
  c_short_intro_ar: string;
}
export interface Course {
  id: string;
  storeId: string;
  categoryId: string;
  c_title: string;
  c_title_ar: string;
  price_egp: string;
  price_uae: string;
  price_ksa: string;
  price_usd: string;
  c_short_intro_en: string;
  c_short_intro_ar: string;
  c_duration_en: string;
  c_duration_ar: string;
  c_in_house_en: string;
  c_in_house_ar: string;
  c_delv_and_leaders_en: string;
  c_delv_and_leaders_ar: string;
  imageUrl: string;
  coursetypeId: string;
  CourseType: CourseType;
  category: Category;
  c_benefit_ar: CourseBenefit[];
  c_benefit_en: CourseBenefit[];
  c_content2_ar: CourseContent[];
  c_content2_en: CourseContent[];
  c_content_ar: CourseContent[];
  c_content_en: CourseContent[];
  c_date_ar: CourseDate[];
  c_date_en: CourseDate[];
  c_intro_ar: CourseIntro[];
  c_intro_en: CourseIntro[];
  c_objective_ar: CourseObjective[];
  c_objective_en: CourseObjective[];
  c_who_should_ar: CourseWhoShould[];
  c_who_should_en: CourseWhoShould[];
}

export interface CourseType {
  id: string;
  storeId: string;
  name: string;
  name_ar: string;
}

export interface Category {
  id: string;
  storeId: string;
  name: string;
  name_ar: string;
  createdAt: string;
  updatedAt: string;
}

interface CourseBenefit {
  id: number;
  text: string;
  courseId: string;
}

interface CourseContent {
  id: number;
  text: string;
  courseId: string;
}

interface CourseDate {
  id: number;
  text: string;
  courseId: string;
}

interface CourseIntro {
  id: number;
  text: string;
  courseId: string;
}

interface CourseObjective {
  id: number;
  text: string;
  courseId: string;
}

interface CourseWhoShould {
  id: number;
  text: string;
  courseId: string;
}
