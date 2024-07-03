import axios from 'axios';
import { IndustryShort } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}562dd995-dc35-4d41-9ab5-749b8259f5cb/industries`;

export const fetchIndustries = async (): Promise<IndustryShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
