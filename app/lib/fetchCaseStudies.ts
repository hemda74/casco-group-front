// import axios from 'axios';
// import { CaseStudy } from '../types';

// const API_URL = `${process.env.NEXT_PUBLIC_API_URL}case-studies || 'http://127.0.0.1:80'`;

// export const fetchCaseStudiesByIndustryId = async (
//   industryId: string
// ): Promise<CaseStudy[]> => {
//   const response = await axios.get(API_URL);
//   const allCaseStudies: CaseStudy[] = response.data;
//   return allCaseStudies.filter(
//     caseStudy => caseStudy.industryId === industryId
//   );
// };
