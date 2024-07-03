import axios from 'axios';
import { IndustryShort } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}eb987d3c-1a94-43ba-abb2-bd01eaa03791/services`;

export const fetchIndustries = async (): Promise<IndustryShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
