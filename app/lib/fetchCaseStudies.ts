import axios from 'axios';
import { CaseStudy } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}case-studies`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/case-studies';

export const fetchCaseStudiesByIndustryId = async (
  industryId: string
): Promise<CaseStudy[]> => {
  try {
    const response = await axios.get(API_URL);
    const allCaseStudies: CaseStudy[] = response.data || [];
    return allCaseStudies.filter(
      caseStudy => caseStudy.industryId === industryId
    );
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};
