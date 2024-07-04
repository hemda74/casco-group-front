import axios from 'axios';
import { IndustryShort } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}industries`;

export const fetchIndustries = async (): Promise<IndustryShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
