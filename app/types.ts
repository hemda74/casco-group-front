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
  CourseType: CourseType;
  category: Category;
  coursetypeId: string;
}
export interface Course {
  id: string;
  storeId: string;
  categoryId: string;
  c_title: string;
  c_title_ar: string;
  price_egp: number;
  price_uae: number;
  price_ksa: number;
  price_usd: number;
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
// events
interface ParagraphEvent {
  id: string;
  eventId: string;
  text: string;
}

export interface Event {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  title_ar: string;
  imageUrl: string;
  createdAt: string;
  date_of_event: string;
  date_of_event_ar: string;
  paragraph_event: ParagraphEvent[];
  paragraph_event_ar: ParagraphEvent[];
  category: Category;
}
interface ParagraphEvent2 {
  id: string;
  eventId: string;
  text: string;
}

export interface Event2 {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  title_ar: string;
  imageUrl: string;
  createdAt: string;
  date_of_event: string;
  date_of_event_ar: string;
  paragraph_event2: ParagraphEvent2[];
  paragraph_event_ar2: ParagraphEvent2[];
  category: Category;
}
interface ParagraphEvent3 {
  id: string;
  eventId: string;
  text: string;
}

export interface Event3 {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  title_ar: string;
  imageUrl: string;
  createdAt: string;
  date_of_event: string;
  date_of_event_ar: string;
  paragraph_event3: ParagraphEvent3[];
  paragraph_event_ar3: ParagraphEvent3[];
  category: Category;
}

interface ParagraphNews {
  id: string;
  newsId: string;
  text: string;
}

export interface News {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  title_ar: string;
  imageUrl: string;
  createdAt: string;
  date_of_news: string;
  date_of_news_ar: string;
  paragraph_news: ParagraphNews[];
  paragraph_news_ar: ParagraphNews[];
  category: Category;
}
export interface Reco {
  id: string;
  storeId: string;
  imageUrl: string;
  title: string;
  title_ar: string;
}
export interface Test {
  id: string;
  storeId: string;
  imageUrl: string;
  text: string;
  name: string;
  title: string;
  text_ar: string;
  name_ar: string;
  title_ar: string;
}
export interface Teams {
  id: string;
  storeId: string;
  name: string;
  name_ar: string;
  address: string;
  address_ar: string;
  linkedin: string;
  phone: string;
  imageUrl: string;
}
export interface Member {
  id: string;
  storeId: string;
  teamId: string;
  name: string;
  name_ar: string;
  title: string;
  title_ar: string;
  brief_1: string;
  brief_2: string;
  brief_3: string;
  brief_1_ar: string;
  brief_2_ar: string;
  brief_3_ar: string;
  imageUrl: string;
  team: Teams;
}
