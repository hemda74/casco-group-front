type translataionContainer = {
  [key: string]: {
    [key: string]: string;
  };
};
const indexTrans: translataionContainer = {
  // localization button in login page
  langs: {
    en: 'ع',
    ar: 'E',
  },
  //////////////< Titles >////////////////////
  CASCOTitle: {
    en: 'CASCO',
    ar: 'كاسكو',
  },
  /////////////////////////////< NavBar >/////////////////////////////////////////////
  AboutCascoNav: {
    en: 'ABOUT CASCO',
    ar: 'عن كاسكو',
  },
  DirectorMangerNav: {
    en: 'Managing Director',
    ar: 'المدير العام',
  },
  CareersNav: {
    en: 'CAREERS',
    ar: 'وظائف',
  },
  ServicesNav: {
    en: 'SERVICES',
    ar: 'الخدمات',
  },
  CoursesNav: {
    en: 'COURSES',
    ar: 'الكورسات',
  },
  industriesNav: {
    en: 'INDUSTRIES',
    ar: 'الصناعات',
  },
  ContactUsNav: {
    en: 'CONTACT US',
    ar: 'تواصل معنا ',
  },
  NewsNav: {
    en: 'NEWS & INSIGHTS',
    ar: 'الأخبار والرؤى',
  },
  /////////////////////////////< NavBar >/////////////////////////////////////////////
  // hero section in home page
  CompanyName: {
    en: 'Welcome to CASCO',
    ar: 'مرحبا في كاسكو',
  },
  CompanyNamesubtitle: {
    en: 'For Accreditation Certificates',
    ar: 'للاستشارات والتدريب',
  },
  /////////////////////////////< About Section Home Page >/////////////////////////////////////////////
  WhoWeAreAbout: {
    en: 'Who We Are',
    ar: 'من نحن',
  },
  AboutCASCOAbout: {
    en: 'About CASCO',
    ar: 'عن كاسكو',
  },
  AboutCascoText: {
    en: 'CASCO For Assessment Services Co. helps certification bodies adopt and adhere to international standards through streamlined processes and expert training. CASCO provides independent technical assessments to ensure compliance with product standards and simplify the implementation and maintenance of these standards.',
    ar: 'تساعد شركة كاسو لخدمات التقييم الجهات المانحة في تبني المعايير الدولية والالتزام بها من خلال عمليات مبسطة وتدريب الخبراء. تقدم كاسكو تقييمات فنية مستقلة لضمان الامتثال لمعايير المنتج وتبسيط تنفيذ وصيانة هذه المعايير.',
  },
  LearnMoreAbout: {
    en: 'Learn More',
    ar: 'اعرف المزيد',
  },
  /////////////////////////////////// services page //////////////////////////////////////////////////
  ServicesNav2: {
    en: ' > Services',
    ar: ' > خدماتنا',
  },
  Applynow: {
    en: 'Apply now',
    ar: 'قدم الان',
  },
  /////////////////////////////////// Recogention Section //////////////////////////////////////////////
  Internationalrecognition: {
    en: 'International recognition',
    ar: 'الإعتراف الدولي',
  },
  InternationalrecognitionParagraph: {
    en: 'CASCO is distinguished by its technical expertise in the 17000 family standards, whether in qualification, training, or independent evaluation. Additionally, the company provides product management and branding systems through the iCASCO platform, which enables SASO, SFDA, and SABER trademark issuers to easily and efficiently manage conformity certification COC processes.',
    ar: 'تتميز شركة كاسكو بتخصصها التقني والفني في معايير الأسرة 17000، سواءً في التأهيل أو التدريب أو التقييم المستقل. كما تتميز الشركة بتقديم أنظمة إدارة المنتجات والعلامات التجارية من خلال منصة iCASCO، والتي تمكِّن الجهات المانحة لعلامات SASO وSFDA وSABER من إدارة عمليات منح شهادات المطابقة بسهولة وفعالية.',
  },

  /////////////////////////////////// services section //////////////////////////////////////////////////

  ////////////////////< Board of Directors >//////////////////////////////////
};
export default indexTrans;
